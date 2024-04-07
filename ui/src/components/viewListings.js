import { Navbar } from "./navbar"
import { ListingTabs } from "./listingTabs"
export const ViewListings = ({auth}) =>{
    return (
        <div>
            <Navbar auth={auth} />
            <ListingTabs allListingTab={true}/>
            <h1> View Listings</h1>
        </div>
    )
}