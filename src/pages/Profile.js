import { useOutletContext } from "react-router-dom"

function Profile() {
    const user =useOutletContext()
    return(
        <>
            Welcome back, {user.user}!
        </>
    )
}

export default Profile;