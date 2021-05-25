import React from 'react'
import './style.css'
function UserItem({ user, index }) {
    const { avatar_url, login, html_url } = user
    return (
        <div className="container-user">
            <span className="index">#{index + 1}</span>
            <span className="avatar-wrap"><img src={avatar_url} alt="avatar" /></span>
            <div className="inner-wrap">
                <p>{login}</p>
                <a className="github-link" href={html_url}>Github Link</a>
            </div>
            <div className="wrap-input">
            <input type="button" value="Detail" />
            </div>
        </div>
    )
}

export default UserItem
