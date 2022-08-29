import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { SiLogmein, SiInstagram, SiGmail, SiTelegram } from "react-icons/si"
import { useTypewriter} from 'react-simple-typewriter'

const Header = () => {

	// const fontStyles = {
	// 	fontSize: '1.6rem',
	// 	margin: '.6rem',
	// }

	const { text } = useTypewriter({
		words: ['eugenia', 'front end developer'],
		loop: [0],
	})

	return (
		<div>			
		<header className={styles.header} id="home">			
			<div className={styles.imagen}>
				<div  className={styles.border1}></div>
				<div className={styles.border2}></div>
				<a>
				<Image  src="/img/img-welcome.jpg" alt="Imagen" width={320} height={320} priority />				
				</a>
				<div className={styles.text}>
					<h3>Hola! Soy</h3>
					<p className={styles.typewriter}>
						<span className={styles.typewriterSpan}> {text} </span>
					</p>				
				</div>		
			</div>
								
			<div className={styles.text}>
			<Link href='#form'><a>Estoy preparada para formar parte de tu equipo. <br/> Contactame</a></Link>		
			</div>
			
			<div>
				<div className={styles.links}>
					<Link href="https://www.linkedin.com/in/eugenia-rivarossa/">
						<a target='_blank'>
							<SiLogmein />
						</a>
					</Link>
					<Link href="mailto:eugeniarivarossa@gmail.com">
						<a target='_blank'>
							<SiGmail />
						</a>
					</Link>
					<Link href="https://t.me/eugeArg">
						<a target='_blank'>
							<SiTelegram  />
						</a>
					</Link>
				</div>
			</div>
		</header>
		</div>
		
	)
}

export default Header