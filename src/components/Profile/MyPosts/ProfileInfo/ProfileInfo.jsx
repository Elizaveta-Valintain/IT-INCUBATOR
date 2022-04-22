import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt='profile img'/>
            </div>
            <div className={s.discriptionBlock}>
                ava+discription
            </div>


        </div>
    );
}

export default ProfileInfo;
