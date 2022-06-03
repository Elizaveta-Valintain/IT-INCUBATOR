import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setPageCurrent,
    setTotalPage,
    setUsers,
    toggleIsFetching

} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageCurrent}&count=${this.props.pageSizeView}`,
            {
                withCredentials: true
            })
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalPage(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setPageCurrent(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSizeView}`,
            {
                withCredentials: true

            })
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                pageTotalCount={this.props.pageTotalCount}
                pageSizeView={this.props.pageSizeView}
                pageCurrent={this.props.pageCurrent}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}

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
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setPageCurrent: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalPage: (pageTotalCount) => {
//             dispatch(setTotalCountAC(pageTotalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setPageCurrent,
        setTotalPage,
        toggleIsFetching
    }
    )(UsersContainer);
