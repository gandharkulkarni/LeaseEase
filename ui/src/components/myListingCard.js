
export const MyListingCard = ({imgSrc, address, rent}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={imgSrc} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{address}</h2>
            <p>Rent : ${rent} </p>
            <div className="card-actions justify-end">
            <button className="btn btn-accent">Delete</button>
            </div>
        </div>
        </div>
    );
}