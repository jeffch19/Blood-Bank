import React from 'react'
import { Button, Form, Input, } from 'antd';
import { Link, NavLink } from "react-router-dom";


function Register() {
  const [type , setType] = React.useState('donar')
  return (
    <div className='flex h-screen items-center justify-center bg-primary'>
      <Form 
      layout = "vertical" 
      className = "bg-white rounded shadow grid grid-cols-2 p-5 gap-5 w-1/2"
      >
        <h1 className='col-span-2 uppercase text-2xl'> 
          <span className='text-primary'>Register - DONAR</span>
          <hr />
        </h1>
          <Form.Item label = "Name">
            <Input />
          </Form.Item>
          <Form.Item label = "Email">
            <Input />
          </Form.Item>
          <Form.Item label = "Phone">
            <Input />
          </Form.Item>
          <Form.Item label = "Password">
            <Input />
          </Form.Item>
        <Button type="primary" block className='col-span-2'>
          Register
        </Button>
        <NavLink to="/login" className="col-span-2 text-center text-gray-700 underline">
          Already Have an account? Login
        </NavLink>
      </Form>
    </div>
  )
}

export default Register