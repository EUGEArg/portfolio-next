import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

const Card = () => {


    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <div className={styles.card}>
                    <Link href='https://nexusstudio.up.railway.app/' >
                        <a target='_blank'>
                            <Image width={270} height={270}  priority src="/projects/nexus.png" alt="Juego del Ahorcado" />
                            <div className={styles.text}>
                                <h3>Web Site: NEXUS STUDIO</h3>
                                <div className={styles.lenguaje}>
                                    <p>Next.js</p>
                                </div>
                                
                            </div>                           
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://guitarla-next-699ceyhp5-eugearg.vercel.app/'>
                        <a target='_blank'>
                            <Image width={270} height={270}  priority src="/projects/laguitar.png" alt="Sitio de Venta de Guitarras" />
                            <div className={styles.text}>
                                <h3>Web Site: LAGUITAR</h3>
                                <div className={styles.lenguaje}>
                                <p>Next.js</p>
                                <p>Strapi</p>
                                <p>MongoDB</p>
                                </div>
                            </div>                           
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://starlit-tartufo-cb3262.netlify.app/'>
                        <a target='_blank'>
                            <Image width={270} height={270}  priority src="/projects/cripto.png" alt="Conversor de Criptomonedas" />
                            <div className={styles.text}>
                                <h3>Cotizador Criptomonedas</h3>
                                <div className={styles.lenguaje}>
                                    <p>React</p>
                                    <p>Styled Components</p>
                                </div>                            
                            </div>                            
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://sparkly-puppy-279b1e.netlify.app/' >
                        <a target='_blank'>
                            <Image width={270} height={270}  priority src="/projects/gastos.png" alt="Controlador de Gastos" />
                            <div className={styles.text}>
                                <h3>Planificador de Gastos</h3>
                                <div  className={styles.lenguaje}>
                                    <p>React</p>
                                </div>
                            </div>                           
                        </a>
                    </Link>
                </div>                
                <div className={styles.card}>
                    <Link href='https://eugearg.github.io/to-do-tasks/' >
                        <a target='_blank'>
                            <Image width={270} height={270}  priority src="/projects/todoapp.jpg" alt="Juego del Ahorcado" />
                            <div className={styles.text}>
                                <h3>TODO app</h3>
                                <div className={styles.lenguaje}>
                                    <p>Javascript</p>
                                    <p>html</p>
                                    <p>css</p>
                                </div>
                            </div>                            
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://eugearg.github.io/Ahorcado/' >
                        <a target='_blank'>
                            <Image width={270} height={270} priority src="/projects/ahorcado.jpg" alt="Juego del Ahorcado" />
                            <div className={styles.text}>
                                <h3>Juego del Ahorcado</h3>
                                <div className={styles.lenguaje}>
                                    <p>Javascript</p>
                                    <p>html</p>
                                    <p>css</p>
                                </div>                                
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card