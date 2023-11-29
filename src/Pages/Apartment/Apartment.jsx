import useApartmentInfo from "../../Hooks/useApartmentInfo";
import ApartmentCard from './ApartmentCard'
import '../../App.css'
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Apartment = () => {
    const{loading} =useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const apartmentsPerPage = 6
    const [length, setLength] = useState(0)
    const [current, setCurrent] =useState(0)
    const [apartments] = useApartmentInfo(current, apartmentsPerPage)

    const pageCount = Math.ceil(length/apartmentsPerPage)
    const pages = [...Array(pageCount).keys()]

 


   useEffect(()=>{

    axiosPublic.get('/apartmentsCount')
    .then(res => setLength(res.data.count))
   },[axiosPublic,current, length])
    
   const handlePrev = () =>{
    if(current>0){
        setCurrent(current -1)
    }
}
const handleNext = () =>{
    if(current < pages.length-1){
        
        setCurrent(current +1)
    }
}
    

    
    return (
        <div>
            { loading && <span className="loading w-1/6 mx-auto py-80 text-center block loading-spinner text-[#00a9a5]"></span>}
            <div className="flex flex-col gap-10 py-28">
                {
                    apartments.map(apartment => <ApartmentCard key={apartment.id} apartment={apartment} refetch></ApartmentCard> )
                }
            </div>

            <div className="flex justify-center items-center my-14 gap-10 lg:gap-20 bg-[#00a9a5] w-fit mx-auto p-1 lg:p-3 rounded-full">
            <button className="bg-[#00a9a5] text-white rounded-full h-fit p-1 lg:p-2 btnLandLord border-2 border-white" onClick={handlePrev}>Prev</button>
            <div className='space-x-5 h-fit lg:h-full'>
            {
                    pages.map(page => <button
                        className={current === page ? 'activePage text-white btnLandLord btn' : undefined}
                        onClick={() => setCurrent(page)}
                        key={page}
                    >{page}</button>)
            }            
            </div>
            <button className="bg-[#00a9a5] text-white rounded-full h-fit lg:h-full p-1 lg:p-2 btnLandLord border-2 border-white" onClick={handleNext}>Next</button>

            </div>
        </div>
    );
};

export default Apartment;