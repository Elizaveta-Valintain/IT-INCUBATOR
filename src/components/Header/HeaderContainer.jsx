import React from 'react';
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authApi} from "../../api/authAPI";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authApi.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
