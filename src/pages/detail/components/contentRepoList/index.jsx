import './style.css'
import { useEffect } from 'react'
import useFetchRepoList from './useFetchRepoList'
import RepoList from './repo_list'
import Loading from '../../../../components/loading'

function ContentRepoList({ repos_url, public_repos }) {
    const [getRepoList, state] = useFetchRepoList(repos_url)
    const { data, status } = state
    useEffect(() => {
        getRepoList()
    }, [repos_url]);
    return (
        <div className="container-repo">
            <p>Public repo: {public_repos}</p>

            {status === 'loading'
                ? <Loading />
                : <RepoList status={status} repoList={data} />}

        </div>
    )
}

export default ContentRepoList
