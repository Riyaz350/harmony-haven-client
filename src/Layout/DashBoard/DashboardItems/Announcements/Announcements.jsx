import SubTitle from "../../../../Hooks/SubTitle";
import useAnnouncements from "../../../../Hooks/useAnnouncements";
import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
    const [announcements] = useAnnouncements()
    return (
        <div className="lg:p-20 space-y-10">
            <SubTitle title='Announcements By Authorities'></SubTitle>
            <div className="">
            {
                announcements.map(announcement =><AnnouncementCard key={ announcement._id} announcement={announcement}></AnnouncementCard>)
            }
            </div>
        </div>
    );
};

export default Announcements;