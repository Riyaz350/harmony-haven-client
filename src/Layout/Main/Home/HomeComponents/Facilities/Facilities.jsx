import { IoWaterOutline } from "react-icons/io5";
import { FaFireBurner } from "react-icons/fa6";
import { TiLightbulb } from "react-icons/ti";
import { GiComputerFan } from "react-icons/gi";
import { MdBalcony, MdFireplace } from "react-icons/md";
import SubTitle from "../../../../../Hooks/SubTitle";
import { motion } from 'framer-motion';


const Facilities = () => {

    const itemsArray = [
        {
          title: 'Balcony',
          para: 'Outdoor serenity with a cozy balcony and breathtaking views.',
          icon: <MdBalcony />
        },
        {
          title: 'Water',
          para: 'Tranquil living with water features creating a peaceful ambiance.',
          icon: <IoWaterOutline />
        },
        {
          title: 'Gas',
          para: 'Warmth and coziness provided by a stylish and efficient fire burner.',
          icon: <FaFireBurner />
        },
        {
          title: 'Electricity',
          para: 'Brighten your space with energy-efficient and vibrant lighting solutions.',
          icon: <TiLightbulb />
        },
        {
          title: 'Cooler',
          para: 'Efficient and silent cooling for your devices in a comfortable environment.',
          icon: <GiComputerFan />
        },
        {
          title: 'Heater',
          para: 'Unwind by the fireplace and enjoy its warmth and inviting ambiance.',
          icon: <MdFireplace />
        }
      ];

    return (
        <div className="max-w-7xl mx-auto my-10 flex flex-col gap-10 bottom-2 border-black">
            <SubTitle title="Facilities"></SubTitle>
            <h1 className="lg:flex space-y-2 lg:space-y-0 justify-around gap-2">
                {itemsArray.map((item,index) =><div className="text-center border-2 space-y-2 flex flex-col justify-between p-2" key={index}>
                    <motion.p initial={{scale:1}} whileHover={{scale:1.1}} className="text-3xl w-full flex justify-center lg:text-6xl">{item.icon}</motion.p>
                    <p className="text-3xl">{item.title}</p>
                    <p>{item.para}</p>
                </div>)}
            </h1>
        </div>
    );
};

export default Facilities;