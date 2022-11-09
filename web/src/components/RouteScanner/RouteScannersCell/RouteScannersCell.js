import { Link, routes } from '@redwoodjs/router'

import RouteScanners from 'src/components/RouteScanner/RouteScanners'

export const QUERY = gql`
  query FindRouteScanners {
    routeScanners {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No routeScanners yet. '}
      <Link to={routes.newRouteScanner()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routeScanners }) => {
  return <RouteScanners routeScanners={routeScanners} />
}
