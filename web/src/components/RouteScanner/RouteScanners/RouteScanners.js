import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/RouteScanner/RouteScannersCell'

const DELETE_ROUTE_SCANNER_MUTATION = gql`
  mutation DeleteRouteScannerMutation($id: String!) {
    deleteRouteScanner(id: $id) {
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

const RouteScannersList = ({ routeScanners }) => {
  const [deleteRouteScanner] = useMutation(DELETE_ROUTE_SCANNER_MUTATION, {
    onCompleted: () => {
      toast.success('RouteScanner deleted')
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
    if (confirm('Are you sure you want to delete routeScanner ' + id + '?')) {
      deleteRouteScanner({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>After</th>
            <th>Before</th>
            <th>Total distance</th>
            <th>Is start</th>
            <th>Is finish</th>
            <th>Park id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {routeScanners.map((routeScanner) => (
            <tr key={routeScanner.id}>
              <td>{truncate(routeScanner.id)}</td>
              <td>{truncate(routeScanner.after)}</td>
              <td>{truncate(routeScanner.before)}</td>
              <td>{truncate(routeScanner.total_distance)}</td>
              <td>{checkboxInputTag(routeScanner.is_start)}</td>
              <td>{checkboxInputTag(routeScanner.is_finish)}</td>
              <td>{truncate(routeScanner.parkId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.routeScanner({ id: routeScanner.id })}
                    title={'Show routeScanner ' + routeScanner.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRouteScanner({ id: routeScanner.id })}
                    title={'Edit routeScanner ' + routeScanner.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete routeScanner ' + routeScanner.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(routeScanner.id)}
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

export default RouteScannersList
