import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const RouteCheckPointForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.routeCheckPoint?.id)
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
          name="checkPoint"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Check point
        </Label>

        <TextField
          name="checkPoint"
          defaultValue={props.routeCheckPoint?.checkPoint}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="checkPoint" className="rw-field-error" />

        <Label
          name="before"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Before
        </Label>

        <TextField
          name="before"
          defaultValue={props.routeCheckPoint?.before}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="before" className="rw-field-error" />

        <Label
          name="totalDistance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total distance
        </Label>

        <TextField
          name="totalDistance"
          defaultValue={props.routeCheckPoint?.totalDistance}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="totalDistance" className="rw-field-error" />

        <Label
          name="isStart"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is start
        </Label>

        <CheckboxField
          name="isStart"
          defaultChecked={props.routeCheckPoint?.isStart}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isStart" className="rw-field-error" />

        <Label
          name="isFinish"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is finish
        </Label>

        <CheckboxField
          name="isFinish"
          defaultChecked={props.routeCheckPoint?.isFinish}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isFinish" className="rw-field-error" />

        <Label
          name="parkId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Park id
        </Label>

        <TextField
          name="parkId"
          defaultValue={props.routeCheckPoint?.parkId}
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

export default RouteCheckPointForm
