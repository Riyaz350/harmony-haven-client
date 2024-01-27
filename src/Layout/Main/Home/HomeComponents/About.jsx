import { motion } from 'framer-motion';
import SubTitle from '../../../../Hooks/SubTitle';
import { GiCctvCamera } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useKeenSlider } from 'keen-slider/react';
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

import '../Home.css'

const About = () => {

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

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          duration:2000
        },
        [
          (slider) => {
            let timeout
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              timeout = setTimeout(() => {
                slider.next()
              }, 3000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )



    return (

        <div style={{ backgroundImage: 'url("https://i.ibb.co/MNvv1Yj/image.png")' }} className="flex flex-col gap-10 my-10 overflow-hidden  lg:p-20 pt-20">
            <div className=''>
            <SubTitle title='Why Choose Us' ></SubTitle>
        <div   className='lg:m-20 m-10 '>

        <div className='bg-cover max-w-7xl mx-auto gap-10  p-2 ' >

            
            <div className='  p-0 text-white '>
                {/* <div className='  text-center text-black  rounded-lg'> */}
                {/* <h1 className='text-xl lg:text-3xl font-bold'>Legacy of Superior Resident Services</h1>
                <h1 className='text-sm lg:text-xl font-medium'>With an illustrious history of unparalleled service, we take pride in consistently exceeding expectations. Our commitment to resident satisfaction is evident in every aspect, creating a legacy of excellence in apartment living.</h1> */}

                {/* </div> */}
                <div className={`grid ${window.innerWidth <= 1024 ? 'grid-cols-2' : 'grid-cols-3'}  lg:gap-5 gap-16 lg:space-y-0  items-center    `}>
                {aboutData.map((about, index)=>
                <div key={index} className="hero hover:cursor-pointer flex w-[100px] h-[200px] md:w-1/2 md:h-1/2 lg:w-full lg:h-full justify-center mx-auto bg-white">
                        <div className="hero-content  overflow-hidden relative flex-col p-0  w-[150px]  md:h-[200px] lg:h-full lg:w-full border-0  justify-center items-center bg-white text-black text-center border-black rounded-lg">
                            {/* <img src={about.img} className=" w-full h-[200px] rounded-lg " /> */}
                            <div className='p-14 font-bold flex flex-col gap-5 justify-center items-center text-center'>
                            <div className='text-5xl'>{about.icon}</div>

                            <h1 className="text-sm lg:text-xl f">{about.title}</h1>
                            </div>
                            <motion.div
                                initial={{ opacity: window.innerWidth > 1024 ? 0 : 1, y: window.innerWidth >1024? 100: 0 }}
                                whileHover={{ opacity: 1, y:0 }}
                                transition={{duration:.3}}
                                className="font-semibold md:p-2 text-white flex flex-col gap-5 items-center  w-full h-full bg-black bg-opacity-80  absolute top-0 py-6 text-xs  lg:text-lg justify-center">
                                {about.para}
                            </motion.div>
                        </div>
                        </div>)}
                </div>
            </div>

        </div>
        </div>
        </div>
        </div>
    );
};

export default About;