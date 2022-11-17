import { useState } from 'react'

import Select from 'react-select'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
const CheckPointForm = (props) => {
  const [parkId, setParkId] = useState('')
  const onSubmit = (data) => {
    // ...data เป็นการแตกไฟล์จาก Form
    const record = { ...data, parkId: parkId }
    props.onSave(record, props?.scanner?.id)
  }

  const QUERY = gql`
    query FindParks {
      parks {
        id
        park_name
      }
    }
  `
  const { loading, data } = useQuery(QUERY)
  if (loading)
    return (
      <div className="... bg-indigo-500" disabled>
        <svg
          className="... mr-3 h-5 w-5 animate-spin"
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </div>
    )

  const parkOption = data.parks.map((data) => ({
    value: data.id,
    label: data.park_name,
  }))

  const handleChangePark = (e) => {
    // console.log(e)
    setParkId(e.value)
    // console.log(e.label)
  }
  // console.log(parkId)

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="parkId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Park id
        </Label>
        <Select options={parkOption} onChange={handleChangePark} required />
        {/* <TextField
          name="parkId"
          defaultValue={props.scanner?.parkId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        /> */}

        <FieldError name="parkId" className="rw-field-error" />

        <Label
          name="longitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Longitude
        </Label>

        <TextField
          name="longitude"
          defaultValue={props.scanner?.longitude}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="longitude" className="rw-field-error" />

        <Label
          name="latitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Latitude
        </Label>

        <TextField
          name="latitude"
          defaultValue={props.scanner?.latitude}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="latitude" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CheckPointForm
