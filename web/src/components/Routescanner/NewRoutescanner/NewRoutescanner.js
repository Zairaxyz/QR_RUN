import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RoutescannerForm from 'src/components/Routescanner/RoutescannerForm'

const CREATE_ROUTESCANNER_MUTATION = gql`
  mutation CreateRoutescannerMutation($input: CreateRoutescannerInput!) {
    createRoutescanner(input: $input) {
      id
    }
  }
`

const NewRoutescanner = () => {
  const [createRoutescanner, { loading, error }] = useMutation(
    CREATE_ROUTESCANNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Routescanner created')
        navigate(routes.routescanners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createRoutescanner({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Routescanner</h2>
      </header>
      <div className="rw-segment-main">
        <RoutescannerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRoutescanner
