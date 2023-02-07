import { Outlet } from "react-router-dom";


function MainLayout() {
    return(
        <>
            
            <Outlet context={{user: 'Muji'}} />

        </>
    )
}

export default MainLayout