import { features } from "../constants";
import styles, { layout } from "../style.js";
import Button from "./Button";
import { motion } from "framer-motion"



const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}>
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
  </motion.div>
);

const Business = () =>  (
  <section id="Empresa" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Anuncie com inteligência, <br className="sm:block hidden" /> venda com excelência.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      A FluencyTech é uma empresa de marketing e tecnologia que oferece soluções personalizadas para empresas de todos os tamanhos, se você quer impulsionar o seu negócio e se destacar da concorrência, faça uma pesquisa conosco e descubra como podemos ajudá-lo a alcançar seus objetivos de negócios!
      </p>

      <Button  styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;