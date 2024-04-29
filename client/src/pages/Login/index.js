import React from 'react'
import { Button, Form, Input, Radio } from 'antd';
import { Link, NavLink } from "react-router-dom";



function Login() {
  const [type, setType] = React.useState('donar')

  const onFinish = (values) => {
    console.log(values);
  }


  return (
    <div className='flex h-screen items-center justify-center bg-primary'>
      <Form
        layout="vertical"
        className="bg-white rounded shadow grid  p-5 gap-5 w-1/3"
        onFinish={onFinish}
      >
        <h1 className=' uppercase text-2xl'>
          <span className='text-primary'>
            {type.toUpperCase()} - LOGIN
          </span>
          <hr />
        </h1>

        <Radio.Group onChange={(e) => setType(e.target.value)} value={type}
          className=''>
          <Radio value="donar">Donar</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>



            <Form.Item label="Email" name='email'>
              <Input />
            </Form.Item>
            <Form.Item label="Password" name='password'>
              <Input type='password' />
            </Form.Item>


        <Button type="primary" block className='' htmlType='submit'>
          Login
        </Button>
        <NavLink to="/register" className=" text-center text-gray-700 underline">
          Don't have an account? Register
        </NavLink>
      </Form>
    </div>
  )
}

export default Login