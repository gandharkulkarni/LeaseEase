import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListingTabs } from "./listingTabs";
import { Navbar } from "./navbar";
import { ViewListings } from "./viewListings";

const Home = ({ auth }) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!auth.isAuthenticated()) {
            //navigate('/login')
        }
    })

    return (
        <div>
            <ViewListings />
        </div>
    );
};

export default Home;