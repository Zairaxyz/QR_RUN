import BlogPark from 'src/components/BlogPark'

export const QUERY = gql`
  query FindBlogParkQuery($id: Int!) {
    park(id: $id) {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ park }) => {
  return <BlogPark park={park} />
}
