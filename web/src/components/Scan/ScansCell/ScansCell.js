import { Link, routes } from '@redwoodjs/router'

import Scans from 'src/components/Scan/Scans'

export const QUERY = gql`
  query FindScans {
    scans {
      id
      longitude
      latitude
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No scans yet. '}
      <Link to={routes.newScan()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ scans }) => {
  return <Scans scans={scans} />
}
