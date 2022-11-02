import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RoutescannerForm from 'src/components/Routescanner/RoutescannerForm'

export const QUERY = gql`
  query EditRoutescannerById($id: String!) {
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
const UPDATE_ROUTESCANNER_MUTATION = gql`
  mutation UpdateRoutescannerMutation(
    $id: String!
    $input: UpdateRoutescannerInput!
  ) {
    updateRoutescanner(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routescanner }) => {
  const [updateRoutescanner, { loading, error }] = useMutation(
    UPDATE_ROUTESCANNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Routescanner updated')
        navigate(routes.routescanners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateRoutescanner({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Routescanner {routescanner?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RoutescannerForm
          routescanner={routescanner}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
