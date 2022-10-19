import Scanner from 'src/components/Scanner/Scanner'

export const QUERY = gql`
  query FindScannerById($id: Int!) {
    scanner: scanner(id: $id) {
      id
      parkId
      longitude
      latitude
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Scanner not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ scanner }) => {
  return <Scanner scanner={scanner} />
}
