import styles from './Header.module.css' 
import { useState} from 'react'
import { HiMenu } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";

function Header(){

    const[isActive,setIsActive] = useState(false);

    const showSideBar = () => {
        setIsActive((active) => !active)
        console.log(isActive)
    }

    const closeMobile = () => {
        if (window.innerWidth <= 900) {setIsActive(!isActive)
        console.log(isActive)}
    }

    return(
        <header className={styles.header} id='header'>

            <img src='../src/assets/images/bellavita_logo.png' className={styles.logo}></img>

            <nav>
                <ul id={styles.menu} className={isActive ? styles.sideMenu : ''} >
                    <li>{isActive ?  <button onClick={closeMobile}> <FaWindowClose className={styles.closeBar}/> </button> : <button onClick={showSideBar}> <HiMenu className={styles.menuBar}/> </button>}</li>
                    <li className={styles.listItem} onClick={closeMobile}><a href='#sobre'>Sobre</a></li>
                    <li className={styles.listItem} onClick={closeMobile}><a href='#work'>Work</a></li>
                    <li className={styles.listItem} onClick={closeMobile}><a href='#menu'>Menu</a></li>
                    <li className={styles.listItem} onClick={closeMobile}><a href='#footer'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header