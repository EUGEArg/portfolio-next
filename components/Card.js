import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

const Card = () => {


    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <div className={styles.card}>
                    <Link href='https://bucolic-dango-69b7a1.netlify.app/' >
                        <a target='_blank'>
                            <Image width={270} height={270} priority src="/projects/uptask.jpg" alt="UpTask - Gestor de Proyectos" />
                            <div className={styles.text}>
                                <h3>Gestor de Proyectos</h3>
                                <div className={styles.lenguaje}>
                                    <p>MERN Stack</p>
                                    <p>Vite - TailwindCCS</p>
                                    <p>Socket.io</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://quioscoappdeployment-production.up.railway.app/' >
                        <a target='_blank'>
                            <Image width={270} height={270} priority src="/projects/quioscoapp.jpg" alt="Quiscoapp- Quiosco de Comida" />
                            <div className={styles.text}>
                                <h3>Quioscoapp</h3>
                                <div className={styles.lenguaje}>
                                    <p>Next.js - TailwindCCS</p>
                                    <p>Prisma</p>
                                    <p>MySQL</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://guitarla-next-699ceyhp5-eugearg.vercel.app/'>
                        <a target='_blank'>
                            <Image width={270} height={270} priority src="/projects/laguitar.jpg" alt="Sitio de Venta de Guitarras" />
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
                            <Image width={270} height={270} priority src="/projects/cripto.jpg" alt="Conversor de Criptomonedas" />
                            <div className={styles.text}>
                                <h3>Cotizador Criptomonedas</h3>
                                <div className={styles.lenguaje}>
                                    <p> Vite</p>
                                    <p>Styled Components</p>
                                    <p>Custom Hooks</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://sparkly-puppy-279b1e.netlify.app/' >
                        <a target='_blank'>
                            <Image width={270} height={270} priority src="/projects/gastos.jpg" alt="Controlador de Gastos" />
                            <div className={styles.text}>
                                <h3>Planificador de Gastos</h3>
                                <div className={styles.lenguaje}>
                                    <p>Vite</p>
                                    <p>CSS</p>
                                    <p>Local Storage</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://delicate-axolotl-d89e72.netlify.app/' >
                        <a target='_blank'>
                            <Image width={270} height={270} priority src="/projects/drinks.jpg" alt="Buscador de Bebidas" />
                            <div className={styles.text}>
                                <h3>Buscador de bebidas</h3>
                                <div className={styles.lenguaje}>
                                    <p>Vite</p>
                                    <p>Context API</p>
                                    <p>React-Bootstrap</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://splendorous-youtiao-e3ba17.netlify.app/' >
                        <a target='_blank'>
                            <Image width={270} height={270} priority src="/projects/seguro.jpg" alt="Buscador de Canciones" />
                            <div className={styles.text}>
                                <h3>Cotizador de Seguros</h3>
                                <div className={styles.lenguaje}>
                                    <p>Vite</p>
                                    <p>TailwindCCS</p>
                                    <p>Context API</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Link href='https://nexusstudio.up.railway.app/' >
                        <a target='_blank'>
                            <Image width={270} height={270} priority src="/projects/nexus.jpg" alt="Sitio Web- NexusStudio" />
                            <div className={styles.text}>
                                <h3>Web Site: NEXUS STUDIO</h3>
                                <div className={styles.lenguaje}>
                                    <p>Next.js</p>
                                    <p>M??dulos CSS</p>
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
                                    <p>Html</p>
                                    <p>CSS</p>
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