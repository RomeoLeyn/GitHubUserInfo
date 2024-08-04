// Hooks
import { useEffect, useState } from "react";

// API
import { getAllUserRepos, getNexPageUserEvents } from "../api/user";

// Constants
import { PER_PAGE } from "../constants/constants";

// Styles
import '../style/UserRepos.css';
import { Repos } from "./Repos";

export const UserRepos = ({ name }) => {

    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);

    const getAllRepos = async () => {
        const response = await getAllUserRepos(name);
        setRepos(response.data);
    }

    const nextPageUserRepos = async () => {
        const response = await getNexPageUserEvents(name, page, PER_PAGE);
        const reposData = response.data.map(event => event.repo); // Витягуємо репозиторії з подій
        setRepos(prevRepos => [...prevRepos, ...reposData]);
        setPage(prevPage => prevPage + 1);
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
                    <Repos repos={repos} />
                </ul>
                <button onClick={nextPageUserRepos} className="repos-button"> Load more </button>
            </div>
        </>
    )
}