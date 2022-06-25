import React from 'react';
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"Login"} component={"input"} type={"text"}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} component={"input"} type={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={'checkbox'} component={"input"}/>RememberMe
            </div>
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData)=>{
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
