import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CheckPointForm from 'src/components/CheckPoint/CheckPointForm'

const CREATE_CHECK_POINT_MUTATION = gql`
  mutation CreateCheckPointMutation($input: CreateCheckPointInput!) {
    createCheckPoint(input: $input) {
      id
    }
  }
`

const NewCheckPoint = () => {
  const [createCheckPoint, { loading, error }] = useMutation(
    CREATE_CHECK_POINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CheckPoint created')
        navigate(routes.checkPoints())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createCheckPoint({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CheckPoint</h2>
      </header>
      <div className="rw-segment-main">
        <CheckPointForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCheckPoint
