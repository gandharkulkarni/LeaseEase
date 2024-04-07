import { Navbar } from "./navbar"
import { ListingTabs } from "./listingTabs"
import { ListingCard } from "./allListingsCard"
export const ViewListings = ({auth}) =>{
    const sample = {
        "data" : {
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
            ],
            "error": null,
            "totalResults": null,
            "pageNo": null,
            "message": null
        }
    }
    return (
        <div>
            <Navbar auth={auth} />
            <ListingTabs allListingTab={true}/>
            
            <div className="flex flex-wrap mt-10 items-center justify-center">
                {sample?.data?.result?.map((obj, index) => (
                    <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4 mr-2 ml-2"
                    >
                        <ListingCard imgSrc={obj.photos[0]} address={obj.address} rent={obj.price}/>
                    </div>
                ))}
                </div>
            
        </div>
    )
}