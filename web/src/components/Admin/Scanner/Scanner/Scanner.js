import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SCANNER_MUTATION = gql`
  mutation DeleteScannerMutation($id: Int!) {
    deleteScanner(id: $id) {
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

const Scanner = ({ scanner }) => {
  const [deleteScanner] = useMutation(DELETE_SCANNER_MUTATION, {
    onCompleted: () => {
      toast.success('Scanner deleted')
      navigate(routes.scanners())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete scanner ' + id + '?')) {
      deleteScanner({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Scanner {scanner.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{scanner.id}</td>
            </tr>
            <tr>
              <th>Park id</th>
              <td>{scanner.parkId}</td>
            </tr>
            <tr>
              <th>Longitude</th>
              <td>{scanner.longitude}</td>
            </tr>
            <tr>
              <th>Latitude</th>
              <td>{scanner.latitude}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editScanner({ id: scanner.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(scanner.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Scanner
