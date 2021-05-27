import './style.css'
import { useEffect } from 'react'
import HeaderProfile from './components/HeaderProfile'
import useFetchDetailHook from './useFetchDetailHook'
import ContentRepoList from './components/contentRepoList'


function DetailPage({ location }) {
    const { url } = location.state
    const [getDetail, state] = useFetchDetailHook(url)
    useEffect(() => {
        getDetail()
    }, [])
    return (
        <div className="container-detail">
            <HeaderProfile
                user={state.data}
                status={state.status} />
            <ContentRepoList
                public_repos={state.data.public_repos}
                repos_url={state.data.repos_url} />
        </div>
    )
}

export default DetailPage
