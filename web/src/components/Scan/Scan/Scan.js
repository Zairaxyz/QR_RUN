import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SCAN_MUTATION = gql`
  mutation DeleteScanMutation($id: String!) {
    deleteScan(id: $id) {
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

const Scan = ({ scan }) => {
  const [deleteScan] = useMutation(DELETE_SCAN_MUTATION, {
    onCompleted: () => {
      toast.success('Scan deleted')
      navigate(routes.scans())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete scan ' + id + '?')) {
      deleteScan({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Scan {scan.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{scan.id}</td>
            </tr>
            <tr>
              <th>Longitude</th>
              <td>{scan.longitude}</td>
            </tr>
            <tr>
              <th>Latitude</th>
              <td>{scan.latitude}</td>
            </tr>
            <tr>
              <th>Park id</th>
              <td>{scan.parkId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editScan({ id: scan.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(scan.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Scan
