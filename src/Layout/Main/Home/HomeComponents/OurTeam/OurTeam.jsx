import SubTitle from "../../../../../Hooks/SubTitle";
import { motion } from 'framer-motion';

const OurTeam = () => {
    const teamStat = [
        {
            name:'Andre Huarez',
            img:'https://i.ibb.co/4P5NTG3/handsome-young-businessman-suit-removebg-preview.png',
            title:"CEO",
            para:"Exemplary leadership, visionary strategy. A remarkable CEO, driving innovation, fostering growth, and inspiring teams with unmatched dedication and charisma."
        },
        {
            name:'Lalo Salamanca',
            img:'https://i.ibb.co/8xZ5yFT/medium-shot-man-posing-studio-1-removebg-preview.png',
            title:"Manager",
            para:"Exemplary leadership, my friend skillfully navigates challenges, fosters teamwork, and consistently exceeds expectations, making an exceptional manager."
        },
        {
            name:'Saul Goodman',
            img:'https://i.ibb.co/4f9dPKm/portrait-male-security-guard-with-uniform-removebg-preview.png',
            title:"Head of security",
            para:"Exemplary leader, my friend ensures top-notch security with strategic planning, diligence, and a commitment to fostering a safe environment."
        },
    ]
    return (
            <div>
                <SubTitle title='Our Team'></SubTitle>
        <div   className="md:grid grid-cols-3 gap-10 mx-auto  p-10">
            {teamStat.map((team, index)=>
                <motion.div viewport={{once:true}} initial={{y:80}} whileInView={{y:0}} whileHover={{scale:1.05, duration:0.1}} transition={{duration:1, delay:0.05 * index}} useInView={{ triggerOnce: true }} key={index} className="border-2 rounded-lg flex flex-col justify-between gap-5 w-4/5 mx-auto bg-white shadow-lg ">
                    <img  className=' w-full rounded-lg bg-orange-300 bg-opacity-30' src={team.img} alt="" />
                    <div className="p-5 lg:p-10 flex flex-col gap-2 justify-between">
                    <h1 className="text-xl font-bold">{team.name}</h1>
                    <h1 className="text-lg">{team.title}</h1>
                    <h1 className="text-base font-semibold">{team.para}</h1>
                    </div>
                </motion.div>
             )}
        </div>
            </div>
    );
};

export default OurTeam;