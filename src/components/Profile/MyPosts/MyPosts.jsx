import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    //  let postsElements = postsDate.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostsElement = React.createRef();
    let addPost = () => {
        //let text = newPostsElement.current.value;
        //props.addPosts(text)
        //  props.addPosts()
        props.dispatch(addPostActionCreator())
        // props.updateNewPostText('')
    }

    let onPostChange = () => {
        let text = newPostsElement.current.value;
        //props.updateNewPostText(text)
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostsElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
