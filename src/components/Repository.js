import { useEffect, useState } from "react";
import { getListRepoActyvity } from "../api/repository";

export const Repository = ({repo, username}) => {

    const [repos, setRepos] = useState([]);

    const getAllInfo = async () => {
        const response = await getListRepoActyvity(repo, username);
        setRepos(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getAllInfo();        
    }, [repo, username])

    return (
        <>
            <p>Info</p>
        </>
    );
}
        