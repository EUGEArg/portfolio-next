import Link from 'next/link'
import styles from '../styles/Informacion.module.css'
import { SiAdobeacrobatreader } from "react-icons/si"

const Informacion = () => {
    const fontStyles = {
        fontSize: '1.6rem',
        margin: '.6rem',
    }
    return (
        <main className={styles.about} id='sobremi'>
            <div className={styles.container}>
                <div className={styles.info}>
                    {/* <h2 className='title'>un poco sobre <span>mi</span></h2> */}
                    <h1 className={styles.title}>front end developer</h1>
                    <p>Soy una apasionada de <span>CSS</span> y actualmente estoy desarrollando proyectos en <span>React y Next js</span>.</p>
                    <p>Soy una persona dinámica y curiosa por lo cual estoy en constante aprendizaje y perfeccionamiento de las habilidades adquiridas.</p>
                    <p>Estoy buscando una oportunidad como desarrolladora Front end, por ello, si considerás que mi perfil es acorde al que estás buscando no dudes en ponerte en contacto conmigo!</p>
                    <div className={styles.pdf}>
                        <h3>Mi cv</h3>
                        <Link href='/pdf/C.V Maria Eugenia Rivarossa.pdf'>
                            <a target='_blank'>
                                <SiAdobeacrobatreader style={fontStyles} />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div>    
                <a href="#skills"><div className={styles.arrow}></div></a>
            </div>
        </main>
    );
}

export default Informacion;
