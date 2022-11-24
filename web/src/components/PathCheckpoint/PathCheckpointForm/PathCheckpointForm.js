import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const PathCheckpointForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.pathCheckpoint?.id)
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
          name="checkpointId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checkpoint id
        </Label>

        <TextField
          name="checkpointId"
          defaultValue={props.pathCheckpoint?.checkpointId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="checkpointId" className="rw-field-error" />

        <Label
          name="prevCheckpointId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prev checkpoint id
        </Label>

        <TextField
          name="prevCheckpointId"
          defaultValue={props.pathCheckpoint?.prevCheckpointId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="prevCheckpointId" className="rw-field-error" />

        <Label
          name="isStart"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is start
        </Label>

        <CheckboxField
          name="isStart"
          defaultChecked={props.pathCheckpoint?.isStart}
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
          defaultChecked={props.pathCheckpoint?.isFinish}
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
          defaultValue={props.pathCheckpoint?.parkId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="parkId" className="rw-field-error" />

        <Label
          name="pathId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Path id
        </Label>

        <TextField
          name="pathId"
          defaultValue={props.pathCheckpoint?.pathId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pathId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PathCheckpointForm
