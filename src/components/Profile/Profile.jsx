import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./MyPosts/ProfileStatus";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <ProfileStatus status='Hi, this is status line' />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
