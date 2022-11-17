import CheckPoint from 'src/components/CheckPoint/CheckPoint'

export const QUERY = gql`
  query FindCheckPointById($id: String!) {
    checkPoint: checkPoint(id: $id) {
      id
      parkId
      longitude
      latitude
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CheckPoint not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ checkPoint }) => {
  return <CheckPoint checkPoint={checkPoint} />
}
