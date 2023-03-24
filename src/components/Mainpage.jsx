import React from "react";
import styles from "../style.js";
import { discount, robot } from "../assets";
import Assineja from "./Assineja";


const Mainpage = () => (

<section id="Home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
<img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
<p className={`${styles.paragraph} ml-2`}>
<span className="text-white">20%</span> de retorno no {" "}
<span className="text-white">2 mês</span> em qualquer plano
</p>
</div>

<div className="flex flex-row justify-between items-center w-full">
<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white">

Oferecer <br className="sm:block hidden "
/> {" "}
<span
 className="text-gradient"> Soluções 
</span> {" "}
<br/>

</h1>
<div className="ss:flex hidden md:mr-4 mr-0">

<Assineja />
</div>
</div>

<h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full text-white">
Inovadoras.
</h1>
<p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
Oferecemos soluções personalizadas para empresas de todos os tamanhos, incluindo criação de sites, publicidade online, SEO e gerenciamento de redes sociais.
</p>
</div>

<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

<img src={robot} alt="roboto" className="w-[100%] h-[100%] relative z-[5]"/>

        <div className="absolute z-[1] w-[85%] h-[85%] rounded-full white__gradient3 bottom-40 " />
        <div className="absolute z-[1] w-[55%] h-[55%] right-20 bottom-20 pink__gradient" />
</div>

</section>
)

export default Mainpage
