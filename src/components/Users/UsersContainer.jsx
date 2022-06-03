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
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../../api/usersAPI";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsersDefault(this.props.pageCurrent, this.props.pageSizeView)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalPage(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setPageCurrent(pageNumber)

        usersApi.getUsersChangePage(pageNumber, this.props.pageSizeView)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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
