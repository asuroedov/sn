import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {registrationTC} from "../../data/auth-reducer";

const Registration: React.FC = () =>{
    const dispatch = useDispatch()

    const onFinish = (values: any) => {
        dispatch(registrationTC(values.login, values.password, values.name))
    }


    return (
        <Form
            name="registrationForm"
            initialValues={{remember: true}}
            onFinish={onFinish}
        >
            <Form.Item
                label="Login"
                name="login"
                rules={[{required: true, min: 3, max: 12, message: 'Please input your login!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, min: 6, max: 20, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                label="Отображаемое имя"
                name="name"
                rules={[{required: true, min: 2, max: 25, message: 'Please input your name!'}]}
            >
                <Input/>
            </Form.Item>


            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Регистрация
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Registration