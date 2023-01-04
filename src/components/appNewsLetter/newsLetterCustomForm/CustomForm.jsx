import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import '../newsLetterCustomForm/CustomForm.scss';
import Button from "../../../Utils/Components/Button/button";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const CustomForm = () => {

    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .min(2, 'Minim 2 symbol')
                    .required('Required field'),
                email: Yup.string()
                    .email('Incorrect email address')
                    .required('Required field'),
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <MyTextInput
                    placeholder='Name'
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                />
                <ErrorMessage component="div" className="error" name="amount"/>
                <MyTextInput
                    placeholder='Email'
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                />
                <ErrorMessage component="div" className="error" name="amount"/>
                <Button
                    type="submit"
                    title='Submit'/>
            </Form>
        </Formik>
    )}

export default CustomForm;