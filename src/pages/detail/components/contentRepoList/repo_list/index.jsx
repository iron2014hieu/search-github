import './style.css'
import star from '../../../../../assets/icons/star.svg'
import gitBranch from '../../../../../assets/icons/git-branch.svg'

function RepoList({ repoList, status }) {
    return (
        <div className="container-repos">
            {repoList.map((repo, index) =>
                <div key={repo.id} className="wrap-item">
                    <p >
                        <a className="link-repo" href={repo.html_url}>{`#${index + 1} - ${repo.name}`}</a>
                    </p>
                    <p>{repo.description ? repo.description : 'No description'}</p>
                    <div className="language">
                        <div className="wrap-language">
                            <span className="language-icon"></span>
                            <span className="language-title">{repo.language}</span>
                        </div>

                        <div className="fork-watchers">

                            <div >
                                <img width="16" height="16" src={star} alt="star" />
                                <span>{repo.watchers}</span>
                            </div>
                            <div>
                                <img width="16" height="16" src={gitBranch} alt="star" />
                                <span>{repo.forks}</span>
                            </div>
                        </div>
                    </div>

                </div>
            )}
            {(status === 'success' && repoList.length >= 30)
                && <button className="btn-load">Load More</button>}
        </div>
    )
}

export default RepoList
