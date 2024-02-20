import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LocationMap from "./LocationMap";
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
        geocode:[23.6148078, 90.502026],
        popUp: "We are here"
      }
    ]

    const customIcon = new Icon({
      iconUrl: "https://i.ibb.co/R0hDCND/pin.png",
      iconSize: [38, 38]
    })

    return (
        <div>
          <SubTitle  title='Location' />
          <div className="lg:grid grid-cols-2  max-w-5xl mx-auto  text-center text-black font-bold my-10">

          <div className="flex flex-col items-start  justify-center border-2 rounded-l-lg border-gray-400">
            <div className="flex py-10 text-2xl ml-10">
              <h1>Harmony Haven</h1>
            </div>
            <div className="bg-gray-300 text-lg w-full font-medium py-5 text-start flex justify-between px-20">
              <div>
                <h1>House No:</h1>
                <h1 className="font-bold">38/100</h1>
              </div>
              <div>
                <h1>Area</h1>
                <h1 className="font-bold">Gulshan Avenew</h1>
              </div>
              <div>
                <h1>City</h1>
                <h1 className="font-bold">Dhaka</h1>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 gap-x-20 text-xl px-20 py-10 ">
              <div className="text-start col-span-2">
                <h1>#Local Address</h1>
              </div>
              <div className="text-start">
                <h1>Level</h1>
                <h1 className="font-medium">6</h1>
              </div>
              <div className="text-start">
                <h1>Block</h1>
                <h1 className="font-medium">A</h1>
              </div>
              <div className="text-start">
                <h1>Road</h1>
                <h1 className="font-medium">11</h1>
              </div>
              <div className="text-start">
                <h1>Zone</h1>
                <h1 className="font-medium">Gulshan Ave</h1>
              </div>
              <div className="text-start">
                <h1>City</h1>
                <h1 className="font-medium">Dhaka</h1>
              </div>
              <div className="text-start">
                <h1>Dhaka</h1>
                <h1 className="font-medium">1212</h1>
              </div>
            </div>
          </div>
          <div>
          <nav>
            <ul className="lg:grid  text-white">
              {allTabs.map((item) => (
                <li
                  key={item.id}
                  className={item === selectedTab ? "selected" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  {/* <div className=" bg-[#000000] rounded-xl w-1/3  mx-auto mt-10 p-2 cursor-pointer flex gap-2 items-center justify-center">
                  <img className="w-1/4 " src={item.icon} alt="" />
                  <h1 className="text-xl">{item.name}</h1>
                  </div> */}
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main >

            <MapContainer center={[23.6148078, 90.502026]} zoom={13}>
                  <TileLayer attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {
            markers.map((marker,  index) =>(
              <Marker key={index} position={marker.geocode} icon={customIcon}></Marker>
            ))
          }
            </MapContainer>
          </main>
          </div>
          </div>
        </div>
    );
};

export default Location;