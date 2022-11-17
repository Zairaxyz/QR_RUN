import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_CHECK_POINT_MUTATION = gql`
  mutation DeleteCheckPointMutation($id: String!) {
    deleteCheckPoint(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const CheckPoint = ({ checkPoint }) => {
  const [deleteCheckPoint] = useMutation(DELETE_CHECK_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('CheckPoint deleted')
      navigate(routes.checkPoints())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete checkPoint ' + id + '?')) {
      deleteCheckPoint({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CheckPoint {checkPoint.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{checkPoint.id}</td>
            </tr>
            <tr>
              <th>Park id</th>
              <td>{checkPoint.parkId}</td>
            </tr>
            <tr>
              <th>Longitude</th>
              <td>{checkPoint.longitude}</td>
            </tr>
            <tr>
              <th>Latitude</th>
              <td>{checkPoint.latitude}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCheckPoint({ id: checkPoint.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(checkPoint.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CheckPoint
