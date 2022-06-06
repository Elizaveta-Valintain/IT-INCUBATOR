import React from "react";
import {connect} from "react-redux";
import {
    getUsers, getNewUsersPage, unfollow, follow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageCurrent, this.props.pageSizeView)
    }

    onPageChanged = (pageNumber) => {
        this.props.getNewUsersPage(pageNumber, this.props.pageSizeView)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                pageTotalCount={this.props.pageTotalCount}
                pageSizeView={this.props.pageSizeView}
                pageCurrent={this.props.pageCurrent}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}

            />
        </>
    }


}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageTotalCount: state.usersPage.pageTotalCount,
        pageSizeView: state.usersPage.pageSizeView,
        pageCurrent: state.usersPage.pageCurrent,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        // followSuccess,
        // unfollowSuccess,
        // setUsers,
        // setPageCurrent,
        // setTotalPage,
        // toggleIsFetching,
        // toggleFollowingInProgress,
        getUsers, getNewUsersPage, unfollow, follow
    }
)(UsersContainer);
