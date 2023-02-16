import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../Signup.css'

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (values) => {
    try {
      const mutationResponse = await addUser({
        variables: {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleFormSubmit}
    >
      <Form.Item
        label="username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input name="username" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Please enter a valid email address',
          },
        ]}
      >
        <Input name="email" type="email" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password name="password" onChange={handleChange} />
      </Form.Item>

      {error && <div>Sign up failed</div>}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
