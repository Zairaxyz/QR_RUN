import Lap from 'src/components/Lap/Lap'

export const QUERY = gql`
  query FindLapById($id: String!) {
    lap: lap(id: $id) {
      id
      start_timestamp
      stop_timestamp
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Lap not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ lap }) => {
  return <Lap lap={lap} />
}
