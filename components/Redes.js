import React from 'react'
import Link from 'next/link'
import styles from '../styles/Redes.module.css'
import {SiLogmein, SiInstagram, SiGmail, SiTelegram} from 'react-icons/si'


const Redes = () => {
    const fontStyles = {
        fontSize: '2rem',
        margin: '0 1.2rem'
    }
    return (
        <main className={styles.redes}>
            <div className={styles.links}>
                <Link href="https://www.linkedin.com/in/eugenia-rivarossa/">
                        <a target='_blank'>
                        <SiLogmein style={fontStyles}/>
                        </a>
                </Link>
                <Link href="https://www.instagram.com/eugearg_frontend_dev/">
                        <a target='_blank'>
                        <SiInstagram style={fontStyles}/>
                        </a>
                </Link>
                <Link href="mailto:eugeniarivarossa@gmail.com">
                        <a target='_blank'>
                        <SiGmail style={fontStyles}/>
                        </a>
                </Link>
                <Link href="https://t.me/eugeArg">
                        <a target='_blank'>
                        <SiTelegram style={fontStyles}/>
                        </a>
                </Link>                
            </div>
            
        </main>
    )  
}

export default Redes