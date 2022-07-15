import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser, setUserProfile} from "../../redux/profile-reducer";
import {Navigate} from "react-router-dom"


class ProfileContainer extends React.Component {

    componentDidMount() {
        // let userId = this.props.match.params.userId
        // if (!userId) {
        //     userId = 2
        // }

        this.props.getUser();
    }

    render() {
        if(!this.props.isAuth) return <Navigate to={'/login'}/>

        return (<Profile {...this.props} profile={this.props.profile}/>);
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    setUserProfile, getUser
})(ProfileContainer);
