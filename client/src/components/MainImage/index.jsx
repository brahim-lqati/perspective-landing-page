import styles from "./style.module.css";

function MainImage(props) {
  return (
    <div className={styles.left}>
      <div className={styles.wrapper}>
        <div className={styles.image}></div>
        <div className={styles.background}></div>
      </div>
    </div>
  );
}

export default MainImage;
