import { useState } from "react"
import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  FieldError,
  Submit,
  SelectField,
} from '@redwoodjs/forms'

const EditProfile = () => {

  const { currentUser, isAuthenticated } = useAuth()

  return (
    <div className="container mx-auto">
      {isAuthenticated && (
        <>
          <div className="mt-12 mx-12 md:mx-72">
            <div className="flex justify-center">
             <img src={currentUser.imageUrl} className="rounded-full w-64 sm:w-60 md:w-60 lg:w-80" />
            </div>
            <div>
              <Form onSubmit={""}>
                <div className="grid grid-cols-6 gap-6 mt-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Label className="block text-sm font-medium text-gray-700" errorClassName="label error">
                      First name
                    </Label>
                    <TextField
                      name="firstname"
                      value={currentUser.firstName}
                      className="input mt-1 rw-input"
                      onChange={currentUser.firstName}
                    />
                    <FieldError name="firstName" className="error-message" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                      <Label className="block text-sm font-medium text-gray-700" errorClassName="label error">
                        Last name
                      </Label>
                      <TextField
                        name="lastname"
                        value={currentUser.lastName}
                        className="input mt-1 rw-input"
                        onChange={currentUser.lastName}
                      />
                      <FieldError name="last" className="error-message" />
                    </div>
                </div>
                <div className="mt-6">
                  <Label className="block text-sm font-medium text-gray-700" errorClassName="label error">
                    Gender
                  </Label>
                  <SelectField name='gender' className='w-full rw-input'>
                    <option>Male</option>
                    <option>Female</option>
                  </SelectField>
                </div>
                <div className="mt-6">
                  <Label className="block text-sm font-medium text-gray-700" errorClassName="label error">
                    Dateofbirth
                  </Label>
                </div>
                <div className="mt-8">
                  <Submit className="rw-button rw-button-blue">
                    Update
                  </Submit>
                </div>
              </Form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EditProfile
