import React from "react";
import style from './Users.module.css'
import usersPhoto from './../../axios/images/murka.jpg'



const Users = (props) => {

    let pageNumber = Math.ceil(props.pageTotalCount / props.pageSizeView);
    let pages = [];
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
    }

    let curP = props.pageCurrent
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5
    let curPL = curP + 5
    let slicedPages = pages.slice( curPF, curPL)


    return (<div>
                {slicedPages.map(p => {
                    return <span
                        className={props.pageCurrent === p && style.selectedPage}
                        onClick={(e)=>{props.onPageChanged(p)}}
                    > {p} </span>
                })}

            {props.users.map(u => <div key={u.id}>
                <div className={style.item}>
                    <div>
                        <div><img src={u.photos.small != null ? u.photos.small : usersPhoto} alt={""}/></div>

                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
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



