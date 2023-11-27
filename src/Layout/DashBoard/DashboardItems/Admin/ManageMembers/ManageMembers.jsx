import useUserInfo from "../../../../../Hooks/useUserInfo";
import ManageMemberRow from "./ManageMemberRow";

const ManageMembers = () => {
    const [users, userLoading, refetch] = useUserInfo()
    const members = users.filter(user => user?.role == 'member')

    return (
        <div>
            <div className="lg:min-h-screen">
            <h1 className="text-4xl text-center mt-10 text-white p-3 rounded-lg bg-[#00a9a5] w-fit mx-auto">Manage Members</h1>

             
            <div className="overflow-x-auto max-w-7xl mx-auto my-5 ">
             <table className="table static w-full">
                {/* head */}
                <thead>
                    <tr className="text-xl">
                        <th>User Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody >
                {
                members.map(user =><ManageMemberRow key={user._id} user={user} refetch ></ManageMemberRow>)
                }
                </tbody>

            </table>
            </div>    

        
           
            
            </div>
        </div>
    );
};

export default ManageMembers;