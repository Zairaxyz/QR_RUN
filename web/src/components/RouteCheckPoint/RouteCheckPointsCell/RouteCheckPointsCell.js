import { Link, routes } from '@redwoodjs/router'

import RouteCheckPoints from 'src/components/RouteCheckPoint/RouteCheckPoints'

export const QUERY = gql`
  query FindRouteCheckPoints {
    routeCheckPoints {
      id
      checkPoint
      before
      totalDistance
      isStart
      isFinish
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No routeCheckPoints yet. '}
      <Link to={routes.newRouteCheckPoint()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routeCheckPoints }) => {
  return <RouteCheckPoints routeCheckPoints={routeCheckPoints} />
}
