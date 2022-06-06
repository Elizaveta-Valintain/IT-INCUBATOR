import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    //sideBar: sidebarReducer
    usersPage: usersReducer,
    auth: AuthReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// let store = createStore(profileReducer,dialogsReducer,sidebarReducer);


window.store = store;


export default store
