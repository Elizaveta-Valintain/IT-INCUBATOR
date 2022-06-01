import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {};
    //
    // }
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/16750`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

// ProfileContainer.propTypes = {};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile

    }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);
