import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const RoutescannerForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.routescanner?.id)
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
          name="scanner"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Scanner
        </Label>

        <TextField
          name="scanner"
          defaultValue={props.routescanner?.scanner}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="scanner" className="rw-field-error" />

        <Label
          name="before"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Before
        </Label>

        <TextField
          name="before"
          defaultValue={props.routescanner?.before}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          defaultValue={props.routescanner?.total_distance}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="total_distance" className="rw-field-error" />

        <Label
          name="is_start"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is start
        </Label>

        <CheckboxField
          name="is_start"
          defaultChecked={props.routescanner?.is_start}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="is_start" className="rw-field-error" />

        <Label
          name="is_stop"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is stop
        </Label>

        <CheckboxField
          name="is_stop"
          defaultChecked={props.routescanner?.is_stop}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="is_stop" className="rw-field-error" />

        <Label
          name="parkId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Park id
        </Label>

        <TextField
          name="parkId"
          defaultValue={props.routescanner?.parkId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="parkId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RoutescannerForm
