import React from "react";
import style from './Users.module.css'
import usersPhoto from './../../axios/images/murka.jpg'
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/followAPI";


const Users = (props) => {

    let pageNumber = Math.ceil(props.pageTotalCount / props.pageSizeView);
    let pages = [];
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
    }

    let curP = props.pageCurrent
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5
    let curPL = curP + 5
    let slicedPages = pages.slice(curPF, curPL)


    return (<div>
        {slicedPages.map(p => {
            return <span key={p.id}
                         className={props.pageCurrent === p && style.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}
            > {p} </span>
        })}

        {props.users.map(u => <div key={u.id}>
            <div className={style.item}>
                <div>
                    <div>
                        <NavLink to={`/profile/` + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto} alt={""}/>
                        </NavLink>
                    </div>

                    <div>
                        {u.followed ? <button onClick={() => {

                            followAPI.setUnFollow(u.id)
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })

                        }}>Unfollow</button> : <button onClick={() => {

                           followAPI.setFollow(u.id)

                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })

                        }}>Follow</button>}
                    </div>
                </div>
                <div className={style.left}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div className={style.right}>
                    <div>{u.id + " u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </div>
            </div>
        </div>)}
    </div>)
}


export default Users



