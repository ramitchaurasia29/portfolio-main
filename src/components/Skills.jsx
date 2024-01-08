import { useEffect } from 'react'
import Heading from './Heading'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import skills from '../content/skills';
import Projects from './Projects';
import Navbar from './Navbar';

function Skills() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    // const []=useInView

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <>
            <Navbar></Navbar>
            <div id="" className='backg h-full'>
                <Heading firstWord="Skills" secondWord="&Tools" />

                <motion.div
                    className="flex flex-wrap justify-center"
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >

                    {skills.map((skill, index) => (
                        <motion.div key={index} variants={skillVariants}>
                            <div className="flex justify-center h-36 w-72 m-8 bg-gray-600 p-4 rounded-lg  shadows">
                                <img src={`/images/skills/${skill}`} alt="" className="w-24 hover:scale-125 transition ease-in-out duration-300" />
                            </div>
                        </motion.div>
                    ))}

                </motion.div>

            </div>
            <Projects />
        </>
    )
}

export default Skills