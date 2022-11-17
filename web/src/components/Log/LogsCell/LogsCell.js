import { Link, routes } from '@redwoodjs/router'

import Logs from 'src/components/Log/Logs'

export const QUERY = gql`
  query FindLogs {
    logs {
      id
      userId
      scannerId
      time_stamp
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No logs yet. '}
      <Link to={routes.newLog()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ logs }) => {
  return <Logs logs={logs} />
}