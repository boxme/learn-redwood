import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { FieldError, Form, Label, Submit, SubmitHandler, TextField } from '@redwoodjs/forms'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (    
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">Name</Label>
        <TextField name="name" validation={{required: true}} errorClassName="error"/>
        <FieldError name="name" className="error"/>

        <Label name="email" errorClassName="error">Email</Label>
        <TextField 
        name="email" 
        validation={{
          required: true,
          pattern: {
            value: /^[^@]+@[^.]+\..+$/,
            message: 'Please enter a valid email address',
          },
        }} 
        errorClassName="error"
        />
        <FieldError name="email" className="error"/>

        <Label name="message" errorClassName="error">Message</Label>
        <TextField name="message" validation={{required: true}} errorClassName="error"/>
        <FieldError name="message" className="error"/>

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
