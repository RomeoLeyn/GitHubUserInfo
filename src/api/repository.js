import axios from "axios"

export const getListRepoActyvity = async (repo, username) => {
    const response = await axios.get(` https://api.github.com/repos/${username}/${repo}/commits`);
    return response;
}