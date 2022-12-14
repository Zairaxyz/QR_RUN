import { Link, routes } from '@redwoodjs/router'

import CheckPoints from 'src/components/CheckPoint/CheckPoints'

export const QUERY = gql`
  query FindCheckPoints {
    checkPoints {
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
      {'No checkPoints yet. '}
      <Link to={routes.newCheckPoint()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ checkPoints }) => {
  return <CheckPoints checkPoints={checkPoints} />
}
