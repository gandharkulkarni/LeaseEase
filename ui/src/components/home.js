import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ICON } from "../static/png/icon";
import { ListingTabs } from "./listingTabs";
import { Navbar } from "./navbar";

const Home = ({ auth }) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!auth.isAuthenticated()) {
            //navigate('/login')
        }
    })

    return (
        <div>
            <Navbar auth={auth} />
            <div className='flex flex-col items-center justify-center mt-20'>
                <ListingTabs />
            </div>
        </div>
    );
};

export default Home;