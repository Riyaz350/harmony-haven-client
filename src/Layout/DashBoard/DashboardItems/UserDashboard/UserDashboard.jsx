import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useUserAgreement from "../../../../Hooks/useUserAgreement";

const UserDashboard = () => {
    const {user} =useContext(AuthContext)
    const[agreement, agreementLoading] = useUserAgreement()
  


    const {acceptedTime, apartmentId, apartmentNo, blockName, email, floorNo, name, rent, room, status, submissionTime, _id} = agreement
    return (
        <div className="max-w-7xl mx-auto">
                <div>
                <div className="lg:grid  grid-cols-3 bg-[#00a9a5] rounded-xl lg:p-0 py-5">

                <div><img className="w-1/2 m-5  col-span-1 mx-auto my-5 rounded-xl" src={user?.photoURL} alt="" /></div>
                <div className="text-white lg:px-0 px-5 my-auto col-span-2 text-base md:text-3xl lg:text-5xl font-semibold text-center lg:text-start">
                    <div><h1>Name: {user?.displayName}</h1></div>
                    <div><h1>Email: {user?.email}</h1></div>
                </div>
                </div>

            {agreementLoading && <span className="loading loading-spinner loading-lg"></span>}
                <div className="my-10 lg:grid grid-cols-2 gap-10 space-y-5 lg:space-y-0">
    
                    <div><div className="card static w-3/4 lg:w-full mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Agreement Accepted Date</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">{acceptedTime? acceptedTime: 'none'}</p>
                        </div>
                    </div></div>



                    <div><div className="card static w-3/4 lg:w-full  mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Floor</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">{floorNo? floorNo: 'none'}</p>
                        </div>
                    </div></div>

                    <div><div className="card static w-3/4 lg:w-full  mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Block</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">{blockName? blockName: 'none'}</p>
                        </div>
                    </div></div>

                    <div><div className="card static w-3/4 lg:w-full mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Total Number Of Rooms</h2>
                            <p className="text-xl md:text-2xl lg:text-4xl">{room? room:'none'}</p>
                        </div>
                    </div></div>

                </div>
            </div>
    </div>
    );
};

export default UserDashboard;