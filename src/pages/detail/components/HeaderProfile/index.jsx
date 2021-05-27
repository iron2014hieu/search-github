import './style.css'
import LeftArrow from '../../../../assets/icons/left-arrow'
import github from '../../../../assets/icons/github.svg'
import home from '../../../../assets/icons/home.svg'
import calendar from '../../../../assets/icons/calendar.svg'
import Loading from '../../../../components/loading'

function HeaderProfile({ user, status }) {
    const render =
        (<div className="wrap-profile">
            <div className="wrap-img">
                <img src={user.avatar_url} alt="avatar" />
            </div>
            <div className="info">
                <span className="name"> {user.name}</span>
                <p>
                    <span>
                        <img src={github} width={16} height={16} alt="github" />
                        <span className="title">Github:</span>
                    </span>
                    <span>
                        <a className="github-a" href={user.html_url}>{user.html_url}</a>
                    </span>
                </p>
                <p>
                    <span>
                        <img src={home} width={16} height={16} alt="location" />
                        <span className="title">Github:</span>
                    </span>
                    <span>{user.location}</span>
                </p>
                <p>
                    <span>
                        <img src={calendar} width={16} height={16} alt="join at" />
                        <span className="title">Join at:</span>
                    </span>
                    {user.created_at}
                </p>
            </div>
        </div>)

    return (

        (<div className="container-profile">
            {status === 'loading' && <Loading />}
            {status === 'success' && render}
            <a className="wrap-left-arrow" href="/">
                <span className="left-arrow" >
                    <LeftArrow width='24' height='24' />
                </span>
            </a>
        </div>)


    )
}

export default HeaderProfile
