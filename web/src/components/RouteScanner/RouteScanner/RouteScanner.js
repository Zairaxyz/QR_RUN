import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_ROUTE_SCANNER_MUTATION = gql`
  mutation DeleteRouteScannerMutation($id: String!) {
    deleteRouteScanner(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const RouteScanner = ({ routeScanner }) => {
  const [deleteRouteScanner] = useMutation(DELETE_ROUTE_SCANNER_MUTATION, {
    onCompleted: () => {
      toast.success('RouteScanner deleted')
      navigate(routes.routeScanners())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete routeScanner ' + id + '?')) {
      deleteRouteScanner({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            RouteScanner {routeScanner.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{routeScanner.id}</td>
            </tr>
            <tr>
              <th>After</th>
              <td>{routeScanner.after}</td>
            </tr>
            <tr>
              <th>Before</th>
              <td>{routeScanner.before}</td>
            </tr>
            <tr>
              <th>Total distance</th>
              <td>{routeScanner.total_distance}</td>
            </tr>
            <tr>
              <th>Is start</th>
              <td>{checkboxInputTag(routeScanner.is_start)}</td>
            </tr>
            <tr>
              <th>Is finish</th>
              <td>{checkboxInputTag(routeScanner.is_finish)}</td>
            </tr>
            <tr>
              <th>Park id</th>
              <td>{routeScanner.parkId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRouteScanner({ id: routeScanner.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(routeScanner.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default RouteScanner
