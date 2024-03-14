import { motion, useAnimation } from 'framer-motion';
import SubTitle from '../../../../Hooks/SubTitle';
import { GiCctvCamera } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useKeenSlider } from 'keen-slider/react';
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useInView } from 'react-intersection-observer';


import '../Home.css'
import { useState } from 'react';

const About = () => {
  const controls = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  const flipCard = async () => {
    if (inView && !isFlipped) {
      await controls.start({ rotateY: 360 });
      setIsFlipped(true);
    }
  };

    const aboutData = [
        {
            img:"https://i.ibb.co/NszHM5z/image.png",
            title:"Location and Accessibility",
            icon:<FaLocationDot />,
            para:"Centrally located, our apartments offer seamless access to transit, shopping, and schools, ensuring convenience and a vibrant lifestyle."
        },
        {
            img:"https://i.ibb.co/CQZKz1s/image.png",
            title:"Cozy Apartments",
            icon:<FaHome />,
            para:"Our cozy apartments redefine comfort, creating a warm and inviting atmosphere within our modern and well-designed apartment complexes."
        },
        {
            img:"https://i.ibb.co/Vpqf1Zv/scott-webb-yek-GLpc3vro-unsplash.jpg",
            title:"Robust Security",
            icon:<GiCctvCamera />            ,
            para:"Our cutting-edge security employs advanced technology for unparalleled property protection, ensuring peace of mind and utmost safety for you."
        },
        {
            img:"https://i.ibb.co/HC2rLJN/joe-pee-o-QIn0-Ckxqs-Y-unsplash.jpg",
            title:"School Side Living",
            icon:<FaSchool />,
            para:"Adjacent to a prestigious school, our complex ensures convenient living with educational opportunities for residents."
        },
        {
            img:"https://i.ibb.co/HC2rLJN/joe-pee-o-QIn0-Ckxqs-Y-unsplash.jpg",
            title:"Responsive Management",
            icon:<MdManageAccounts />            ,
            para:"A dedicated and responsive management team to address residents' needs promptly, ensuring a positive living experience."
        },
        {
            img:"https://i.ibb.co/HC2rLJN/joe-pee-o-QIn0-Ckxqs-Y-unsplash.jpg",
            title:"Affordable Luxury",
            icon:<HiOutlineCurrencyDollar />,
            para:"Striking the perfect balance between luxury living and affordability, providing residents with a high-quality living experience without breaking the bank."
        },
    ]



    return (

        <div style={{ backgroundImage: 'url("https://i.ibb.co/MNvv1Yj/image.png")' }} className="flex flex-col gap-10 my-10 overflow-hidden  bg-fixed">
            <div className='  pt-20'>
            <div className="border-b-4 w-fit text-white lg:px-10 text-xl lg:text-3xl font-bold border-[#ffffff] text-center mx-auto" title='' >Why Choose Us</div>
        <div   className='lg:m-20 m-10 '>

        <div className='bg-cover max-w-7xl mx-auto gap-10  p-2 ' >

            
            <div className='  p-0 text-white '>
                <div className={`grid ${window.innerWidth <= 1024 ? 'grid-cols-2' : 'grid-cols-3'}  lg:gap-5 gap-16  items-center    `}>
                {aboutData.map((about, index)=>
                <motion.div whileInView={flipCard} animate={controls} transition={{duration:1}} ref={ref}  key={index} className=" hero hover:cursor-pointer flex   justify-center mx-auto ">
                        <div className="hero-content  overflow-hidden relative flex-col p-0    h-[200px] lg:h-full md:w-full border-0  justify-center items-center backdrop-blur-lg bg-white/40 text-black text-center border-black ">
                            <div className='lg:p-14 font-bold flex flex-col gap-5 justify-center items-center text-center'>
                            <div className='text-5xl'>{about.icon}</div>

                            <h1 className="text-lg lg:text-xl ">{about.title}</h1>
                            </div>
                            <motion.div
                                initial={{ opacity:0 , y: 100 }}
                                whileHover={{ opacity: 1, y:0 }}
                                transition={{duration:.3}}
                                className="font-semibold   flex flex-col gap-5 items-center  w-full h-full bg-white text-black  absolute top-0 py-6 text-xs  md:text-lg justify-center">
                                {about.para}
                            </motion.div>
                        </div>
                        </motion.div>)}
                </div>
            </div>

        </div>
        </div>
        </div>
        </div>
    );
};

export default About;