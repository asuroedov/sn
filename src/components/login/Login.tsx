import {ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import React from 'react'

type LoginDataType = {
    login: string
    password: string
}
const Login: React.FC = () => {
    return(
        <div>
            <Formik
                initialValues={{ login: '', password: '' }}
                //validate={}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="login" />
                        <ErrorMessage name="login" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Войти
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const submit = (values: LoginDataType, { setSubmitting }: {setSubmitting:(f: boolean) => void}) => {


    setSubmitting(false)
}
/*
const validator = (values ) => {
    values => {
        const errors = {};
        if (!values.login) {
            //errors.login = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }
}*/

export default Login

