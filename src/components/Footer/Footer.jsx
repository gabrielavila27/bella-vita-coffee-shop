import styles from './Footer.module.css'
import {FaInstagram, FaFacebook, FaXTwitter} from 'react-icons/fa6'

function Footer(){
    return(
        <footer className={styles.footer} id='footer'>

            <div className={styles.divSocialMidia}>

                <h3>Nos acompanhe: </h3>

                <ul>
                    <li className={styles.icons}> <a href='https://www.instagram.com/' rel='external' target='_blank'><FaInstagram/> Instagram</a> </li>
                    <li className={styles.icons}> <a href='https://www.facebook.com/?locale=pt_BR' rel='external' target='_blank'><FaFacebook/> Facebook</a> </li>
                    <li className={styles.icons}> <a href='https://twitter.com/?lang=pt-br' rel='external' target='_blank'><FaXTwitter/> X/Twitter</a> </li>
                </ul>

            </div>

            <div className={styles.divNav}>

                <ul>
                    <li className={styles.navItem}> <a href="#header">Home</a></li>
                    <li className={styles.navItem}> <a href="#sobre"> Sobre</a></li>
                    <li className={styles.navItem}> <a href="#work">Work</a></li>
                    <li className={styles.navItem}> <a href="#menu">Menu</a></li>
                </ul>
            </div>

            <div className={styles.divContato}>

                <h3>Entre em contato:</h3>

                <ul>
                    <li className={styles.contatoItem}>Telefone: (XX)XXXX-XXXX</li>
                    <li className={styles.contatoItem}>Email:bellavita@gmail.com</li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;