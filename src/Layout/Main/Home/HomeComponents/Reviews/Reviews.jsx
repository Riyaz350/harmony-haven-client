import StarRatings from "react-star-ratings";
import SubTitle from "../../../../../Hooks/SubTitle";
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';



const Reviews = () => {


  const testimonialsData = [
    {
      review: "Excellent service and amenities. I had a wonderful experience during my stay at this place. The staff was friendly, the facilities were top-notch, and the overall service exceeded my expectations. I highly recommend this place to anyone looking for a comfortable and enjoyable accommodation!",
      rating: 5,
      imgUrl: "https://i.ibb.co/1mYrm2R/wepik-export-20231007082209-QOD8.png",
      name: "John Smith",
    },
    {
      review: "Fantastic location and spacious apartments. I spent an amazing time in these apartments. The location is superb, close to all the attractions, and the apartments themselves are spacious and well-maintained. I'm very satisfied with my stay and would definitely choose this place again for future visits.",
      rating: 4.5,
      imgUrl: "https://i.ibb.co/nnpmQqQ/wepik-export-20231007082343bbh-O.png",
      name: "Json Burelo",
    },
    {
      review: "Top-notch security and friendly staff. Living in this place has been a fantastic experience. The security measures are impressive, and the staff is always ready to assist with a smile. It truly feels like a great place to live, and I highly recommend it to anyone looking for a secure and welcoming environment.",
      rating: 5,
      imgUrl: "https://i.ibb.co/GFxVjDJ/wepik-export-20231007082450-QXcf.png",
      name: "Ron Weasly",
    },
    {
      review: "Modern amenities and convenient location. My stay in these apartments was comfortable and enjoyable. The modern amenities provided made my daily life hassle-free, and the convenient location made it easy for me to access everything I needed. I give it a solid 4 and would definitely consider staying here again.",
      rating: 4,
      imgUrl: "https://i.ibb.co/nn3vVhX/wepik-export-20231007081709-REix.png",
      name: "Aron Smith",
    },
  ];
  
  
    return (
        <div   className="  lg:my-10">

            <SubTitle title="Testimonials"></SubTitle>
            <div style={{ backgroundImage: 'url("https://i.ibb.co/hf4FWfX/image.png")' }} className="lg:h-[400px] flex lg:flex-row flex-col items-center my-10 overflow-hidden lg:px-20">
              <div className="text-white lg:text-start text-center space-y-5">
                <h1 className="text-3xl font-medium">Reviews from Happy Residents</h1>
                <p className=" md:w-1/2 p-5 mx-auto lg:mx-0 ">In our Testimonials Section, discover the authentic experiences of our delighted residents. Uncover why they love calling our apartments home – firsthand accounts of comfort, convenience, and community.</p>
              </div>

            <Marquee  speed={100} pauseOnHover={true} className="max-w-4xl lg:flex  mx-auto p-10 my-2 ">
              {testimonialsData.map((testimonial, index) => (
                <motion.div initial={{scale:1}} whileHover={{scale:1.1}} transition={{duration:.2}} key={index}  className="shadow-lg max-w-md bg-white text-black p-2 mx-5 h-[300px] flex flex-col rounded-xl justify-center text-center"> 
                  <img className="w-[100px] rounded-lg mx-auto" src={testimonial.imgUrl} alt="" />
                  <h1 className="text-xl font-bold lg:text-xl">{testimonial.name}</h1>
                  <StarRatings rating={testimonial.rating} starRatedColor='#e94f37' starDimension="15px" starSpacing="5px" />
                  <h1 className="text-sm lg:text-sm font-semibold">{testimonial.review}</h1>
                </motion.div>
              ))}
            </Marquee>
            </div>
            
        </div>
    );
};

export default Reviews;