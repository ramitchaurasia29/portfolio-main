// import Portfolio from "./Portfolio"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";


const Hero = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col  items-center backg h-fit pb-12">
                <div>Portfolio</div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    whileHover={{ scale: 1.3, rotate: 2 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -360,
                        borderRadius: "100%",
                    }}
                    className="pfp"
                >
                    <img className="h-64 w-64 rounded-full" src="./images/hero-image.jpg" alt="" />
                </motion.div>
                <div className="text-white   font-bold text-5xl mt-8" >Who am I?</div>
                <div className="heading font-bold text-6xl mt-8">

                    <Typewriter
                        className="text-teal-400"
                        options={{
                            strings: [
                                "An Aspiring Frontend Developer",
                                "A creative UI designer",
                                "A Student",
                            ],
                            autoStart: true,
                            loop: true,
                        }}

                    />
                </div>
                <div className="mt-8 text-center text-teal-400 text-xl w-3/4 "> Hello everyone👋 My name is ramit and i am passionate Frontend Devoper at ADGITM. 💻  I'm a tech enthusiast exploring the wonders of coding. Familiarity with essential frontend technologies such as HTML, CSS, and JavaScript 🌌As a newcomer, I'm eager to embrace the challenge of turning lines of code into captivating designs. I'm ready to play with the fundamental elements, rearranging them like a puzzle to shape seamless and user-friendly interfaces. Yes, I might be a fresher, but my passion for design is anything but novice. Let's connect and embark on an exciting adventure through the vast universe of technology!</div>
                <p className="text-xl text-white mt-4">Want to see what i am capable of click below </p>
                <div>
                    <Link to="/skills" ><button type="button" className="text-white bg-red-300 hover:bg-red-500 p-2 w-max rounded-lg mt-3">Click here</button></Link >


                </div>


            </div>
        </>
    )
}

export default Hero