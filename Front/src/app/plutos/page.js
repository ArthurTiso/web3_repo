import DogCard from "../../components/DogCard";
import styles from "./page.module.css";

export default function Plutos() {
  return (
     <div className={styles.container}>
      <h1>Plutinho Lindo</h1>

      <DogCard
        imagem="/img/plutos/pluto1.jpg"
        legenda="cara de coitado."
      />

      <DogCard
        imagem="/img/plutos/pluto2.jpg"
        legenda="Bobaao"
      />
    </div>
  );
}