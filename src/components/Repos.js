export const Repos = ({ repos }) => {

    console.log(repos);
    return (
        <>
            {Array.isArray(repos) !== true ? (<div>Piska</div>) : (
                repos.map((repo, index) => (
                    <li key={`${repo.id}-${index}`} className="repo-item">
                        <div>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                            <p>{repo.language}</p>
                            <p>{repo.description}</p>
                            <p>Stars: {repo.stargazers_count}</p>
                            <p>Forks: {repo.forks_count}</p>
                            <p>Watchers: {repo.watchers_count}</p>
                            <p>Issues: {repo.open_issues_count}</p>
                            <p>Created: {new Date(repo.created_at).toLocaleString()}</p>
                            <p>Updated: {new Date(repo.updated_at).toLocaleString()}</p>
                            <p>Pushed: {new Date(repo.pushed_at).toLocaleString()}</p>
                            <p>Last commit: {new Date(repo.pushed_at).toLocaleString()}</p>
                            <p>Default branch: {repo.default_branch}</p>
                            <p>Status: {repo.visibility}</p>
                        </div>
                    </li>
                ))
            )
            }
        </>
    )
}