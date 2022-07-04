export const getUsers = (state) =>{
    return state.usersPage.users
}

export const getPageSize = (state) =>{
    return state.usersPage.pageSizeView
}

export const getPageTotalCount = (state) =>{
    return state.usersPage.pageTotalCount
}

export const getPageCurrent = (state) =>{
    return state.usersPage.pageCurrent
}

export const getIsFetching = (state) =>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) =>{
    return state.usersPage.followingInProgress
}

// export const getIsAuth = (state) =>{
//     return state.auth.isAuth
// }
