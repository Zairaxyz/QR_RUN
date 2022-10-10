import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ScannerForm from 'src/components/Admin/Scanner/ScannerForm'

export const QUERY = gql`
  query EditScannerById($id: Int!) {
    scanner: scanner(id: $id) {
      id
      parkId
      longitude
      latitude
    }
  }
`
const UPDATE_SCANNER_MUTATION = gql`
  mutation UpdateScannerMutation($id: Int!, $input: UpdateScannerInput!) {
    updateScanner(id: $id, input: $input) {
      id
      parkId
      longitude
      latitude
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ scanner }) => {
  const [updateScanner, { loading, error }] = useMutation(
    UPDATE_SCANNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Scanner updated')
        navigate(routes.scanners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateScanner({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Scanner {scanner?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ScannerForm
          scanner={scanner}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
