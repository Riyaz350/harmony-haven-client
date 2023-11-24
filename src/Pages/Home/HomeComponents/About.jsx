import { motion } from 'framer-motion';
import SubTitle from '../../../Hooks/SubTitle';


const About = () => {

    const fadeinAnimate = {
        initial:{ opacity: 0, y: -200 },
        animate: { opacity: 3, y: 0 } 
    }


    return (

        <div className="flex flex-col gap-10 my-10">
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
                <p className="py-6 text-lg lg:text-xl">Welcome to Harmony Haven Estates where modern living meets tranquility. As the proud owner of this exclusive apartment complex, I invite you to experience unmatched comfort and sophistication. Nestled in <b>Gulshan Dhaka</b> , our residences offer a perfect blend of luxury amenities, scenic views, and a community-focused environment. Welcome home to Serenity Heights.</p>
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
                 src="https://i.ibb.co/PQp6x3p/image.png" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-xl lg:text-3xl font-bold">Cozy Apartments</h1>
                <p className="py-6 text-lg lg:text-xl">Indulge in unparalleled comfort at our apartments. Every detail, from plush interiors to serene surroundings, is meticulously crafted for your well-being. Relax in spacious living areas, unwind on private balconies, and revel in the convenience of a home designed for ultimate comfort and tranquility. Welcome to your haven of coziness.</p>
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
                src="https://i.ibb.co/Vpqf1Zv/scott-webb-yek-GLpc3vro-unsplash.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-xl lg:text-3xl font-bold">Robust Security</h1>
                <p className="py-6 text-lg lg:text-xl">Experience peace of mind in our secure apartment complex. Our top-notch security features, including 24/7 surveillance, secure access points, and well-lit surroundings, prioritize your safety. Your well-being is our utmost concern, providing a worry-free environment for you to call home. Safe, serene, and secure – welcome to your sanctuary.</p>
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
                <h1 className="text-xl lg:text-3xl font-bold">Property Highlights</h1>
                <p className='"py-6 text-lg lg:text-xl"'>Discover luxury living at our apartment complex. Immerse yourself in modern comforts, scenic views, and unparalleled amenities. From spacious floor plans to state-of-the-art fitness centers, our property highlights redefine urban living. Experience elegance, convenience, and a vibrant community at the heart of <b>Gulshan Dhaka</b>. Welcome to the future of residential bliss.</p>
                </div>
            </div>
            </div>
            </div>

            
        </div>
    );
};

export default About;