import React from "react";
import { Button, Form, Input } from "antd";
import "./loginpageStyle.css";
import { FetchUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashBoard from "./DashBoard";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoggedin = useSelector((state) => state.user.logged);
  console.log("user ?", userLoggedin);

  const onFinish = (values) => {
    console.log("values on loginpage ", values);
    dispatch(FetchUser({ values }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (!userLoggedin) {
    return (
      <>
        <div className="container">
          <div className="heading-con">
            <p>Login</p>
          </div>

          <div className="form-container">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              className="form"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },

                  { type: "email" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  { whitespace: true },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    );
  } else {
    navigate("/dashboard");
  }
};

export default LoginPage;
