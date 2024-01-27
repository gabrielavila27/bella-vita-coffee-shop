import styles from './Work.module.css'

function Work(){
    return(
        <section className={styles.sectionWork} id='work'>
            <div className={styles.divTxtWork}>
                <h2 className={styles.titleWork}>Trabalhe enquanto aprecia a Bella Vita</h2>
                
                <p className={styles.txtWork}>Entendemos a importância da conectividade, por isso, oferecemos um ótimo serviço de Wi-Fi.
                 Seja para uma reunião de trabalho, estudo ou apenas para navegar enquanto desfruta do seu café favorito, garantimos uma 
                 conexão confiável para atender às suas necessidades.
                 Na Cafeteria Bella Vita, buscamos não apenas servir café, mas criar memórias. Seja bem-vindo a um lugar onde a vida é bela e o café é uma celebração diária.</p>
                 
            </div>
            <div className={styles.divImageWork}>
                <img src='src/assets/images/pexels-helena-lopes-887723.jpg' className={styles.imageWork}/>
            </div>
        </section>
    )
}

export default Work;