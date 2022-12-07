import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RouteCheckPointForm from 'src/components/RouteCheckPoint/RouteCheckPointForm'

export const QUERY = gql`
  query EditRouteCheckPointById($id: String!) {
    routeCheckPoint: routeCheckPoint(id: $id) {
      id
      checkPoint
      before
      totalDistance
      isStart
      isFinish
      parkId
    }
  }
`
const UPDATE_ROUTE_CHECK_POINT_MUTATION = gql`
  mutation UpdateRouteCheckPointMutation(
    $id: String!
    $input: UpdateRouteCheckPointInput!
  ) {
    updateRouteCheckPoint(id: $id, input: $input) {
      id
      checkPoint
      before
      totalDistance
      isStart
      isFinish
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ routeCheckPoint }) => {
  const [updateRouteCheckPoint, { loading, error }] = useMutation(
    UPDATE_ROUTE_CHECK_POINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('RouteCheckPoint updated')
        navigate(routes.routeCheckPoints())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateRouteCheckPoint({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit RouteCheckPoint {routeCheckPoint?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RouteCheckPointForm
          routeCheckPoint={routeCheckPoint}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
