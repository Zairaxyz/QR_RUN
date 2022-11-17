import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const LapForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.lap?.id)
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
          name="start_time_stamp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start time stamp
        </Label>

        <DatetimeLocalField
          name="start_time_stamp"
          defaultValue={formatDatetime(props.lap?.start_time_stamp)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="start_time_stamp" className="rw-field-error" />

        <Label
          name="stop_time_stamp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stop time stamp
        </Label>

        <DatetimeLocalField
          name="stop_time_stamp"
          defaultValue={formatDatetime(props.lap?.stop_time_stamp)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="stop_time_stamp" className="rw-field-error" />

        <Label
          name="route_scannerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Route scanner id
        </Label>

        <TextField
          name="route_scannerId"
          defaultValue={props.lap?.route_scannerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="route_scannerId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.lap?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default LapForm