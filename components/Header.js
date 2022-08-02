import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import { SiLogmein, SiInstagram, SiGmail, SiTelegram } from "react-icons/si"
import { useTypewriter} from 'react-simple-typewriter'

const Header = () => {
	const router = useRouter()
	const currentRoute = router.pathname;

	const fontStyles = {
		fontSize: '1.6rem',
		margin: '.6rem',
	}

	const { text } = useTypewriter({
		words: ['eugenia', 'front end developer'],
		loop: [0],
	})

	return (
		<header className={styles.header}>
			<div className={styles.imagen}>
			<div  className={styles.border1}></div>
				<div className={styles.border2}></div>
				<a>
				<Image  src="/img/img-welcome.jpg" alt="Imagen" width={300} height={300} priority />				
				</a>
				
			</div>						
			
			<div className={styles.text}>
				<h2>Hola! Yo soy</h2>
				<div className={styles.typewriter}>
					<span>[</span>
					<span > {text} </span>
					<span>]</span>
				</div>
				
				<Link href=''><p>Estoy disponible para un trabajo freelance. Contáctame</p></Link>
				
			</div>
			<div>
				<div className={styles.links}>
					<Link href="https://www.linkedin.com/in/eugenia-rivarossa/">
						<a target='_blank'>
							<SiLogmein style={fontStyles} />
						</a>
					</Link>
					<Link href="https://www.instagram.com/nexus_studio.ok/">
						<a target='_blank'>
							<SiInstagram style={fontStyles} />
						</a>
					</Link>
					<Link href="mailto:eugeniarivarossa@gmail.com">
						<a target='_blank'>
							<SiGmail style={fontStyles} />
						</a>
					</Link>
					<Link href="https://t.me/eugeArg">
						<a target='_blank'>
							<SiTelegram style={fontStyles} />
						</a>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header