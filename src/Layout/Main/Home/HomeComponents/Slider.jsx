import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const Slider = () => {
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
        <div>
            <div ref={sliderRef} className=" py-28 max-w-7xl mx-auto keen-slider">
      <div className="rounded-xl keen-slider__slide number-slide1"><img src='https://i.ibb.co/RTjR6yM/modern-residential-building.jpg' alt="" /></div>
      <div className="rounded-xl keen-slider__slide number-slide1"><img src='https://i.ibb.co/dBcjbxV/image.png' alt="" /></div>
      
    </div>
        </div>
    );
};

export default Slider;