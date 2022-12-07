import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RouteCheckPointForm from 'src/components/RouteCheckPoint/RouteCheckPointForm'

const CREATE_ROUTE_CHECK_POINT_MUTATION = gql`
  mutation CreateRouteCheckPointMutation($input: CreateRouteCheckPointInput!) {
    createRouteCheckPoint(input: $input) {
      id
    }
  }
`

const NewRouteCheckPoint = () => {
  const [createRouteCheckPoint, { loading, error }] = useMutation(
    CREATE_ROUTE_CHECK_POINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('RouteCheckPoint created')
        navigate(routes.routeCheckPoints())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createRouteCheckPoint({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New RouteCheckPoint</h2>
      </header>
      <div className="rw-segment-main">
        <RouteCheckPointForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRouteCheckPoint
