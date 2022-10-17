import Run from 'src/components/Run/Run'

export const QUERY = gql`
  query FindRunById($id: Int!) {
    run: run(id: $id) {
      id
      start_timestamp
      stop_timestamp
      total_distance
      pace
      userId
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Run not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ run }) => {
  return <Run run={run} />
}
