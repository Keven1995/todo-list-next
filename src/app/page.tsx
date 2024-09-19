
import styles from "./styles/styles.module.scss";
import Header from "../app/header/header"

export default function Home() {
  return (
    <main>
      <Header/>
      <div>teste</div>
      <div>
        <button className={styles.button}>Adicionar nova tarefa</button>
      </div>
    </main>
  );
}
