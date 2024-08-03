import { useEffect, useState } from "react";
import { getAllUserRepos, getNexPageUserEvents } from "../api/user";
import { PER_PAGE } from "../constants/constants";

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
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={nextPageUserRepos} className="repos-button"> Next page</button>
            </div>
        </>
    )
}