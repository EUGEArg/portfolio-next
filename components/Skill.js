import styles from '../styles/Skill.module.css'
import { BsFillEmojiWinkFill, BsCodeSlash } from "react-icons/bs"
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGithub, SiNetlify, SiTailwindcss, SiBootstrap, SiNextdotjs, SiNodedotjs, SiMongodb, SiStrapi, SiMysql, SiHeroku, SiVercel} from "react-icons/si"

const Skill = () => {
    const fontStyles = {
        color: '#f33974',
        fontSize: '6rem',
        borderRadius: '2px',
        padding: '3rem',
        border: '.1rem solid #f33974'
    }

    const iconStyles = {
        fontSize: '2.4rem',
        margin: '1rem 0.6rem',
    }
    return (
        <main className={styles.skills} id='skills'>
            <div className={styles.container}>
                <h2 className='title'>mi <span>skills</span></h2>
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
                            <div>
                                <SiHtml5 style={iconStyles} />
                                <SiCss3 style={iconStyles} />
                                <SiJavascript style={iconStyles} />                              
                            </div>
                            <div>
                                <SiReact style={iconStyles} />
                                <SiNextdotjs style={iconStyles} />                               
                                <SiBootstrap style={iconStyles} />
                                <SiTailwindcss style={iconStyles} />                               
                            </div>
                            <div>                            
                            <SiHeroku style={iconStyles} />
                            <SiNetlify style={iconStyles}/>
                            <SiVercel style={iconStyles} />
                            <SiGithub style={iconStyles} />
                            </div>
                            <div>
                                <SiNodedotjs style={iconStyles} /> 
                                <SiMongodb style={iconStyles}/>
                                <SiMysql style={iconStyles} />
                                <SiStrapi style={iconStyles} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Skill;
