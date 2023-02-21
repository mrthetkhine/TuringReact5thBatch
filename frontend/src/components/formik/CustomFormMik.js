import React, {useState} from "react";

function useCustomFormMik(config)
{
    const [formValue,setFormValue] = useState(config.initialValues);
    return {
        values:formValue,
        handleChange : function (event)
        {
            const inputValue = event.target.value;
            const inputName = event.target.name;
            setFormValue({
                ...formValue,
                [inputName] : inputValue
            });
            console.log('Handle change ',event.target.name);
        },
        handleSubmit: function (event)
        {
            event.preventDefault();
            console.log('Form submit ',formValue);
        }
    }
}
export default function CustomFormMik()
{
    const formik = useCustomFormMik({
        initialValues: {
            firstName:'Hello',
            lastName: '',
        },
    });
    return (<div>
        CustomFormMik
        <form onSubmit={formik.handleSubmit}>
            <div className={"form-group"}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    /*
                    onBlur={formik.handleBlur}
                    */
                />

            </div>
            <div className={"form-group"}>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

            </div>
            <button type="submit" className={"btn btn-primary"}>
                Submit
            </button>
        </form>
    </div>);
}