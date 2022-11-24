import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PathCheckpointForm from 'src/components/PathCheckpoint/PathCheckpointForm'

const CREATE_PATH_CHECKPOINT_MUTATION = gql`
  mutation CreatePathCheckpointMutation($input: CreatePathCheckpointInput!) {
    createPathCheckpoint(input: $input) {
      id
    }
  }
`

const NewPathCheckpoint = () => {
  const [createPathCheckpoint, { loading, error }] = useMutation(
    CREATE_PATH_CHECKPOINT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PathCheckpoint created')
        navigate(routes.pathCheckpoints())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createPathCheckpoint({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PathCheckpoint</h2>
      </header>
      <div className="rw-segment-main">
        <PathCheckpointForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPathCheckpoint
