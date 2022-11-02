import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_ROUTESCANNER_MUTATION = gql`
  mutation DeleteRoutescannerMutation($id: String!) {
    deleteRoutescanner(id: $id) {
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

const Routescanner = ({ routescanner }) => {
  const [deleteRoutescanner] = useMutation(DELETE_ROUTESCANNER_MUTATION, {
    onCompleted: () => {
      toast.success('Routescanner deleted')
      navigate(routes.routescanners())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete routescanner ' + id + '?')) {
      deleteRoutescanner({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Routescanner {routescanner.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{routescanner.id}</td>
            </tr>
            <tr>
              <th>Scanner</th>
              <td>{routescanner.scanner}</td>
            </tr>
            <tr>
              <th>Before</th>
              <td>{routescanner.before}</td>
            </tr>
            <tr>
              <th>Total distance</th>
              <td>{routescanner.total_distance}</td>
            </tr>
            <tr>
              <th>Is start</th>
              <td>{checkboxInputTag(routescanner.is_start)}</td>
            </tr>
            <tr>
              <th>Is stop</th>
              <td>{checkboxInputTag(routescanner.is_stop)}</td>
            </tr>
            <tr>
              <th>Park id</th>
              <td>{routescanner.parkId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRoutescanner({ id: routescanner.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(routescanner.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Routescanner
