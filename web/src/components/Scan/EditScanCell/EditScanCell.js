import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ScanForm from 'src/components/Scan/ScanForm'

export const QUERY = gql`
  query EditScanById($id: String!) {
    scan: scan(id: $id) {
      id
      longitude
      latitude
      parkId
    }
  }
`
const UPDATE_SCAN_MUTATION = gql`
  mutation UpdateScanMutation($id: String!, $input: UpdateScanInput!) {
    updateScan(id: $id, input: $input) {
      id
      longitude
      latitude
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ scan }) => {
  const [updateScan, { loading, error }] = useMutation(UPDATE_SCAN_MUTATION, {
    onCompleted: () => {
      toast.success('Scan updated')
      navigate(routes.scans())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateScan({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Scan {scan?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ScanForm scan={scan} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
