import { motion } from 'framer-motion';
import SubTitle from '../../../../Hooks/SubTitle';
import { GiCctvCamera } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


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
        }
    ]




    return (

        <div className="flex flex-col gap-10 my-10 overflow-hidden">
            <SubTitle title='Why Choose Us' ></SubTitle>

            <div

            className='lg:grid grid-cols-4 lg:gap-0 space-y-5 lg:space-y-0 items-center justify-center'>
            {aboutData.map((about, index)=><div key={index} className="hero  max-w-7xl mx-auto bg-white">
                    <div
                    className="hero-content relative flex-col p-0 pb-10 h-[350px] border-0 w-10/12 justify-between items-center bg-black text-white text-center border-black rounded-lg">
                        <img
                        src={about.img} className="h-[250px] w-full rounded-lg " />
                        <div className=''>
                        <h1 className="text-xl lg:text-2xl font-bold text-center">{about.title}</h1>
                        </div>
                        <motion.div
                            initial={{ opacity: window.innerWidth > 1024 ? 0 : 1, y: window.innerWidth >1024? 100: 0 }}
                            whileHover={{ opacity: 1, y:0 }}
                            transition={{duration:.3}}
                            className="font-medium flex flex-col gap-5 items-center w-full h-full bg-black bg-opacity-40 rounded-lg absolute top-0 py-6 text-lg lg:text-xl">
                            <div className='text-4xl'>{about.icon}</div>
                            {about.para}
                        </motion.div>
                    </div>
    
    </div>)}
            </div>

            
        </div>
    );
};

export default About;