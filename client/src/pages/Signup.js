import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../Signup.css'

const Signup = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [addUser] = useMutation(ADD_USER);

  const onFinish = async (values) => {
    try {
      const { data } = await addUser({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      });
      const token = data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
      setError("Unable to create an account with provided credentials.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    form.setFieldsValue({ [name]: value });
  };

  return (
    <div className="signup-container">
      <Form
        form={form}
        name="signup"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={({ errorFields }) => {
          form.scrollToField(errorFields[0].name);
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input name="username" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please enter a valid email address',
            },
          ]}
        >
          <Input name="email" type="email" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password name="password" onChange={handleInputChange} />
        </Form.Item>

        {error && (
          <div className="signup-error-text">{error}</div>
        )}

        <Form.Item className='create-but'>
          <Button type="primary" htmlType="submit">
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
