import { Link, routes } from '@redwoodjs/router'

import Routescanners from 'src/components/Routescanner/Routescanners'

export const QUERY = gql`
  query FindRoutescanners {
    routescanners {
      id
      scanner
      before
      total_distance
      is_start
      is_stop
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No routescanners yet. '}
      <Link to={routes.newRoutescanner()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routescanners }) => {
  return <Routescanners routescanners={routescanners} />
}
