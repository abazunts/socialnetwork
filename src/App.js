import React from 'react';

import './App.css';
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Music from "./Components/Music/music";
import Settings from "./Components/Settings/settings";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/Profile/profile";
import FriendsPage from "./Components/Friends/FriendsPage/friendspage";
import NewsContainer from "./Components/News/newsContainer";
import MessagesContainer from "./Components/Messages/messagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UserContainer from "./Components/User/UserContainer";
import Users1 from "./Components/Users/Users1";
import FormExampleContainer from "./Components/FormExemple/FormExampleContainer";



const App = ({state:{profilePage, friendPage}}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="header">
                    <HeaderContainer/>
                </div>
                <div className="content">
                    <div className="contentBlock">
                        <Route exact path='/user/:userId' render={() => <ProfileContainer/>}/>
                        <Route exact path='/'
                               render={() => <NewsContainer/>}/>
                        <Route path='/profile' render={() => <ProfileContainer/>}/>
                        <Route path='/Messages' render={() => <MessagesContainer/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/FriendsPage' render={() => <FriendsPage friendPage={friendPage}/>}/>
                        <Route path='/Settings' render={() => <FormExampleContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer />}/>
                    </div>
                    <div className="menu">
                        <Navbar/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
