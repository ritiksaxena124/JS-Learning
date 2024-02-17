import { motion } from "framer-motion";
const Marrique = () => {
    return (
        <>
        <div data-scroll data-scroll-section data-scroll-speed="0.1" className="text bg-[#004D43] py-20 rounded-tl-2xl rounded-tr-2xl">
            <div className="flex whitespace-nowrap overflow-hidden border-t-2 border-b-2 border-zinc-400">
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity ,ease: "linear", duration: 10}} className="text-[20vw] uppercase font-semibold leading-none pr-10">we are ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity ,ease: "linear", duration: 10}} className="text-[20vw] uppercase font-semibold leading-none pr-10">we are ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{repeat: Infinity ,ease: "linear", duration: 10}} className="text-[20vw] uppercase font-semibold leading-none pr-10">we are ochi</motion.h1>
            </div>
        </div>
        </>
    )
}

export default Marrique;