import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion";

//functional component
const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div //motion.div is a part of the framer-motion library, which is used to animate elements.
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div
                    options={{
                        max: 45,  //Specifies the maximum tilt angle
                        scale: 1, //card remains the same size when tilted
                        speed: 450 //450 milliseconds to complete the tilt transition.
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img
                        src={icon}
                        alt='web-development'
                        className='w-16 h-16 object-contain'
                    />
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>

                </div>

            </motion.div>
        </Tilt>
    )

}
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}
                >Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Hey, I’m Reva! Yes, I know my name’s as unique as my passion for technology and creativity! I’m a developer and 3D enthusiast, blending technical skills with artistic vision to craft innovative and engaging digital experiences.
                With expertise in React, Node.js, C++, and DSA, I thrive on exploring the fascinating world of 3D design. When I’m not coding, you’ll find me enjoying time with friends or getting lost in my favorite comfort series.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

//use this export for hoc(higher order component)
export default SectionWrapper(About, "about");