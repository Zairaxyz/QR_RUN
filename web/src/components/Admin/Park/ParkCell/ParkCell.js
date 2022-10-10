import Park from 'src/components/Admin/Park/Park'

export const QUERY = gql`
  query FindParkById($id: Int!) {
    park: park(id: $id) {
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

export const Empty = () => <div>Park not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ park }) => {
  return <Park park={park} />
}
