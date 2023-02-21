import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "../Login.css";

function Login(props) {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [loginUser] = useMutation(LOGIN);
  const navigate = useNavigate(); 

  const onFinish = async (values) => {
    try {
      const { data } = await loginUser({
        variables: values,
      });
      const token = data.login.token;
      Auth.login(token);
      console.log(navigate)
      navigate("/profile");
    } catch (e) {
      console.error(e);
      setError("The provided credentials are incorrect");
    }
  };

  const onFinishFailed = ({ errorFields }) => {
    form.scrollToField(errorFields[0].name);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    form.setFieldsValue({ [name]: value });
  };

  return (
    <div className="login-container">
      <Form
        name="login"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password
            placeholder="******"
            name="password"
            type="password"
            onChange={handleInputChange}
          />
        </Form.Item>

        {error && (
          <div>
            <p className="error-text">{error}</p>
          </div>
        )}

        <Form.Item className="sub-but">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
