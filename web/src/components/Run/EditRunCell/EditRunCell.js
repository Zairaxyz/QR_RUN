import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RunForm from 'src/components/Run/RunForm'

export const QUERY = gql`
  query EditRunById($id: Int!) {
    run: run(id: $id) {
      id
      start_timestamp
      stop_timestamp
      total_distance
      pace
      userId
      parkId
    }
  }
`
const UPDATE_RUN_MUTATION = gql`
  mutation UpdateRunMutation($id: Int!, $input: UpdateRunInput!) {
    updateRun(id: $id, input: $input) {
      id
      start_timestamp
      stop_timestamp
      total_distance
      pace
      userId
      parkId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ run }) => {
  const [updateRun, { loading, error }] = useMutation(UPDATE_RUN_MUTATION, {
    onCompleted: () => {
      toast.success('Run updated')
      navigate(routes.runs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateRun({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Run {run?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RunForm run={run} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
