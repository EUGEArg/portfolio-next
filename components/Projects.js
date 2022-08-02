import styles from '../styles/Projects.module.css'
import Link from 'next/link'
import Card from './Card'

import { SiGithub } from "react-icons/si"

const Projects = () => {

	const fontStyles = {
		fontSize: '2rem',
		margin: '0 1.2rem'
	}
	return (
		
		<main className={styles.section}>
			<div className={styles.contain}>
			<h2 className='title'>Mis últimos <span>proyectos</span></h2>
			<div>
				<Card/>
			</div>
			<div className={styles.content}>
				<h3>Repositorios en</h3>
				<Link href="https://github.com/EUGEArg">
					<a target='_blank'>
						<SiGithub style={fontStyles} />
					</a>
				</Link>
			</div>
			</div>
		</main>
	)
}

export default Projects