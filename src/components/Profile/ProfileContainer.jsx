import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {profileAPI} from "../../api/profileAPI";


class ProfileContainer extends React.Component {

    componentDidMount() {
        profileAPI.getUserProfile(24100)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>);
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
