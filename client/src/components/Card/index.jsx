import styles from './style.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.desc}>
        <div className={styles.name}>
          Brahim <span className={styles.lname}>Elqati</span>
        </div>
        <div className={styles.team}>Developement Team</div>
      </div>
    </div>
  );
}

export default Card;