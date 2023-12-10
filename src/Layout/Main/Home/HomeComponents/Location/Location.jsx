import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LocationMap from "./LocationMap";
import LocationDirection from "./LocationDirection";
import SubTitle from "../../../../../Hooks/SubTitle";

const Location = () => {

    const allTabs = [
        {id:'2f7c7', icon: "https://i.ibb.co/VB39pdm/Animation-1700830758986.gif",name:'Map', label: <LocationMap/> },
        {id:'a62b6', icon: "https://i.ibb.co/b3y7k27/Animation-1700830906341.gif",name:'Directions', label: <LocationDirection/> },
    ]
    const [selectedTab, setSelectedTab] = useState(allTabs[0]);



    return (
        <div className="window  max-w-5xl mx-auto  text-center text-black font-bold my-10">
                        <SubTitle  title='Directions' subTitle='Find Us'/>

        <nav>
          <ul className="lg:grid grid-cols-2 text-white">
            {allTabs.map((item) => (
              <li
                key={item.id}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                <div className=" bg-[#00a9a5] rounded-xl w-1/2 mx-auto mt-10 p-2 cursor-pointer flex gap-2 items-center justify-center">
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
          <AnimatePresence mode='wait' >
            <motion.div
            className='bg-[#00a9a5] text-white font-semibold my-2'
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
          </AnimatePresence>
        </main>
      </div>
    );
};

export default Location;