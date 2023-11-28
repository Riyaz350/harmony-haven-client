import { useContext, useEffect, useState } from "react";
import useCurrentUserInfo from "../../../../Hooks/useCurrentUserInfo";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const UserDashboard = () => {
    const {user} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [agreement, setAgreement] =useState({})
    const [userData, setUserData] =useState({})
    // const [userData, userLoading, refetch] =useCurrentUserInfo()

    useEffect(()=>{
        axiosSecure.get(`/users/${user?.email}`)
        .then(res=>setUserData(res.data))

        if(userData?.acceptedAgreement){
            axiosSecure.get(`/agreements/${userData?.acceptedAgreement}`)
            .then(res=>setAgreement(res.data))
        }


    },[user?.email, axiosSecure, userData?.acceptedAgreement])

    console.log(agreement)
    const {acceptedTime, apartmentId, apartmentNo, blockName, email, floorNo, name, rent, room, status, submissionTime, _id    } = agreement
    return (
        <div className="max-w-7xl mx-auto">
        {/* ADMIN INFO */}
        <div>
                <div className="lg:grid grid-cols-3 bg-[#00a9a5] rounded-xl lg:p-0 py-5">
                <div><img className="w-1/2 m-5  col-span-1 mx-auto my-5 rounded-xl" src={user?.photoURL} alt="" /></div>
                <div className="text-white lg:px-0 px-5 my-auto col-span-2 text-base md:text-3xl lg:text-5xl font-semibold text-center lg:text-start">
                    <div><h1>Name: {user?.displayName}</h1></div>
                    <div><h1>Email: {user?.email}</h1></div>
                </div>
        </div>
        {/* APARTMENT INFO */}
            <div className="my-10 lg:my-20 z-0">
                <div className="md:grid grid-cols-2 gap-4 lg:gap-20 space-y-10 my-10">

                    <div><div className="card static w-3/4 lg:w-full my-10 mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Room No:</h2>
                            <p className="text-xl md:text-4xl lg:text-7xl"></p>
                        </div>
                    </div></div>

                    <div><div className="card static w-3/4 lg:w-full  mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Unavailable Rooms</h2>
                            <p className="text-xl md:text-4xl lg:text-7xl"></p>
                        </div>
                    </div></div>


                </div>

                <div className="md:grid grid-cols-2 gap-4 lg:gap-20 space-y-10 my-10">




                    <div><div className="card static w-3/4 lg:w-full  mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Total Number Of Users</h2>
                            <p className="text-xl md:text-4xl lg:text-7xl"></p>
                        </div>
                    </div></div>



                    <div><div className="card static w-3/4 lg:w-full mx-auto bg-[#00a9a5] text-white font-bold  ">
                        <div className="card-body text-center">
                            <h2 className="text-sm lg:text-2xl">Total Number Of Members</h2>
                            <p className="text-xl md:text-4xl lg:text-7xl"></p>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UserDashboard;