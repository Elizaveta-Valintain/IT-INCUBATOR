import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import calendarReducer from "./calendar-reducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    //sideBar: sidebarReducer
    usersPage: usersReducer,
    calendarPage: calendarReducer
})

let store = createStore(rootReducer);
// let store = createStore(profileReducer,dialogsReducer,sidebarReducer);


window.store = store;


export default store
