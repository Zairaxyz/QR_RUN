import Scan from 'src/components/Scan/Scan'

export const QUERY = gql`
  query FindScanById($id: String!) {
    scan: scan(id: $id) {
      id
      longitude
      latitude
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Scan not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ scan }) => {
  return <Scan scan={scan} />
}
