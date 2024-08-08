import { useParams } from "react-router-dom"
import { Repository } from "../../components/Repository"

export const RepoPage = () => {
    const { repo, username } = useParams()
    return (
        <div>
            <Repository repo={repo} username={username}/>
        </div>
    )
}