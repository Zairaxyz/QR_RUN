import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query BlogParksQuery {
    parks {
      id
      park_name
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ parks }) => {
  return (
    <>
      {parks.map((park) => (
        <div key={park.id}>
          <div className="text- xl my-4 flex w-full justify-center">
            <Link to={routes.blogPark({ id: park.id })}>{park.park_name}</Link>
          </div>
          <div className="flex w-full items-center justify-center">
            <Link to={routes.blogPark({ id: park.id })}>
              <img src={park.image_url} alt="" width="700" height="700" />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
