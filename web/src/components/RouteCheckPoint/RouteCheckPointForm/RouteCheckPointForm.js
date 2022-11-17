import { useState } from 'react'

import Select from 'react-select'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
const RouteCheckPointForm = (props) => {
  const [parkId, setParkId] = useState('')
  const onSubmit = (data) => {
    const record = { ...data, parkId: parkId }
    props.onSave(record, props?.routeScanner?.id)
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
          defaultValue={props.routeScanner?.parkId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        /> */}

        <FieldError name="parkId" className="rw-field-error" />

        <Label
          name="after"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          After
        </Label>

        <TextField
          name="after"
          defaultValue={props.routeScanner?.after}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="after" className="rw-field-error" />

        <Label
          name="before"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Before
        </Label>

        <TextField
          name="before"
          defaultValue={props.routeScanner?.before}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="before" className="rw-field-error" />

        <Label
          name="total_distance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total distance
        </Label>

        <TextField
          name="total_distance"
          defaultValue={props.routeScanner?.total_distance}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="total_distance" className="rw-field-error" />
        <div className="grid grid-flow-col grid-rows-1 gap-2">
          <Label
            name="is_start"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Is start
          </Label>

          <CheckboxField
            name="is_start"
            defaultChecked={props.routeScanner?.is_start}
            className="rw-label"
            // style={{ width: '100px' }}
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="is_start" className="rw-field-error" />

          <Label
            name="is_finish"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Is finish
          </Label>

          <CheckboxField
            name="is_finish"
            defaultChecked={props.routeScanner?.is_finish}
            className="rw-label"
            // style={{ width: '100px', height: '100px' }}
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="is_finish" className="rw-field-error" />
        </div>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RouteCheckPointForm
