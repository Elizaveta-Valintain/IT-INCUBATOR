import style from './users.module.css'

const Users = (props) => {

//В React версії 18 не працює, залишаю масив юзерів в редюсері
    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: 1,
    //             photoUrl: './../../murka.jpg',
    //             isFriend: false,
    //             fullName: 'Serhii',
    //             status: 'I am a boss',
    //             location: {city: 'Mariupol', country: 'Ukraine'}
    //         }
    //     ])
    // }

    return (<div>
        {props.users.map(u => <div key={u.id}>
            <div className={style.item}>
                <div>
                    <div><img src={u.photoUrl}/></div>
                    <div>
                        {u.isFriend ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                    </div>
                </div>
                <div className={style.left}>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div className={style.right}>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </div>
            </div>
        </div>)}
    </div>)
}

export default Users
