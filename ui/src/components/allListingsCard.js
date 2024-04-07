import { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST, GET_LISTING_TRIVIA } from "../constants";

export const ListingCard = ({ _id, imgSrc, address, rent, auth }) => {
    const [restaurants, setRestaurant] = useState(null);
    const [grocery, setGrocery] = useState(null);
    const [tourist, setTourist] = useState(null);
    const [streetAddress, setStreetAddress] = useState(null);
    const [listingTrivia, setListingTrivia] = useState(null);
    useEffect(() => {
        if (streetAddress && restaurants && grocery && tourist) {
            fetchListingTrivia()
        }
    })
    const fetchListingTrivia = async () => {
        let response = await axios.get(API_HOST + GET_LISTING_TRIVIA, {
            headers: {
                Authorization: auth.getToken() //the token is a variable which holds the token
            },
            params: {
                id: _id
            }
        })
        setListingTrivia(response?.data?.result);
        setStreetAddress(response?.data?.result?.property_addr);
        setGrocery(response?.data?.result?.grocery);
        setRestaurant(response?.data?.result?.restaurant_places);
        setTourist(response?.data?.result?.tourist_places);
    }
    return (
        <div>
            <div className="card w-68 glass">
                <figure><img src={imgSrc} alt="listing" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{address}</h2>
                    <p>Rent : ${rent}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => document.getElementById('listing_modal').showModal()}>Learn more about the place!</button>
                        <button className="btn btn-warning" onClick={() => document.getElementById('trivia_modal').showModal()}>Trivia</button>
                    </div>
                </div>
            </div>

            <dialog id="listing_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {listingTrivia ? (
                        <div>
                            <h3 className="font-bold text-lg">Address : {listingTrivia.property_addr}</h3>
                            <p className="py-4">Owner : {listingTrivia.owner} </p>
                            <p className="py-4"><b>Tenants : {listingTrivia.tenant}</b></p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <progress className="progress w-56"></progress>
                    )
                    }
                </div>
            </dialog>
            <dialog id="trivia_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {listingTrivia ? (
                        <div>
                            <h3 className="font-bold text-lg">Trivia!</h3>
                            <h4 className="font-bold text-md">Restautants around here:</h4>
                            {restaurants.map((name, index) => {
                                <div key={index} className="badge badge-primary badge-sm"><p className="py-4">{name}</p></div>
                            })}
                            <h4 className="font-bold text-md">Grocery outlets around here:</h4>
                            {grocery.map((name, index) => {
                                <div key={index} className="badge badge-secondary badge-sm"><p className="py-4">{name}</p></div>
                            })}
                            <h4 className="font-bold text-md">Tourist around here:</h4>
                            {tourist.map((name, index) => {
                                <div key={index} className="badge badge-accent badge-sm"><p className="py-4">{name}</p></div>
                            })}
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <progress className="progress w-56"></progress>
                    )
                    }
                </div>
            </dialog>
        </div>

    );
}