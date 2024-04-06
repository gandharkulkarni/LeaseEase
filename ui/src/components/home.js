import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICON } from "../static/png/icon";

const Home = ({auth}) => {
    let navigate = useNavigate();
    const [viewListingActive, setViewListingActive] = useState(true);
    const [viewListingClass, setViewListingClass] = useState('tab tab-active');

    const [addListingActive, setAddListingActive] = useState(false);
    const [addListingClass, setAddListingClass] = useState('tab');
    useEffect(()=>{
        if(!auth.isAuthenticated()){
            //navigate('/login')
        }
    })
    const handleTabClick = (index) =>{
        if(index){
            setViewListingClass('tab');
            setViewListingActive(false);

            setAddListingClass('tab tab-active');
            setAddListingActive(true);
        } else{
            setViewListingClass('tab tab-active');
            setViewListingActive(true);

            setAddListingClass('tab');
            setAddListingActive(false);
        }
    }
    return(
        <div className='flex flex-col items-center justify-center'>
            <div className="h-1/3 w-1/3">
                <ICON />
            </div>
            <div role="tablist" className="tabs tabs-lifted tabs-lg">
                <div role="tab" className={viewListingClass} onClick={(e)=>{handleTabClick(0)}}>Listings</div>
                {viewListingActive && (
                    <div> 
                        <h1>View Listings</h1>
                    </div>
                )}
                <div role="tab" className={addListingClass} onClick={(e)=>{handleTabClick(1)}}>Add Listing</div>
                {addListingActive && (
                    <div> 
                        <h1>Add Listings</h1>
                    </div>
                )}
            </div>

        </div>
    );
  };

  export default Home;