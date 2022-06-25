import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let addPost = (values) =>{
        props.addPosts(values.newPostText)
        // console.log(value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <textarea*/}
            {/*            ref={newPostsElement}*/}
            {/*            onChange={onPostChange}*/}
            {/*            value={props.newPostText}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button onClick={addPost}>Add post</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <AddPostProfileRedux onSubmit={addPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}



const AddPostProfile = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={"textarea"}
                    name={"newPostText"}
                    placeholder={"Enter new post"}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}


const AddPostProfileRedux = reduxForm({
    form: 'profileAddPostMessage'
})(AddPostProfile)


export default MyPosts;
