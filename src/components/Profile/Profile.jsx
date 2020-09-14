import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';



const Profile = (props) => {

    return (
        <>
            <ProfileInfo />
            <MyPosts    posts={props.profilePage.posts}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                        newPostText={props.profilePage.newPostText}
                         />
           
        </>
    )
};
export default Profile