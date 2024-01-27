import styles from './Sobre.module.css'

function Sobre(){
    return(
        <section className={styles.sectionSobreCafeteria} id='sobre'>
            <img src="src\assets\images\bellavita_500x500.png" className={styles.image}/>
            
            
            <div className={styles.divTxtSobre}>
                <h2 className={styles.tituloSobre}>Bella Vita Coffee Shop</h2>
                <p className={styles.txtSobre}>Bem-vindo à Cafeteria Bella Vita, o refúgio aconchegante criado em 2023 para os amantes de café 
                que buscam uma experiência única e acolhedora. Na Bella Vita, não oferecemos apenas café; oferecemos uma pausa na agitação diária, 
                um momento de deleite para os apreciadores da boa vida.</p>
            </div>
      
        </section>
    )
}
export default Sobre