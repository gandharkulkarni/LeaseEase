import { Navbar } from "react-daisyui";
import { MyListingCard } from "./myListingCard";


export const MyListings = () => {
    const sample = {
        "data": {
            "query": "viewListings",
            "result": [
                {
                    "_id": "6611a7a33b8b174108a6f4a7",
                    "price": "12334",
                    "photos": [
                        "https://res.cloudinary.com/dy3a4tkbu/image/upload/v1712460676/App/tcz0szvr5tnjd1y7jgaz.webp",
                        "https://res.cloudinary.com/dy3a4tkbu/image/upload/v1712460677/App/vq8geicli1gfcweuycjq.jpg"
                    ],
                    "address": "2243 turk boulevard",
                    "isDeleted": false,
                    "lease_link": "http://xyz.com",
                    "user_id": "6610db784ad7ddca7ef270d7",
                    "createdAt": "2024-04-06T19:50:59.061Z",
                    "updatedAt": "2024-04-06T19:50:59.061Z",
                    "__v": 0
                },
                {
                    "_id": "6611953e5bab4d2f992ee7d6",
                    "price": "1234",
                    "photos": [
                        "https://res.cloudinary.com/dy3a4tkbu/image/upload/v1712460677/App/vq8geicli1gfcweuycjq.jpg"
                    ],
                    "address": "2243 turk boulevard",
                    "isDeleted": false,
                    "lease_link": "http://xyz.com",
                    "user_id": "6610db784ad7ddca7ef270d7",
                    "createdAt": "2024-04-06T18:32:30.055Z",
                    "updatedAt": "2024-04-06T18:36:46.182Z",
                    "__v": 0
                }
            ],
            "error": null,
            "totalResults": null,
            "pageNo": null,
            "message": null
        }
    }
    return (
        <main>
            <div className="flex min-h-screen flex-col items-center justify-center w-1/2">
                <div className="container mx-auto my-4 px-12 py-4">
                    <div className="overflow-x-auto">
                        {sample.data.result.map((obj) => {
                            return (
                            <div>
                                <MyListingCard imgSrc={obj.photos[0]} address={obj.address} rent={obj.price} />
                                <br /><br />
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}