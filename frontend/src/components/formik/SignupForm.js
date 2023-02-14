import React from 'react';
import { useFormik } from 'formik';

export default function SignupForm (){
    const isStartWithUpperCase=(str) => {
        let initial = str.charAt(0);
        return initial.toUpperCase() == initial;
    };
    const validate = values => {
        console.log('Validate ',values);
        const errors = {};
        if(! isStartWithUpperCase(values.name ))
        {
            errors.name ='Name must start with uppercase';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name:'',
            email: '',
            password:''
        },
        validate, //validate:validate
        onSubmit: values => {
            console.log('Form submit ',values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={"form-group"}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    className={"form-control"}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name && <div className={"alert alert-danger"}>
                        {formik.errors.name}
                    </div>
                }
            </div>
            <div className={"form-group"}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    className={"form-control"}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && <div className={"alert alert-danger"}>
                    {formik.errors.email}
                </div>
                }
            </div>
            <div className={"form-group"}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className={"form-control"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>

            <button type="submit" className={"btn btn-primary"}>Submit</button>
        </form>
    );
};