import { IoWaterOutline } from "react-icons/io5";
import { FaFireBurner } from "react-icons/fa6";
import { TiLightbulb } from "react-icons/ti";
import { FaSwimmingPool } from "react-icons/fa";
import { GiComputerFan } from "react-icons/gi";
import { MdBalcony, MdFireplace } from "react-icons/md";
import SubTitle from "../../../../../Hooks/SubTitle";
import { motion } from 'framer-motion';
import { PiElevatorLight } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";



const Facilities = () => {

    const itemsArray = [
      {
        title: 'Heater',
        para: 'Unwind by the fireplace and enjoy its warmth and inviting ambiance.',
        icon: <MdFireplace />
      },
      {
        title: 'Swimming pool',
        para: 'Clean well maintained swimming pool with lifeguard.',
        icon: <FaSwimmingPool />
      },
      {
        title: 'Elevator',
        para: '24/7 working elevator with backup for a whole day.',
        icon: <PiElevatorLight />
      },
      {
        title: 'Parking',
        para: 'Wide, secure and easily accessible space for parking.',
        icon: <FaCar />
      },
      {
        title: 'Security',
        para: 'Highly trained security guards active on duty 24/7 for your safety.',
        icon: <GiCctvCamera />
      },
      {
        title: 'WiFi',
        para: 'Super fast, Exceptional Wi-Fi performance ensuring swift downloads and lag-free streaming. ',
        icon: <FaWifi />
      },
      {
        title: 'Smart Appliances ',
        para: 'Modern and latest model home appliances already installed in your home.',
        icon: <PiTelevisionSimple />
      },
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
        
      ];

    return (
        <div className="max-w-7xl mx-auto my-10 flex flex-col gap-10 bottom-2 border-black">
            <SubTitle title="Facilities"></SubTitle>
            <h1 className="grid grid-cols-2 lg:grid-cols-4 space-y-2 lg:space-y-0 justify-around gap-2 lg:gap-10">
                {itemsArray.map((item,index) =>
                <div className="text-center border-2 space-y-2 flex flex-col justify-between p-2" key={index}>
                    <motion.p initial={{scale:1}} whileHover={{scale:1.1}} className="text-2xl w-full flex justify-center lg:text-6xl">{item.icon}</motion.p>
                    <p className="text-xl lg:text-3xl">{item.title}</p>
                    <p className="text-sm">{item.para}</p>
                </div>
                )}
            </h1>
        </div>
    );
};

export default Facilities;