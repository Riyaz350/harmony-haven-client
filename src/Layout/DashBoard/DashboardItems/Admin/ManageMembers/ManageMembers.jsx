import useUserInfo from "../../../../../Hooks/useUserInfo";
import ManageUserRow from "./ManageUserRow";

const ManageMembers = () => {
    const [users, userLoading, refetch] = useUserInfo()
    const members = users.filter(user => user?.role == 'member')
    console.log(users)

    return (
        <div>
            <div className="lg:min-h-screen">
            <h1 className="text-4xl text-center mt-10 text-white p-3 rounded-lg bg-[#00a9a5] w-fit mx-auto">Manage Users</h1>

             
            <div className="overflow-x-auto max-w-7xl mx-auto my-5 ">
             <table className="table w-full">
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
                members.map(user =><ManageUserRow key={user._id} user={user} refetch ></ManageUserRow>)
                }
                </tbody>

            </table>
            </div>    

        
           
            
            </div>
        </div>
    );
};

export default ManageMembers;