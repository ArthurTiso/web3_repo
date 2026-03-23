"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Atividades() {

  const [corTela, setCorTela] = useState("null");

  return (
    <div className={styles.container}>

      <div
        className={styles.tela}
        style={{ backgroundColor: corTela }}
      ></div>

      <div className={styles.botoes}>

        <button
          className={`${styles.botao} ${styles.azul}`}
          onClick={() => setCorTela("blue")}
        ></button>

        <button
          className={`${styles.botao} ${styles.vermelho}`}
          onClick={() => setCorTela("red")}
        ></button>

        <button
          className={`${styles.botao} ${styles.verde}`}
          onClick={() => setCorTela("green")}
        ></button>

        <button
          className={`${styles.botao} ${styles.amarelo}`}
          onClick={() => setCorTela("yellow")}
        ></button>

      </div>

    </div>
  );
}