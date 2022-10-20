import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Scan/ScansCell'

const DELETE_SCAN_MUTATION = gql`
  mutation DeleteScanMutation($id: String!) {
    deleteScan(id: $id) {
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

const ScansList = ({ scans }) => {
  const [deleteScan] = useMutation(DELETE_SCAN_MUTATION, {
    onCompleted: () => {
      toast.success('Scan deleted')
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
    if (confirm('Are you sure you want to delete scan ' + id + '?')) {
      deleteScan({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Park id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan) => (
            <tr key={scan.id}>
              <td>{truncate(scan.id)}</td>
              <td>{truncate(scan.longitude)}</td>
              <td>{truncate(scan.latitude)}</td>
              <td>{truncate(scan.parkId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.scan({ id: scan.id })}
                    title={'Show scan ' + scan.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editScan({ id: scan.id })}
                    title={'Edit scan ' + scan.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete scan ' + scan.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(scan.id)}
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

export default ScansList
