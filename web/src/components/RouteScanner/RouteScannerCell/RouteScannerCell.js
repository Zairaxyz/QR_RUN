import RouteScanner from 'src/components/RouteScanner/RouteScanner'

export const QUERY = gql`
  query FindRouteScannerById($id: String!) {
    routeScanner: routeScanner(id: $id) {
      id
      after
      before
      total_distance
      is_start
      is_finish
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>RouteScanner not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routeScanner }) => {
  return <RouteScanner routeScanner={routeScanner} />
}
