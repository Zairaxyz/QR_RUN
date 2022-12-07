import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CheckPointForm from 'src/components/CheckPoint/CheckPointForm'

export const QUERY = gql`
  query EditCheckPointById($id: String!) {
    checkPoint: checkPoint(id: $id) {
      id
      longitude
      latitude
      parkId
    }
  }
`
const UPDATE_CHECK_POINT_MUTATION = gql`
  mutation UpdateCheckPointMutation(
    $id: String!
    $input: UpdateCheckPointInput!
  ) {
    updateCheckPoint(id: $id, input: $input) {
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

export const Success = ({ checkPoint }) => {
  const [updateCheckPoint, { loading, error }] = useMutation(
    UPDATE_CHECK_POINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckPoint updated')
        navigate(routes.checkPoints())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateCheckPoint({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CheckPoint {checkPoint?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CheckPointForm
          checkPoint={checkPoint}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
