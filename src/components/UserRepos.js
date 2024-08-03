// Hooks
import { useEffect, useState } from "react";

// API
import { getAllUserRepos, getNexPageUserEvents } from "../api/user";

// Constants
import { PER_PAGE } from "../constants/constants";

// Styles
import '../style/UserRepos.css';

export const UserRepos = ({ name }) => {

    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);

    const getAllRepos = async () => {
        const response = await getAllUserRepos(name);
        setRepos(response.data);
    }

    const nextPageUserRepos = async () => {
        const response = await getNexPageUserEvents(name, page, PER_PAGE);
        console.log(response.data);
        setRepos(prevRepos => [...prevRepos, ...response.data]);
        setPage(prevPage => prevPage + 1);

        console.log(repos);
    }

    useEffect(() => {
        if (name) {
            setPage(1);
            getAllRepos();
        } else {
            setRepos([]);
        }
    }, [name])


    return (
        <>
            <div className="repos-list-container">
                <ul>
                    {repos.map((repo, index) => (
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
                    ))}
                </ul>
                <button onClick={nextPageUserRepos} className="repos-button"> Load more</button>
            </div>
        </>
    )
}