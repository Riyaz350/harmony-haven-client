import useAnnouncements from "../../../../Hooks/useAnnouncements";
import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
    const [announcements] = useAnnouncements()
    return (
        <div className="lg:p-20 space-y-10">
                        <h1 className="text-4xl text-center mt-10 text-white p-3 rounded-lg bg-[#00a9a5] w-fit mx-auto">Announcements By Authorities</h1>

            <div className="">
            {
                announcements.map(announcement =><AnnouncementCard key={ announcement._id} announcement={announcement}></AnnouncementCard>)
            }
            </div>
        </div>
    );
};

export default Announcements;