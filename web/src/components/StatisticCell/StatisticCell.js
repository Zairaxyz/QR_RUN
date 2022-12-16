import Statistic from "../Statistic/Statistic"

export const QUERY = gql`
  query FindStatisticQuery($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      imageUrl
      gender
      dateOfBirth
      roles
      Run {
        id
        distance
        pace
        startTime
        stopTime
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = () => {
  return <Statistic user={user}/>
}