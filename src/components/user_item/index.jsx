import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
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
                <button>
                    <Link className="link" to={{
                        pathname: `/detail/${user.login}`,
                        state: user
                    }}>Detail</Link>
                </button>
            </div>
        </div>
    )
}

export default UserItem
