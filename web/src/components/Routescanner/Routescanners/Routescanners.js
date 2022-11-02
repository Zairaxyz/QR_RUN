import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Routescanner/RoutescannersCell'

const DELETE_ROUTESCANNER_MUTATION = gql`
  mutation DeleteRoutescannerMutation($id: String!) {
    deleteRoutescanner(id: $id) {
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

const RoutescannersList = ({ routescanners }) => {
  const [deleteRoutescanner] = useMutation(DELETE_ROUTESCANNER_MUTATION, {
    onCompleted: () => {
      toast.success('Routescanner deleted')
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
    if (confirm('Are you sure you want to delete routescanner ' + id + '?')) {
      deleteRoutescanner({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Scanner</th>
            <th>Before</th>
            <th>Total distance</th>
            <th>Is start</th>
            <th>Is stop</th>
            <th>Park id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {routescanners.map((routescanner) => (
            <tr key={routescanner.id}>
              <td>{truncate(routescanner.id)}</td>
              <td>{truncate(routescanner.scanner)}</td>
              <td>{truncate(routescanner.before)}</td>
              <td>{truncate(routescanner.total_distance)}</td>
              <td>{checkboxInputTag(routescanner.is_start)}</td>
              <td>{checkboxInputTag(routescanner.is_stop)}</td>
              <td>{truncate(routescanner.parkId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.routescanner({ id: routescanner.id })}
                    title={'Show routescanner ' + routescanner.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRoutescanner({ id: routescanner.id })}
                    title={'Edit routescanner ' + routescanner.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete routescanner ' + routescanner.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(routescanner.id)}
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

export default RoutescannersList
