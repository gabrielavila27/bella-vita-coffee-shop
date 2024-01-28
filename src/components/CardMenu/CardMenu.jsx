import styles from './CardMenu.module.css'

function CardMenu({image, title, text, alt}){
    return(
        <div className={styles.cardItem}>

            <div className={styles.divImage}>

                <img className={styles.image} src={image} alt={alt}/>

            </div>

            <div className={styles.divTxtCard}>

                <h3 className={styles.titleCard}>{title}</h3>

                <p className={styles.txtCard}>{text}</p>

            </div>
        </div>
    )
}
export default CardMenu