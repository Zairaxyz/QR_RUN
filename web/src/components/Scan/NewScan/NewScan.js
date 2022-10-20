import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ScanForm from 'src/components/Scan/ScanForm'

const CREATE_SCAN_MUTATION = gql`
  mutation CreateScanMutation($input: CreateScanInput!) {
    createScan(input: $input) {
      id
    }
  }
`

const NewScan = () => {
  const [createScan, { loading, error }] = useMutation(CREATE_SCAN_MUTATION, {
    onCompleted: () => {
      toast.success('Scan created')
      navigate(routes.scans())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createScan({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Scan</h2>
      </header>
      <div className="rw-segment-main">
        <ScanForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewScan
