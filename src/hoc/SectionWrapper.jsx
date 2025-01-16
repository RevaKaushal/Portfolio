//THIS is HIGH ORDER COMPONENT .which will be applied to every other components 
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} //making cards have spacing from left
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/*scroll pe click krenge toh animate to overview ,
        non breaking sace->This means that if you use &nbsp;, the browser will not break the line at that space, keeping the elements together*/}
        <span className='hash-span' id={idName}> 
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;