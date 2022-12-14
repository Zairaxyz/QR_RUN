import { Link, routes } from '@redwoodjs/router'

import Parks from 'src/components/Park/Parks'

export const QUERY = gql`
  query FindParks {
    parks {
      id
      park_name
      image_url
      description
      address
      working_time
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No parks yet. '}
      <Link to={routes.newPark()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ parks }) => {
  return <Parks parks={parks} />
}
