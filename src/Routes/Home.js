import React from 'react';
import styles from "../style";
import { Mainpage, Empresa, Servicos, Planos } from "../components";

function Home() {
return(
<div id="MainPage" className="bg-primary w-full overflow-hidden"> 
<div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Mainpage />
      </div>
   </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Servicos />
        <Empresa />
        <Planos />
        
      </div>
    </div>
</div>

  );
}
export default Home;