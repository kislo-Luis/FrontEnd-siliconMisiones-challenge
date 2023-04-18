import { Button,Form,Label, Input,  } from 'reactstrap';
import React from 'react'

export const Login = () => {
  return (
    <div>
         <Form className='formP'>
    
      <Label
        for="exampleEmail"
        hidden className='email'
      >
        Email
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
    
    {' '}
    
      <Label
        for="examplePassword"
        hidden
      >
        Password
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
    
    {' '}
    <Button>
      Submit
    </Button>
  </Form>

    </div>
  )
}
