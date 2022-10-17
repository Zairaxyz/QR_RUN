import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const ParkForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.park?.id)
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
          name="park_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Park name
        </Label>

        <TextField
          name="park_name"
          defaultValue={props.park?.park_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="park_name" className="rw-field-error" />

        <Label
          name="image_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="image_url"
          defaultValue={props.park?.image_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="image_url" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.park?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>

        <TextField
          name="address"
          defaultValue={props.park?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="address" className="rw-field-error" />

        <Label
          name="working_time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Working time
        </Label>

        <TextAreaField
          name="working_time"
          defaultValue={JSON.stringify(props.park?.working_time)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true }}
        />

        <FieldError name="working_time" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ParkForm
