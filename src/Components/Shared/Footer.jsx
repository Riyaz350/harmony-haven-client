import { FaLocationDot } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdApartment } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import './shared.css'
import ReactFastMarquee from 'react-fast-marquee';


const Footer = () => {
    const images = [
        'https://i.ibb.co/zHFvxGk/78787-1.jpg',
        'https://i.ibb.co/zHFvxGk/78787-1.jpg', 
      ];
    return (
            <div className="relative bg-black lg:bg-transparent overflow-hidden">
                <ReactFastMarquee speed={100} loop={0} className="invisible lg:visible h-100vh  overflow-hidden">
                    {images.map((imageUrl, index) => (
                        <div key={index} className="marquee-item">
                        <img className="w-full h-[50vh] " src={imageUrl} alt={`Image ${index}`} />
                        </div>
                    ))}
                </ReactFastMarquee>

                <div className="absolute mb-10 top-10 z-10 h-full w-full   p-10    justify-between items-center flex lg:flex-row lg:items-start flex-row  overflow-scroll lg:overflow-hidden gap-10  text-white lg:text-xl ">


                <div className="space-y-4 md:w-[300px] bg-white lg:bg-black  bg-opacity-30 p-5 rounded-lg col-span-1">
                    <img className="w-1/3 md:w-2/3 bg-black" src="https://i.ibb.co/BL7SFJf/harmony-haven-high-resolution-logo-transparent-3.png"  alt="" />
                    <p>Harmony Haven</p>
                    <p className="text-sm">Discover seamless living in our top-notch apartments. Elevate your lifestyle; your perfect space awaits. Welcome home.</p>
                    <p>Elevating Comfort Since 1992</p>
                </div> 

                {/* Accordion Start */}


                <div className="block lg:hidden">
                <div className=" collapse collapse-arrow  bg-white text-black">
                    <input type="radio" name="my-accordion-2" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        Pages
                    </div>
                    <div className="collapse-content"> 
                        <p className="flex items-start gap-2"><FaLocationDot className="m-1" />About Us</p>
                        <p className="flex items-center gap-2"><MdPhone className="m-1" /> Contact</p>
                        <p className="flex items-center gap-2"><MdApartment className="m-1"/>Apartments</p>
                        <p className="flex items-center gap-2"><TfiWrite className="m-1"/>Blog</p>

                    </div>
                    </div>
                    <div className="collapse collapse-arrow  bg-white text-black">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        Contact Us
                    </div>
                    <div className="collapse-content"> 
                        <p className="flex items-start gap-2"><FaLocationDot className="m-1" /> House: 38, Block: A, Road:11, <br /> Baridhara Gulshan Ave, Dhaka</p>
                        <p className="flex items-center gap-2"><MdPhone className="m-1" /> +8801717171717 (Whatsapp)</p>
                        <p className="flex items-center gap-2"><CiMail className="m-1"/> harmony@havengmail.com</p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow  bg-white text-black">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        Social  
                    </div>
                    <div className="collapse-content"> 
                        <div className="grid grid-flow-col lg:gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>
                </div>
                </div>

                {/* Accordion end */}
                
                <div className="hidden lg:block space-y-5 my-4 bg-white lg:bg-black bg-opacity-30 p-5 rounded-lg">
                    <h1 className="text-xl font-bold">Pages</h1>
                    <p className="flex items-start gap-2"><FaLocationDot className="m-1" />About Us</p>
                    <p className="flex items-center gap-2"><MdPhone className="m-1" /> Contact</p>
                    <p className="flex items-center gap-2"><MdApartment className="m-1"/>Apartments</p>
                    <p className="flex items-center gap-2"><TfiWrite className="m-1"/>Blog</p>
                </div>


                <div className="hidden lg:block space-y-6 my-4 bg-white lg:bg-black bg-opacity-30 p-5 rounded-lg md:col-span-1 col-span-2">
                    <h1 className="text-xl font-bold">Contact Us</h1>
                    <p className="flex items-start gap-2"><FaLocationDot className="m-1" /> House: 38, Block: A, Road:11, <br /> Baridhara Gulshan Ave, Dhaka</p>
                    <p className="flex items-center gap-2"><MdPhone className="m-1" /> +8801717171717 (Whatsapp)</p>
                    <p className="flex items-center gap-2"><CiMail className="m-1"/> harmony@havengmail.com</p>
                </div>

                
                <div className="hidden lg:block space-y-5 bg-white lg:bg-black bg-opacity-30 p-5 rounded-lg">
                    <header className="text-xl font-bold">Social</header> 
                    <div className="grid grid-flow-col lg:gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
                </div>

            </div>
    );
};

export default Footer;