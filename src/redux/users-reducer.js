const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


let initReducersTree = {users: []}

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
                ...state, users: [ ...action.users]
                // ...state, users: [...state.users, ...action.users] так было, но кол-во юзеров удваивается
                //т.е. делается два запроса к серверу и возвращается одинаковое кол-во пользователей два раза
            }

        default :
            return state
    }
}

export let followAC = (userId) => {
    return {type: FOLLOW, userId}
}
export let unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}
export let setUsersAC = (users) => {
    return {type: SET_USERS, users}
}


export default usersReducer
