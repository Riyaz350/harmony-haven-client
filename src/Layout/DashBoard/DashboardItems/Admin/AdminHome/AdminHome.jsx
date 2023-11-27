import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import useApartmentInfo from "../../../../../Hooks/useApartmentInfo";
import useUserInfo from "../../../../../Hooks/useUserInfo";

const AdminHome = () => {
    const [apartments, apartmentLoading] =useApartmentInfo()
    const [availability, setAvailability] = useState(0)
    const available = apartments.filter(apartment => apartment.status == 'notBooked')
    const {user} =useContext(AuthContext)
    useEffect(()=>{
        if(apartments.length !== 0){
            const availablePercentage = (available?.length/apartments?.length) *100
            setAvailability(availablePercentage)
        }
    },[apartments.length, available?.length])

    const [users, userLoading] = useUserInfo()
    const members = users.filter(user => user.role == 'member')



    return (
        <div className="max-w-7xl mx-auto">
            {/* ADMIN INFO */}
            <div>
                    <div className="lg:grid grid-cols-3 bg-[#00a9a5] rounded-xl lg:p-0 py-5">
                    <div><img className="w-1/2 m-5  col-span-1 mx-auto my-5 rounded-xl" src={user?.photoURL} alt="" /></div>
                    <div className="text-white lg:px-0 px-5 my-auto col-span-2 text-base md:text-3xl lg:text-5xl font-semibold text-center lg:text-start">
                        <div><h1>Admin Name: {user?.displayName}</h1></div>
                        <div><h1>Admin Email: {user?.email}</h1></div>
                    </div>
            </div>
            {/* APARTMENT INFO */}
                <div className="my-10 lg:my-20 z-0">
                    <div className="md:grid grid-cols-2 gap-4 lg:gap-20 space-y-10 my-10">

                        <div><div className="card static w-3/4 lg:w-full my-10 mx-auto bg-[#00a9a5] text-white font-bold  ">
                            <div className="card-body text-center">
                                <h2 className="text-sm lg:text-2xl">Available Room</h2>
                                <p className="text-xl md:text-4xl lg:text-7xl">{availability}%</p>
                            </div>
                        </div></div>

                        <div><div className="card static w-3/4 lg:w-full  mx-auto bg-[#00a9a5] text-white font-bold  ">
                            <div className="card-body text-center">
                                <h2 className="text-sm lg:text-2xl">Unavailable Rooms</h2>
                                <p className="text-xl md:text-4xl lg:text-7xl">{100-availability}%</p>
                            </div>
                        </div></div>


                    </div>

                    <div className="md:grid grid-cols-3 gap-4 lg:gap-20 space-y-10 my-10">

                        <div><div className="card static w-3/4 lg:w-full my-10 mx-auto bg-[#00a9a5] text-white font-bold  ">
                            <div className="card-body text-center">
                                <h2 className="text-sm lg:text-2xl">Total Number Of Rooms</h2>
                                <p className="text-xl md:text-4xl lg:text-7xl">{apartments.length}</p>
                            </div>
                        </div></div>


                        <div><div className="card static w-3/4 lg:w-full  mx-auto bg-[#00a9a5] text-white font-bold  ">
                            <div className="card-body text-center">
                                <h2 className="text-sm lg:text-2xl">Total Number Of Users</h2>
                                <p className="text-xl md:text-4xl lg:text-7xl">{users.length}</p>
                            </div>
                        </div></div>



                        <div><div className="card static w-3/4 lg:w-full mx-auto bg-[#00a9a5] text-white font-bold  ">
                            <div className="card-body text-center">
                                <h2 className="text-sm lg:text-2xl">Total Number Of Members</h2>
                                <p className="text-xl md:text-4xl lg:text-7xl">{members.length}</p>
                            </div>
                        </div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;