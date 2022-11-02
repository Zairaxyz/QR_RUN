import Routescanner from 'src/components/Routescanner/Routescanner'

export const QUERY = gql`
  query FindRoutescannerById($id: String!) {
    routescanner: routescanner(id: $id) {
      id
      scanner
      before
      total_distance
      is_start
      is_stop
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Routescanner not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routescanner }) => {
  return <Routescanner routescanner={routescanner} />
}
