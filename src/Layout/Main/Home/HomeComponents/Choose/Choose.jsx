import { NavLink } from "react-router-dom";
import useApartmentInfo from "../../../../../Hooks/useApartmentInfo";
import { motion } from 'framer-motion';

const Choose = () => {

    const images = [
        'https://i.ibb.co/Vw1n3nf/image.png',
        'https://i.ibb.co/Q9yB63j/image.png',
        'https://i.ibb.co/6rfvbCp/image.png',
        'https://i.ibb.co/YcDmLPr/image.png',
        'https://i.ibb.co/ZBTmQJs/image.png',
        'https://i.ibb.co/9wYqrMb/image.png'

    ]

    const [apartments] = useApartmentInfo()

    const trimmed = apartments.slice(0,6)
    console.log(trimmed)

    return (
        <div className="text-center my-20 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl border-b-2 border-black w-fit mx-auto pb-2">C h o o s e   <span className="mx-5">A n</span>   A p a r t m e n t</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 pt-10 gap-10 max-w-7xl mx-auto">
                {trimmed.map((apartment, index) =>
                    <div key={apartment._id} className="rounded-lg bg shadow-lg cursor-pointer">
                        <div className="overflow-hidden">
                        <motion.img initial={{scale:1}} whileHover={{scale:1.1}} src={images[index]} alt="" className="h-[120px]  lg:h-[250px] w-full "/>

                        </div>
                        <h1 className="text-xl md:text-2xl mt-4">{apartment.blockName}</h1>
                        <div className="flex justify-center gap-5 text-sm mb-4 items-center">
                        <h1 className=" mt-2">Room: {apartment.room}</h1>
                        <h1 className=" mt-2">Rent: ${apartment.rent}</h1>
                        </div>

                        </div>)}
            </div>
            <NavLink className='mt-2 w-fit lg:mt-5 block p-1 lg:p-5 lg:text-xl text-xs border-2 hover:border-black border-black  lg:w-fit  bg-white text-black hover:bg-black hover:text-white' to='/apartments'>See More</NavLink>

        </div>
    );
};

export default Choose;