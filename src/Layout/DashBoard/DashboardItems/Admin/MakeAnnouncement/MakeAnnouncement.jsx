import Swal from 'sweetalert2';
import '../../../../../App.css'
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { dateTime } from '../../../../../Utility/utilities';
const MakeAnnouncement = () => {
    const axiosSecure = useAxiosSecure()

    const handleAnnouncement = e =>{
        e.preventDefault()
        const toDate = new Date()
        const submissionTime = dateTime(toDate)
        const form = e.target
        const title = form.title.value
        const message = form.message.value
        const announcement = {title, message, submissionTime}
        axiosSecure.post('/announcements', announcement)
        .then(res=>{
            if(res.status == 200){
                Swal.fire({position: "top-end", icon: "success", title: "Announcement Published", showConfirmButton: false, timer: 1500});
                e.target.reset()
            }
        })
    }

    return (
        <div className="flex  justify-center ">
            <div className="flex flex-col w-1/2 gap-10 justify-center items-start">
            <h1 className="text-white font-bold  text-center bg-[#00a9a5] p-6 rounded-full ">Make An Announcement</h1>
            <form onSubmit={handleAnnouncement} className='space-y-4'>
            <input name="title" type="text" className="border-b-2 border-black w-fit h-20" placeholder="Announcement Title" />
            <textarea name="message" placeholder="Do not be shy..." className="textarea textarea-bordered textarea-lg w-full max-w-lg" ></textarea>
            <button className='btnLandLord btn text-white'>Publish</button>
            </form>
        </div>
        </div>
    );
};

export default MakeAnnouncement;