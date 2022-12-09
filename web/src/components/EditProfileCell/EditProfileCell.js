import EditProfile from "../EditProfile/EditProfile"

export const QUERY = gql`
  query FindEditProfileQuery($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      gender
      dateOfBirth
      imageUrl
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ EditProfile }) => {
  return <EditProfile user={user}/>
}
