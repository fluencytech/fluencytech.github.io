import React from 'react';
import styles from "../style";
import { Compra } from "../components"

function Planos() {
return(
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>

<Compra />

      </div>
  </div>

  );
}

export default Planos;