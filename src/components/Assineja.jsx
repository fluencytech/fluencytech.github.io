import React from 'react'
import styles from '../style.js'
import { arrowUp } from '../assets'

const Assineja = () => {
  return (
    <a href='../Routes/Planos.js'>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-violet-700 p-[2px] cursor-pointer mr-6`}>
    
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>

<div className={`${styles.flexStart} flex-row`}>
<p className=" font-poppins font-medium text-[18px] leading-[23px]">
<span className=" text-gradient">
Assine
</span>
</p>
<img src={arrowUp} alt="arrow"
  className="w-[23px] h-[23px] object-contain"
/>

</div>

 <p className="font-poppins font-medium text-[18px] leading-[23px]">
<span
className="text-gradient">Já

</span>

 </p>

    </div>
    </div>
    </a>
  )
}

export default Assineja