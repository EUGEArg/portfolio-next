import Link from 'next/link'
import styles from '../styles/Informacion.module.css'
const Informacion = () => {
    return (
        <main className={styles.about}  id='sobremi'>
            <div className={styles.container}>
            <div className={styles.info}>
                <h2 className='title'>un poco sobre <span>mi</span></h2>
                <h1 className={styles.title}>front end developer</h1>
                <p>Soy de Pergamino, Buenos Aires. <br/>Me especializo en la creación de sitios web.</p>
                <p>Soy una persona dinámica y curiosa por lo cual estoy en constante aprendizaje y perfeccionamiento de las habilidades adquiridas.</p>
                <p>Estoy buscando una oportunidad como desarrolladora frontend, por ello, si considerás que mi perfil es acorde al que estás buscando no dudes en ponerte en contacto conmigo.</p>
                
                <Link href='/pdf/C.V Maria Eugenia Rivarossa.pdf'>
                    <a target='_blank'>
                        <h3>C.V.pdf</h3>
                    </a>                
                </Link>
            </div>

            </div>
            
        </main>
    );
}

export default Informacion;
