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
          name="startTimeStamp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start time stamp
        </Label>

        <DatetimeLocalField
          name="startTimeStamp"
          defaultValue={formatDatetime(props.lap?.startTimeStamp)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startTimeStamp" className="rw-field-error" />

        <Label
          name="stopTimeStamp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stop time stamp
        </Label>

        <DatetimeLocalField
          name="stopTimeStamp"
          defaultValue={formatDatetime(props.lap?.stopTimeStamp)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="stopTimeStamp" className="rw-field-error" />

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
