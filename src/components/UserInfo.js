// Hooks
import { useEffect, useState } from "react";

// API
import { getUserByName } from "../api/user";

// Styles
import '../style/UserInfo.css';
import { UserRepos } from "./UserRepos";

export const UserInfo = () => {
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [profile, setProfile] = useState({});

    const fetchData = async (username) => {
        const response = await getUserByName(username);
        setProfile(response.data);
    }

    useEffect(() => {
        if (name) {
            fetchData(name);
        } else {
            setProfile(null);
        }
    }, [name])


    return (
        <>
            <div className="search">
                <input className="search-input" type="text" onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && setName(inputValue)}
                ></input>
                <button className="search-button" onClick={() => setName(inputValue)}>search</button>
            </div>
            {profile === null ? (
                <>
                    <div className="main-container-message">Write user name on GitHub</div>
                </>
            ) : (
                <div className="main-container">
                    <div className="profile">
                        <h1>GitHub Profile</h1>
                        <div className="profile-header">
                            <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} className="avatar" />
                            <div className="profile-info">
                                <h2>{profile.login}</h2>
                                {profile.name && <p>{profile.name}</p>}
                                <p>Followers: {profile.followers}</p>
                                <p>Following: {profile.following}</p>
                                <p>Created: {new Date(profile.created_at).toLocaleDateString()}</p>
                                {profile.bio && <p>Bio: {profile.bio}</p>}
                                {profile.company && <p>Company: {profile.company}</p>}
                                {profile.location && <p>Location: {profile.location}</p>}
                                <a href={profile.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
                            </div>
                        </div>
                        <div className="profile-details">
                            <p>Public Repos: {profile.public_repos}</p>
                            <p>Public Gists: {profile.public_gists}</p>
                            <p><a href={profile.repos_url}>Repositories</a></p>
                            <p><a href={profile.followers_url}>Followers URL</a></p>
                            {/* <p><a href={profile.following_url.replace('{/other_user}', '')}>Following URL</a></p> */}
                            {/* <p><a href={profile.starred_url.replace('{/owner}{/repo}', '')}>Starred Repos</a></p> */}
                        </div>
                    </div>

                    <div className="repos-container">
                        {/* <div className="repos-button-container">
                            <button onClick={getAllRepos} className="repos-button"> View all user repositories</button>
                        </div> */}

                        <div>
                            {profile != null ? (<UserRepos name={name} />) : (<UserRepos repos={""} />)}
                        </div>
                        {/* <div className="repos-list-container">
                            <ul>
                                {repos.map((repo) => (
                                    <li key={repo.id} className="repo-item">
                                        <div>
                                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                                            <p>{repo.language}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={getAllUSerRepos} className="repos-button"> Next page</button>
                        </div> */}

                    </div>
                </div>
            )}
        </>
    )
}