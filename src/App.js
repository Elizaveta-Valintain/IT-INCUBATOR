import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
// noinspection ES6CheckImport
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import CalendarContainer from "./components/Calendar/CalendarContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>

                    <Route path='/profile' element={<Profile/>}/>

                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/calendar' element={<CalendarContainer/>}/>


                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </div>

        </div>
    )
}

export default App;
