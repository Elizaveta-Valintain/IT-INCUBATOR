import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>

                    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                         alt='profile img'/>

            </div>
            <div className={style.discriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>
                ava+discription
            </div>


        </div>
    );
}

export default ProfileInfo;
