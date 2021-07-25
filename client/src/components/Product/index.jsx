import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function Product(props) {
  const data = props.data;
  return (
    
    <div className={styles.infos}>
      <img src={data.img} alt="glasses" />
      <div className={styles.content}>
        <h3 className={styles.title}>
          {data.name}
          <span className={styles.dot}>.</span>
        </h3>
        <p className={styles.text}>{data.desc}</p>
        <div className={styles.btns}>
          <a className={"btn " + styles.btnPrimary} href="#">
            <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />{" "}
            Buy Now
          </a>
          <a className={"btn " + styles.btnWhite} href="#">
            <FontAwesomeIcon className={styles.icon} icon={faInfoCircle} />{" "}
            About It
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
