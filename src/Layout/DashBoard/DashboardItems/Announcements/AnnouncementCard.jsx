
const AnnouncementCard = ({announcement}) => {
    const {_id, title, message, submissionTime    } = announcement
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn w-full bg-yellow-300 hover:bg-[#000000] hover:text-white font-bold" onClick={()=>document.getElementById(_id).showModal()}>{title}   ({submissionTime})</button>
            <dialog id={_id} className="modal">
            <div className="bg-[#000000] text-white font-bold modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">Announcement Date: {submissionTime}</p>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn bg-white text-[#000000] hover:bg-[#000000] hover:text-white hover:border-2 hover:border-white">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    );
};

export default AnnouncementCard;