import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Scanner/ScannersCell'

const DELETE_SCANNER_MUTATION = gql`
  mutation DeleteScannerMutation($id: String!) {
    deleteScanner(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (value) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ScannersList = ({ scanners }) => {
  const [deleteScanner] = useMutation(DELETE_SCANNER_MUTATION, {
    onCompleted: () => {
      toast.success('Scanner deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete scanner ' + id + '?')) {
      deleteScanner({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Park id</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {scanners.map((scanner) => (
            <tr key={scanner.id}>
              <td>{truncate(scanner.id)}</td>
              <td>{truncate(scanner.parkId)}</td>
              <td>{truncate(scanner.longitude)}</td>
              <td>{truncate(scanner.latitude)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scanner({ id: scanner.id })}
                    title={'Show scanner ' + scanner.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editScanner({ id: scanner.id })}
                    title={'Edit scanner ' + scanner.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete scanner ' + scanner.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(scanner.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScannersList
