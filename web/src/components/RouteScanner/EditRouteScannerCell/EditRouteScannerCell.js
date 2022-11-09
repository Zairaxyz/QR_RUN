import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RouteScannerForm from 'src/components/RouteScanner/RouteScannerForm'

export const QUERY = gql`
  query EditRouteScannerById($id: String!) {
    routeScanner: routeScanner(id: $id) {
      id
      after
      before
      total_distance
      is_start
      is_finish
      parkId
    }
  }
`
const UPDATE_ROUTE_SCANNER_MUTATION = gql`
  mutation UpdateRouteScannerMutation(
    $id: String!
    $input: UpdateRouteScannerInput!
  ) {
    updateRouteScanner(id: $id, input: $input) {
      id
      after
      before
      total_distance
      is_start
      is_finish
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routeScanner }) => {
  const [updateRouteScanner, { loading, error }] = useMutation(
    UPDATE_ROUTE_SCANNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('RouteScanner updated')
        navigate(routes.routeScanners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateRouteScanner({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit RouteScanner {routeScanner?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RouteScannerForm
          routeScanner={routeScanner}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
