import React from "react";
import styles from "./style.module.css";
import glasses from "./glasses.png";
import writing from "./writing.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons'


function Products() {
    return (
    <div className={styles.products}>
        <div className={styles.product}>
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>Our Impressive Products</h2>
                <hr className={styles.hr} />
                <h3 className={styles.title}>Perspective Glasses<span className={styles.dot}>.</span></h3>
                <p className={styles.text}>
                    Smart glasses based on artificial intelligence that allow the user to read any picture by detecting the text. Perspective
                    Glasses can be used by visually impaired people, and those who struggle to read.
                </p>
                <div>
                    <a className={styles.btnPrimary} href="#"><FontAwesomeIcon className={styles.icon} icon={faShoppingCart} /> Buy Now</a>
                    <a className={styles.btnWhite} href="#"><FontAwesomeIcon className={styles.icon} icon={faInfoCircle} /> About It</a>
                </div>
            </div>
            <img className={styles.productImg} src={glasses} alt="glasses" />
        </div>
        <div className={styles.product1}>
            <img className={styles.productImg1} src={writing} alt="glasses" />
            <div className={styles.content1}>
                <h3 className={styles.title}>Perspective Glasses<span className={styles.dot}>.</span></h3>
                <p className={styles.text}>
                    Smart glasses based on artificial intelligence that allow the user to read any picture by detecting the text. Perspective
                    Glasses can be used by visually impaired people, and those who struggle to read.
                </p>
                <div className="buttons">
                    <a className={styles.btnPrimary} href="#"><FontAwesomeIcon className={styles.icon} icon={faShoppingCart} /> Buy Now</a>
                    <a className={styles.btnWhite} href="#"><FontAwesomeIcon className={styles.icon} icon={faInfoCircle} /> About It</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Products;