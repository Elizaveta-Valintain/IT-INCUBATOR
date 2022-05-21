import React from "react";
import style from './Users.module.css'
import axios from "axios";
import usersPhoto from './../../axios/images/murka.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=2")
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (<div>
            {this.props.users.map(u => <div key={u.id}>
                <div className={style.item}>
                    <div>
                        <div><img src={u.photos.small != null ? u.photos.small : usersPhoto} alt={""}/></div>

                        <div>
                            {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.left}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={style.right}>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
            </div>)}
        </div>)
    }

}


export default Users

