import axios from "axios"

export const getUserByName = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response;
}

export const getAllUserRepos = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response;
}

export const getUserEvents = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/events`);
    return response;
}