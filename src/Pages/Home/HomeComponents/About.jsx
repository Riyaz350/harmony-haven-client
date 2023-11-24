import { motion } from 'framer-motion';
import SubTitle from '../../../Hooks/SubTitle';


const About = () => {

    const fadeinAnimate = {
        initial:{ opacity: 0, y: -200 },
        animate: { opacity: 3, y: 0 } 
    }


    return (

        <div className="flex flex-col gap-10">
            <SubTitle title='Apartment Complex' subTitle='About the'></SubTitle>

            <div>
            <div className="hero  max-w-7xl mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                variants={fadeinAnimate}
                initial='initial'
                whileInView='animate'
                transition={{ duration: 1 }}
                viewport={{once:true}}
                src="https://i.ibb.co/RTjR6yM/modern-residential-building.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-xl lg:text-3xl font-bold">Introduction:</h1>
                <p className="py-6 text-lg lg:text-xl">Welcome to Harmony Haven Estates where modern living meets tranquility. As the proud owner of this exclusive apartment complex, I invite you to experience unmatched comfort and sophistication. Nestled in <b>Gulsan Dhaka</b> , our residences offer a perfect blend of luxury amenities, scenic views, and a community-focused environment. Welcome home to Serenity Heights.</p>
                </div>
            </div>
            </div>
            </div>


            <div>
            <div className="hero  max-w-7xl mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <motion.img
                variants={fadeinAnimate}
                initial='initial'
                whileInView='animate'
                transition={{ duration: 1 }}
                viewport={{once:true}}
                src="https://i.ibb.co/RTjR6yM/modern-residential-building.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-xl lg:text-3xl font-bold">Introduction:</h1>
                <p className="py-6 text-lg lg:text-xl">Welcome to Harmony Haven Estates where modern living meets tranquility. As the proud owner of this exclusive apartment complex, I invite you to experience unmatched comfort and sophistication. Nestled in <b>Gulsan Dhaka</b> , our residences offer a perfect blend of luxury amenities, scenic views, and a community-focused environment. Welcome home to Serenity Heights.</p>
                </div>
            </div>
            </div>
            </div>


            <div>
            <div className="hero  max-w-7xl mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                variants={fadeinAnimate}
                initial='initial'
                whileInView='animate'
                transition={{ duration: 1 }}
                viewport={{once:true}}
                 src="https://i.ibb.co/RTjR6yM/modern-residential-building.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-xl lg:text-3xl font-bold">Introduction:</h1>
                <p className="py-6 text-lg lg:text-xl">Welcome to Harmony Haven Estates where modern living meets tranquility. As the proud owner of this exclusive apartment complex, I invite you to experience unmatched comfort and sophistication. Nestled in <b>Gulsan Dhaka</b> , our residences offer a perfect blend of luxury amenities, scenic views, and a community-focused environment. Welcome home to Serenity Heights.</p>
                </div>
            </div>
            </div>
            </div>


            <div>
            <div className="hero  max-w-7xl mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <motion.img
                variants={fadeinAnimate}
                initial='initial'
                whileInView='animate'
                transition={{ duration: 1 }}
                viewport={{once:true}}
                src="https://i.ibb.co/RTjR6yM/modern-residential-building.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-xl lg:text-3xl font-bold">Introduction:</h1>
                <p className="py-6 text-lg lg:text-xl">Welcome to Harmony Haven Estates where modern living meets tranquility. As the proud owner of this exclusive apartment complex, I invite you to experience unmatched comfort and sophistication. Nestled in <b>Gulsan Dhaka</b> , our residences offer a perfect blend of luxury amenities, scenic views, and a community-focused environment. Welcome home to Serenity Heights.</p>
                </div>
            </div>
            </div>
            </div>

            
        </div>
    );
};

export default About;