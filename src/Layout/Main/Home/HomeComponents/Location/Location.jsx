import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LocationMap from "./LocationMap";
import LocationDirection from "./LocationDirection";
import SubTitle from "../../../../../Hooks/SubTitle";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import './location.css'
import { Icon } from "leaflet";

const Location = () => {

    const allTabs = [
        {id:'2f7c7', icon: "https://i.ibb.co/VB39pdm/Animation-1700830758986.gif",name:'Map', label: <LocationMap/> },
    ]
    const [selectedTab, setSelectedTab] = useState(allTabs[0]);

    const markers = [
      {
        geocode:[23.970647, 91.106611],
        popUp: "We are here"
      }
    ]

    const customIcon = new Icon({
      iconUrl: "https://i.ibb.co/R0hDCND/pin.png",
      iconSize: [38, 38]
    })

    return (
        <div className="window  max-w-5xl mx-auto  text-center text-black font-bold my-10">
                        <SubTitle  title='Directions' subTitle='Find Us'/>

        <nav>
          <ul className="lg:grid  text-white">
            {allTabs.map((item) => (
              <li
                key={item.id}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                <div className=" bg-[#000000] rounded-xl w-1/3  mx-auto mt-10 p-2 cursor-pointer flex gap-2 items-center justify-center">
                <img className="w-1/4 " src={item.icon} alt="" />
                <h1 className="text-xl">{item.name}</h1>
                </div>
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main >

          <MapContainer center={[23.970647, 91.106611]} zoom={13}>
                <TileLayer
                    attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

        {
          markers.map((marker,  index) =>(
            <Marker key={index} position={marker.geocode} icon={customIcon}></Marker>
          ))
        }
          </MapContainer>

        
          {/* <AnimatePresence mode='wait' >
            <motion.div
            className='bg-[#000000] text-white font-semibold my-2'
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? 
              <div >
                {selectedTab.label}
              </div>
              
              : <div></div>}
            </motion.div>
          </AnimatePresence> */}
        </main>
      </div>
    );
};

export default Location;