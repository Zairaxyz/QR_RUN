import { Link, routes } from "@redwoodjs/router"

export const QUERY = gql`
  query BlogParksQuery {
    parks {
      id
      parkName
      imageUrl
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
          <div className="mt-6 text-xl font-bold flex justify-center">
            <Link to={routes.blogPark({ id: park.id })}>{park.parkName}</Link>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <Link to={routes.blogPark({ id: park.id })}><img src={park.imageUrl} alt="park" className="h-64 w-96 md:h-[30rem] md:w-[40rem]" /></Link>
          </div>
        </div>
      ))}
    </>
  )
}
