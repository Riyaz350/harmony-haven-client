import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { NavLink } from "react-router-dom";
import '../../../../App.css'
import { motion } from 'framer-motion';

const Slider = () => {

  const fadeInAnimate = {
    initial:{x: '-6%'},
    animate: {x:0 } 
  }
  const fadeDownAnimate = {
    initial:{y: '-80%'},
    animate: {y:0 } 
  }
  const fadeUpAnimate = {
    initial:{y: '80%'},
    animate: {y:0 } 
  }
  const pop = {
    initial:{scale: 0},
    animate: {scale: 1 } 
  }

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
    return (
        <div className="grid grid-cols-5 items-center lg:min-h-screen ">
          <div className="col-span-2">
                <div className="flex flex-col w-full lg:pl-10 justify-center gap-1 lg:gap-5 text-start">
                    <motion.h1 variants={fadeDownAnimate}  initial="initial" animate="animate" transition={{  duration: 1 }} className="lg:text-3xl">Welcome To</motion.h1>
                    <motion.h1 variants={fadeInAnimate} initial="initial" animate="animate" transition={{  duration: 1 }} className="text-2xl lg:text-7xl font-bold">Harmony Haven</motion.h1>
                    <motion.h1 variants={fadeUpAnimate} initial="initial" animate="animate" transition={{  duration: 1 }} >
                    <p className=" text-xs lg:text-3xl font-semibold">Your Future Home is Just a Click Away.</p>
                    </motion.h1>
                </div>
                <motion.div variants={pop} initial="initial" animate="animate" transition={{  duration: 1 }} className="lg:pl-10">
                <NavLink className='mt-2 w-fit lg:mt-5 block p-1 lg:p-5 lg:text-xl text-xs border-2 hover:border-black border-black hover:text-[#e94f37] lg:w-fit btnLandLord text-white ' to='/apartments'>Book Now</NavLink>
                </motion.div>
          </div>
          <div ref={sliderRef} className=" py-14  mx-auto keen-slider max-w-5xl col-span-3">
            <div className=" keen-slider__slide number-slide1">
              <img src='https://i.ibb.co/RTjR6yM/modern-residential-building.jpg' alt="" />
            </div>
            <div className="rounded-xl keen-slider__slide number-slide1">
              <img src='https://i.ibb.co/dBcjbxV/image.png' alt="" />
            </div>
          </div>
        </div>
    );
};

export default Slider;