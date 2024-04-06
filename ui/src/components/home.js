import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ICON } from "../static/png/icon";
import { ListingTabs } from "./listingTabs";

const Home = ({auth}) => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(!auth.isAuthenticated()){
            //navigate('/login')
        }
    })
    
    return(
        <div className='flex flex-col items-center justify-center'>
            <div className="h-1/3 w-1/3">
                <ICON />
            </div>
            <ListingTabs />

        </div>
    );
  };

  export default Home;