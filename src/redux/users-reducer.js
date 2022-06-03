const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initReducersTree = {
    users: [],

    pageTotalCount: 0,
    pageSizeView: 2,
    pageCurrent: 3781,
    isFetching: false
}

const usersReducer = (state = initReducersTree, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        case SET_USERS:
            return {
                ...state, users: action.users
                // ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, pageCurrent: action.pageCurrent
            }
        case SET_TOTAL_PAGE:
            return {
                ...state, pageTotalCount: action.pageTotalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default :
            return state
    }
}

export let follow = (userId) => {
    return {type: FOLLOW, userId}
}
export let unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
}
export let setUsers = (users) => {
    return {type: SET_USERS, users}
}
export let setPageCurrent = (setCurrentPage) => {
    return {type: SET_CURRENT_PAGE, pageCurrent: setCurrentPage}
}

export let setTotalPage = (pageTotalCount) => {
    return {type: SET_TOTAL_PAGE, pageTotalCount}
}

export let toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export default usersReducer;
