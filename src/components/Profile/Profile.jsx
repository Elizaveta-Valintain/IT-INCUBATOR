import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                // posts={props.profilePage.posts}
                // newPostText={props.profilePage.newPostText}
                // dispatch={props.dispatch}
             //   updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;
