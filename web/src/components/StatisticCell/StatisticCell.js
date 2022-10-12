import Statistic from "../Statistic/Statistic"

export const QUERY = gql`
  query FindStatisticQuery($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ statistic }) => {
  return <Statistic user={user}/>
}
