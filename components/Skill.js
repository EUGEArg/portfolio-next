import styles from '../styles/Skill.module.css'
import { BsFillEmojiWinkFill, BsCodeSlash } from "react-icons/bs"
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGithub, SiNetlify, SiTailwindcss, SiBootstrap, SiNextdotjs, SiNodedotjs, SiMongodb, SiStrapi, SiMysql, SiHeroku, SiVercel } from "react-icons/si"

const Skill = () => {

    const fontStyles = {
        color: '#f33974',
        fontSize: '6rem',
        borderRadius: '2px',
        padding: '3rem',
        border: '.1rem solid #f33974'
    }

    // const iconStyles = {
    //     fontSize: '2.4rem',
    //     margin: '1rem 0.6rem',
    //     cursor:'pointer'
    // }
    return (
        <main className={styles.skills} id='skills'>
            <div className={styles.container}>
                <h2 className='title'>mis <span>habilidades</span></h2>
                <div className={styles.card}>
                    <div className={styles.contenedor}>
                        <BsFillEmojiWinkFill style={fontStyles} />
                        <h3 className={styles.title}>soft-skills</h3>
                        <ul className={styles.text}>
                            <li>Creatividad</li>
                            <li>Comunicación</li>
                            <li>Trabajo en equipo </li>
                            <li>Manejo del tiempo</li>
                            <li>Organización</li>
                            <li>Adaptabilidad</li>
                            <li>Habilidades interpersonales</li>
                        </ul>
                    </div>
                    <div className={styles.contenedor}>
                        <BsCodeSlash style={fontStyles} />
                        <h3 className={styles.title}>hard-skills</h3>
                        <div className={styles.content}>
                            <div className={styles.hard}>
                                <SiHtml5 className={styles.icon} />
                                <p className={styles.hover}>Html</p>
                            </div>
                            <div className={styles.hard}>
                                <SiCss3 className={styles.icon} />
                                <p className={styles.hover}>CSS</p>
                            </div>
                            <div className={styles.hard}>
                                <SiJavascript className={styles.icon} />
                                <p className={styles.hover}>JavaScript</p>
                            </div>


                            <div className={styles.hard}>
                                <SiReact className={styles.icon} />
                                <p className={styles.hover}>React</p>
                            </div>
                            <div className={styles.hard}>
                                <SiNextdotjs className={styles.icon} />
                                <p className={styles.hover}>Next.js</p>
                            </div>
                            <div className={styles.hard}>
                                <SiTailwindcss className={styles.icon} />
                                <p className={styles.hover}>TailwindCSS</p>
                            </div>
                            <div className={styles.hard}>
                                <SiBootstrap className={styles.icon} />
                                <p className={styles.hover}>Bootstrap</p>
                            </div>
                            <div className={styles.hard}>
                                <SiHeroku className={styles.icon} />
                                <p className={styles.hover}>Heroku</p>
                            </div>
                            <div className={styles.hard}>
                                <SiNetlify className={styles.icon} />
                                <p className={styles.hover}>Netlify</p>
                            </div>
                            <div className={styles.hard}>
                                <SiVercel className={styles.icon} />
                                <p className={styles.hover}>Vercel</p>
                            </div>
                            <div className={styles.hard}>
                                <SiGithub className={styles.icon} />
                                <p className={styles.hover}>Github</p>
                            </div>
                            <div className={styles.hard}>
                                <SiNodedotjs className={styles.icon} />
                                <p className={styles.hover}>Node.js</p>
                            </div>
                            <div className={styles.hard}>
                                <SiMongodb className={styles.icon} />
                                <p className={styles.hover}>MongoDB</p>
                            </div>
                            <div className={styles.hard}>
                                <SiMysql className={styles.icon} />
                                <p className={styles.hover}>Mysql</p>
                            </div>
                            <div className={styles.hard}>
                                <SiStrapi className={styles.icon} />
                                <p className={styles.hover}>Strapi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Skill;
