import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/RouteCheckPoint/RouteCheckPointsCell'

const DELETE_ROUTE_CHECK_POINT_MUTATION = gql`
  mutation DeleteRouteCheckPointMutation($id: String!) {
    deleteRouteCheckPoint(id: $id) {
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

const RouteCheckPointsList = ({ routeCheckPoints }) => {
  const [deleteRouteCheckPoint] = useMutation(
    DELETE_ROUTE_CHECK_POINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('RouteCheckPoint deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Check point</th>
            <th>Before</th>
            <th>Total distance</th>
            <th>Is start</th>
            <th>Is finish</th>
            <th>Park id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {routeCheckPoints.map((routeCheckPoint) => (
            <tr key={routeCheckPoint.id}>
              <td>{truncate(routeCheckPoint.id)}</td>
              <td>{truncate(routeCheckPoint.checkPoint)}</td>
              <td>{truncate(routeCheckPoint.before)}</td>
              <td>{truncate(routeCheckPoint.totalDistance)}</td>
              <td>{checkboxInputTag(routeCheckPoint.isStart)}</td>
              <td>{checkboxInputTag(routeCheckPoint.isFinish)}</td>
              <td>{truncate(routeCheckPoint.parkId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.routeCheckPoint({ id: routeCheckPoint.id })}
                    title={
                      'Show routeCheckPoint ' + routeCheckPoint.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRouteCheckPoint({ id: routeCheckPoint.id })}
                    title={'Edit routeCheckPoint ' + routeCheckPoint.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete routeCheckPoint ' + routeCheckPoint.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(routeCheckPoint.id)}
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

export default RouteCheckPointsList
