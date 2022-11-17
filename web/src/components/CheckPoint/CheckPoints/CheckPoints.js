import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CheckPoint/CheckPointsCell'

const DELETE_CHECK_POINT_MUTATION = gql`
  mutation DeleteCheckPointMutation($id: String!) {
    deleteCheckPoint(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (value) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const CheckPointsList = ({ checkPoints }) => {
  const [deleteCheckPoint] = useMutation(DELETE_CHECK_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('CheckPoint deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete checkPoint ' + id + '?')) {
      deleteCheckPoint({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Park id</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {checkPoints.map((checkPoint) => (
            <tr key={checkPoint.id}>
              <td>{truncate(checkPoint.id)}</td>
              <td>{truncate(checkPoint.parkId)}</td>
              <td>{truncate(checkPoint.longitude)}</td>
              <td>{truncate(checkPoint.latitude)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.checkPoint({ id: checkPoint.id })}
                    title={'Show checkPoint ' + checkPoint.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCheckPoint({ id: checkPoint.id })}
                    title={'Edit checkPoint ' + checkPoint.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete checkPoint ' + checkPoint.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(checkPoint.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CheckPointsList
