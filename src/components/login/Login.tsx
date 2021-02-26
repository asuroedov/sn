import {Button, Checkbox, Form, Input} from 'antd';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {loginTC} from "../../data/auth-reducer";
import {AppStateType} from "../../data/store";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

type FormDataType = {
    username: string
    password: string
    remember: boolean
}
const Login = () => {

    const token = useSelector((state: AppStateType )=> state.auth.token)
    const dispatch = useDispatch()

    const onFinish = (values: FormDataType) => {
        dispatch(loginTC(values.username, values.password))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    if (!!token) return <Redirect to='/'/>

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login