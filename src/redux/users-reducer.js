import users from "../components/Users/Users";

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


let initReducersTree = {
    users: [
        {
            id: 1, photoUrl: './../../murka.jpg', isFriend: false, fullName: 'Serhii', status: 'I\'m a boss',
            location: {city: 'Mariupol', country: 'Ukraine'}
        },

        // {
        //     id: 2, photoUrl: './../../murka.jpg', isFriend: true, fullName: 'Dima', status: 'This line is status',
        //     location: {city: 'Львів', country: 'Україна'}
        // },
        //
        // {
        //     id: 3, photoUrl: './../../murka.jpg', isFriend: true, fullName: 'Olga', status: 'I girl - the too',
        //     location: {city: 'Кута', country: 'Балі'}
        // },
        //
        // {
        //     id: 4, photoUrl: './../../murka.jpg', isFriend: false, fullName: 'Tima', status: 'All will be very good',
        //     location: {city: 'Узунгел', country: 'Турція'}
        // },
    ]
}

const usersReducer = (state = initReducersTree, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, isFriend: true}
                        }
                        return u
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, isFriend: false}
                        }
                        return u
                    }
                )
            }

        case SET_USERS:
            return {
                ...state, users: [  ...state.users, ...action.type]
            }

        default :
            return state
    }

 //   return state
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
