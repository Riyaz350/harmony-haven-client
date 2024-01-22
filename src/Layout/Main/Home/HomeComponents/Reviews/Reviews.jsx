import { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import SubTitle from "../../../../../Hooks/SubTitle";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import StarRatings from "react-star-ratings";

const Reviews = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
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


    const {user} = useContext(AuthContext)
    return (
        <div className="py-5 max-w-7xl mx-auto border-2 my-10">

            <SubTitle title="Our Residents Reviews"></SubTitle>

            <div ref={sliderRef} className=" py-5 text-center mx-auto keen-slider max-w-5xl col-span-3">
            <div className=" keen-slider__slide number-slide1 flex flex-col gap-5 p-2">
                <h1 className="text-xl lg:text-xl font-semibold">Excellent service and amenities. I highly recommend this place!</h1>
                <StarRatings rating={5} starRatedColor='#e94f37' starDimension="20px" starSpacing="15px"/>
                <img className="w-[100px] rounded-full mx-auto pt-10" src="https://i.ibb.co/1mYrm2R/wepik-export-20231007082209-QOD8.png" alt="" />
                <h1 className="text-xl font-bold lg:text-xl">Jhon Smith</h1>
            </div>
            <div className=" keen-slider__slide number-slide1 flex flex-col gap-5 p-2">
                <h1 className="text-xl lg:text-xl font-semibold">Fantastic location and spacious apartments. Very satisfied with my stay.</h1>
                <StarRatings rating={4.5} starRatedColor='#e94f37' starDimension="20px" starSpacing="15px"/>
                <img className="w-[100px] rounded-full mx-auto pt-10" src="https://i.ibb.co/nnpmQqQ/wepik-export-20231007082343bbh-O.png" alt="" />
                <h1 className="text-xl font-bold lg:text-xl">Json Burelo</h1>
            </div>
            <div className=" keen-slider__slide number-slide1 flex flex-col gap-5 p-2">
                <h1 className="text-xl lg:text-xl font-semibold">Top-notch security and friendly staff. A great place to live!</h1>
                <StarRatings rating={5} starRatedColor='#e94f37' starDimension="20px" starSpacing="15px"/>
                <img className="w-[100px] rounded-full mx-auto pt-10" src="https://i.ibb.co/GFxVjDJ/wepik-export-20231007082450-QXcf.png" alt="" />
                <h1 className="text-xl font-bold lg:text-xl">Ron Weasly</h1>
            </div>
            <div className=" keen-slider__slide number-slide1 flex flex-col gap-5 p-2">
                <h1 className="text-xl lg:text-xl font-semibold">Modern amenities and convenient location. I give it a solid 4!</h1>
                <StarRatings rating={4} starRatedColor='#e94f37' starDimension="20px" starSpacing="15px"/>
                <img className="w-[100px] rounded-full mx-auto pt-10" src="https://i.ibb.co/nn3vVhX/wepik-export-20231007081709-REix.png" alt="" />
                <h1 className="text-xl font-bold lg:text-xl">Aron Smith</h1>
            </div>
            
          </div>

            {/* <div className="flex justify-center">
            {user && 
                <div>
                    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Write a review</button>
                        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                        </dialog> 
                </div>
        }
            </div> */}
        </div>
    );
};

export default Reviews;