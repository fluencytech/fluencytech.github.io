import React from 'react';
import styles, { layout } from "../style.js";
import { robot2 } from "../assets";


const Planos = () => (
   
<section id="Planos" className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>

<img src={robot2} alt="billing" className="w-[140%] h-[110%] relative z-[5] ml-15 "/>

<div className=" right-[200px] absolute w-[300%] h-[100%] rounded-full white__gradient2 bottom-3" />
        <div className=" w-[150%] h-[300%] right-20 bottom-20 white__gradient" />
</div>   


<div className={layout.sectionInfo}>

<h2 className={styles.heading2}> Altos níveis serão impossiveis <br className="sm:block hidden">
</br>  sem tecnologia e <span className="text-gradient">AI </span>.</h2>

<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>



</div>
 </section>
  
);

export default Planos;