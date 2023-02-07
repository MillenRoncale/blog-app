import { Link } from "react-router-dom"

function Play() {
    return(
        <>
        <div className="btn btn-primary playNow">
            <Link to="/profile"><strong>PLAY NOW</strong></Link>
        </div>
        </>
    )
}

export default Play;