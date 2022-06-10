import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser, setUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        // let userId = this.props.match.params.userId
        // if (!userId) {
        //     userId = 2
        // }

        this.props.getUser();
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


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setUserProfile, getUser
    })
)(ProfileContainer)
