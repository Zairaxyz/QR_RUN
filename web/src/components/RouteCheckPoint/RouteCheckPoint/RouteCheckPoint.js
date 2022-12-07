import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_ROUTE_CHECK_POINT_MUTATION = gql`
  mutation DeleteRouteCheckPointMutation($id: String!) {
    deleteRouteCheckPoint(id: $id) {
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

const RouteCheckPoint = ({ routeCheckPoint }) => {
  const [deleteRouteCheckPoint] = useMutation(
    DELETE_ROUTE_CHECK_POINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('RouteCheckPoint deleted')
        navigate(routes.routeCheckPoints())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete routeCheckPoint ' + id + '?')
    ) {
      deleteRouteCheckPoint({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            RouteCheckPoint {routeCheckPoint.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{routeCheckPoint.id}</td>
            </tr>
            <tr>
              <th>Check point</th>
              <td>{routeCheckPoint.checkPoint}</td>
            </tr>
            <tr>
              <th>Before</th>
              <td>{routeCheckPoint.before}</td>
            </tr>
            <tr>
              <th>Total distance</th>
              <td>{routeCheckPoint.totalDistance}</td>
            </tr>
            <tr>
              <th>Is start</th>
              <td>{checkboxInputTag(routeCheckPoint.isStart)}</td>
            </tr>
            <tr>
              <th>Is finish</th>
              <td>{checkboxInputTag(routeCheckPoint.isFinish)}</td>
            </tr>
            <tr>
              <th>Park id</th>
              <td>{routeCheckPoint.parkId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRouteCheckPoint({ id: routeCheckPoint.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(routeCheckPoint.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default RouteCheckPoint
