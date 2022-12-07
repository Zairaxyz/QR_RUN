import RouteCheckPoint from 'src/components/RouteCheckPoint/RouteCheckPoint'

export const QUERY = gql`
  query FindRouteCheckPointById($id: String!) {
    routeCheckPoint: routeCheckPoint(id: $id) {
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

export const Empty = () => <div>RouteCheckPoint not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routeCheckPoint }) => {
  return <RouteCheckPoint routeCheckPoint={routeCheckPoint} />
}
