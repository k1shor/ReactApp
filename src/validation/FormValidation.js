import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormValidation = () => {
    return (
        <>
            <Formik
            
            initialValues={{firstname:'', lastname:'',email:'',password:'',cpassword:''}}
            validationSchema={Yup.object({
                firstname:Yup.string()
                .max(20,'Firstname cannot exceed more than 20 characters')
                .required('Firstname must not be empty'),
                
                lastname: Yup.string()
                .max(20,'Lastname cannot exceed more than 20 characters')
                .required('Firstname must not be empty'),

                email:Yup.string()
                .email('Invalid email. Please provide valid email address.')
                .required('Email is required'),

                password: Yup.string()
                .required('Please provide password')
                .matches(/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%#*&])[a-zA-Z\d@#!%$#&]{8,}$/,"Must be at least 8 characters long, one UPPERCASE, one lowercase, one digit and one special character"),

                cpassword: Yup.string()
                .required('Please confirm password')
                .oneOf([Yup.ref('password'),null],"Password and Confirm Password must match.")
            })}
            >

                <div className="col-md-6 offset-md-3 p-3 mt-4 shadow-lg">
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="firstname">First Name:</label>
                            <Field type="text" name="firstname" className="form-control" />
                            <ErrorMessage name="firstname">
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lasstname">Last Name:</label>
                            <Field type="text" name="lastname" className="form-control" />
                            <ErrorMessage name="lastname">
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">E-mail:</label>
                            <Field type="email" name="email" className="form-control" />
                            <ErrorMessage name="email">
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" className="form-control" />
                            <ErrorMessage name="password">
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword">Confirm Password:</label>
                            <Field type="password" name="cpassword" className="form-control" />
                            <ErrorMessage name="cpassword">
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>



                    </Form>
                </div>
        </Formik>

        </>
    )
}

export default FormValidation
