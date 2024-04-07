export const ListingCard = ({ imgSrc, address, rent }) => {
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
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="trivia_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Trivia time!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
}