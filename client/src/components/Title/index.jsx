import styles from "./style.module.css";

function Title(props) {
  return (
    <div className={styles.title}>
      <h2 className={styles.sectionTitle}>{props.title}</h2>
      <hr className={styles.hr} />
    </div>
  );
}

export default Title;
