import React from "react"
import s from "./users.module.css"
import userPhoto from "../../assets/img/userphoto.png"
import {statuses} from "../../DAL/statuses";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";


let Users = ({
                 pageNumber, users, follow, unfollow,
                 getUsers, status, pageSize, totalCount,
                 currentPage, setPageNumber, setPageSize
             }) => {

    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let onClickPageNumber = (p) => {
        setPageNumber(p);
        getUsers()
    };

    let onChangeSelect = (e) => {
        setPageSize(e.target.value);
        setPageNumber(1);
        getUsers()
    }
    return (
        <>
            <div className={s.content}>
                <div className={s.title}>Find users</div>
                {status === statuses.SUCCESS &&
                <>
                    {users.map(u => <div key={u.id} className={s.users}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        <span className={s.status}>{u.status}</span>
                        <NavLink to={`/user/${u.id}`}><span className={s.fullName}>{u.name}</span></NavLink>
                        {u.followed
                            ? <button className={s.button} onClick={() => {
                                unfollow(u.id)
                            }}>Unfollow</button>
                            : <button className={s.button} onClick={() => {
                                follow(u.id)
                            }}>Follow</button>}

                        <span className={s.location}/>
                    </div>)
                    }
                </>}
            </div>
            {status === statuses.SUCCESS &&
            <>
                <div>
                    <span>Select user count:</span>
                    <select onChange={onChangeSelect} value={pageSize}>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='50'>50</option>
                        <option value='100'>100</option>
                    </select>
                </div>
                <div className={s.navigationPage}>
                    {pages.map((p) => <span onClick={() => onClickPageNumber(p)}
                                            className={currentPage === p ? s.paginationActive : s.pagination}>{p}</span>)}
                </div>
            </>}
            {status === statuses.IN_PROGRESS && <div className={s.preloader}><Preloader/></div>}
        </>
    )
}

export default Users;