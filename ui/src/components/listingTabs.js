import { useState } from "react";
import { ViewListings } from "./viewListings";
import { ManageListings } from "./manageListings";
export const ListingTabs = () =>{

    const [viewListingActive, setViewListingActive] = useState(true);
    const [viewListingClass, setViewListingClass] = useState('tab tab-active');

    const [addListingActive, setAddListingActive] = useState(false);
    const [addListingClass, setAddListingClass] = useState('tab');
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
    return (
        <div role="tablist" className="tabs tabs-lifted tabs-lg w-full">
                <div role="tab" className={viewListingClass} onClick={(e)=>{handleTabClick(0)}}>View Listings</div>
                {viewListingActive && (
                    <ViewListings />
                )}
                <div role="tab" className={addListingClass} onClick={(e)=>{handleTabClick(1)}}>My Listings</div>
                {addListingActive && (
                    <ManageListings />
                )}
            </div>
    );
}