import { useNavigate } from "react-router-dom";
import { ViewListings } from "./viewListings";

export const ManageListings = () =>{
    let navigate = useNavigate()
    const handleAddListing = () =>{
        navigate('/addListing')
    }
    return (
        <div> 
            <h1>Manage Listings</h1>
            <button className="btn" onClick={handleAddListing}>Add new listing</button>
            <ViewListings />
        </div>
    );
}