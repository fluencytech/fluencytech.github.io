import { stats } from '../constants';
import styles from "../style.js";
import { motion } from "framer-motion"

export const MyComponent = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
)
const Servicos = () => (
    <section className={`${styles.flexCenter}
    flex-row flex-wrap sm:mb-20 mb-6`}>
{stats.map((stat)  => ( 
<motion.div
  initial={{ opacity: 0 }}
  transition={{ duration: 0.5, delay: 0.2  }} 
  whileInView={{ opacity: 1 }}
  after={{opacity: 1}}
         key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>

<h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
{stat.value}</h4>

<p className="font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
{stat.title}
</p>

</motion.div>
))}
<motion.div  id="scroll" ></motion.div>
    
    </section>
)

export default Servicos