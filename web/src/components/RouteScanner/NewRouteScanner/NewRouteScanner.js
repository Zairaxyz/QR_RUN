import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RouteScannerForm from 'src/components/RouteScanner/RouteScannerForm'

const CREATE_ROUTE_SCANNER_MUTATION = gql`
  mutation CreateRouteScannerMutation($input: CreateRouteScannerInput!) {
    createRouteScanner(input: $input) {
      id
    }
  }
`

const NewRouteScanner = () => {
  const [createRouteScanner, { loading, error }] = useMutation(
    CREATE_ROUTE_SCANNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('RouteScanner created')
        navigate(routes.routeScanners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createRouteScanner({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New RouteScanner</h2>
      </header>
      <div className="rw-segment-main">
        <RouteScannerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRouteScanner
