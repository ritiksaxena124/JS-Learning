/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Card({reference}) {
    console.log(reference)
    return (
        <>
            <motion.div drag dragConstraints={{left: 0, right: 1150, top: 0, bottom: 400}} whileDrag={{ scale: 1.1 }} className=" relative h-100 bg-zinc-700 w-64 rounded-[32px] text-white overflow-hidden h-fit">
                <div className="p-4">
                    <div className="py-[10px] px-[20px] mb-4 rounded-full bg-zinc-600 w-fit">
                        i
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam enim incidunt, officia consectetur earum voluptatum.</p>
                </div>
                <div className=" bottom-0 left-0 right-0 text-center p-2 bg-blue-900">
                    Progress
                </div>
            </motion.div>
        </>
    )
}

export default Card