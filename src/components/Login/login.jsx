import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControl/FormsControl";

const maxLength12 = maxLengthCreator(12)
const maxLength20 = maxLengthCreator(20)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"login"}
                    placeholder={"Login"}
                    component={Input}
                    validate={[required, maxLength12]}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder={"Password"}
                    component={Input}
                    validate={[required, maxLength20]}
                    type={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={'checkbox'} component={Input}/>RememberMe
            </div>
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;
