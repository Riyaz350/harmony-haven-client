import useApartmentInfo from "../../../Hooks/useApartmentInfo";
import ApartmentCard from './ApartmentCard'
import '../../../App.css'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SubTitle from "../../../Hooks/SubTitle";
import { useMediaQuery } from 'react-responsive';

const Apartment = () => {
    const isWideScreen = useMediaQuery({ minWidth: 1025 });

    const{loading} =useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const apartmentsPerPage = 9
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
        <div className="mt-10">

            <SubTitle title='Choose Your Apartment' ></SubTitle>

            { loading && <span className="loading w-1/6 mx-auto py-80 text-center block loading-spinner text-[#000000]"></span>}
            <div  style={{display: 'grid', gridTemplateColumns: isWideScreen ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',}} className="lg:grid p-5 gap-5 md:gap-20 py-14 max-w-7xl mx-auto">
                {
                    apartments.map((apartment, index) => <ApartmentCard key={apartment.id} index={index} apartment={apartment} refetch></ApartmentCard> )
                }
            </div>

            <div className="flex justify-center items-center my-14 gap-10 lg:gap-20 bg-[#000000] text-white font-bold w-fit mx-auto p-1 lg:p-3 rounded-full">
            <button className="bg-[#000000] text-white rounded-full h-fit p-1 lg:p-2 btnLandLord border-2 border-white" onClick={handlePrev}>Prev</button>
            <div className='space-x-5 h-fit lg:h-full'>
            {
                    pages.map(page => <button
                        className={current === page ? 'activePage text-white font-bold border-2 btnLandLord btn' : undefined}
                        onClick={() => setCurrent(page)}
                        key={page}
                    >{page}</button>)
            }            
            </div>
            <button className="bg-[#000000] text-white rounded-full h-fit lg:h-full p-1 lg:p-2 btnLandLord border-2 border-white" onClick={handleNext}>Next</button>

            </div>
        </div>
    );
};

export default Apartment;