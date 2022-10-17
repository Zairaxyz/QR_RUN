import { Link, routes } from '@redwoodjs/router'

import Runs from 'src/components/Run/Runs'

export const QUERY = gql`
  query FindRuns {
    runs {
      id
      start_timestamp
      stop_timestamp
      total_distance
      pace
      userId
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No runs yet. '}
      <Link to={routes.newRun()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ runs }) => {
  return <Runs runs={runs} />
}
