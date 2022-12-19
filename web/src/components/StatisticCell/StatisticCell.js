import { Statistic } from "../Statistic/Statistic"

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'no-cache',
  }
}

export const QUERY = gql`
  query RUN {
    findCurrentRun {
      id
      startTime
      stopTime
      distance
      pace
      userId
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ findCurrentRun }) => {
  return <Statistic findCurrentRun={findCurrentRun}/>
}