import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ScannerForm from 'src/components/Admin/Scanner/ScannerForm'

const CREATE_SCANNER_MUTATION = gql`
  mutation CreateScannerMutation($input: CreateScannerInput!) {
    createScanner(input: $input) {
      id
    }
  }
`

const NewScanner = () => {
  const [createScanner, { loading, error }] = useMutation(
    CREATE_SCANNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Scanner created')
        navigate(routes.scanners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createScanner({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Scanner</h2>
      </header>
      <div className="rw-segment-main">
        <ScannerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewScanner
