export const Repos = ({ repos }) => {

    console.log(repos);
    return (
        <>
            {Array.isArray(repos) !== true ? (<div>None</div>) : (
                repos.map((repo, index) => (
                    <li key={`${repo.id}-${index}`} className="repo-item">
                        <div>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                            <p>{repo.language}</p>
                            <p>{repo.description}</p>
                            <p><b>Stars:</b> {repo.stargazers_count}</p>
                            <p><b>Forks:</b> {repo.forks_count}</p>
                            <p><b>Watchers:</b> {repo.watchers_count}</p>
                            <p><b>Issues:</b> {repo.open_issues_count}</p>
                            <p><b>Created:</b> {new Date(repo.created_at).toLocaleString()}</p>
                            <p><b>Updated:</b> {new Date(repo.updated_at).toLocaleString()}</p>
                            <p><b>Pushed:</b> {new Date(repo.pushed_at).toLocaleString()}</p>
                            <p><b>Last commit:</b> {new Date(repo.pushed_at).toLocaleString()}</p>
                            <p><b>Default branch:</b> {repo.default_branch}</p>
                            <p><b>Status:</b> {repo.visibility}</p>
                        </div>
                    </li>
                ))
            )
            }
        </>
    )
}