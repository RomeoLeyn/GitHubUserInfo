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

export const getNexPageUserEvents = async (username, page, per_page) => {
    const response = await axios.get(`https://api.github.com/users/${username}/events`, {
        params: {
            page: page,
            per_page: per_page
        }
    })
    return response;
}