import Link from "next/link"
import { useRouter } from 'next/router'
import Burguer from './Burguer'
import styles from '../styles/Navegacion.module.css'

const Navegacion = () => {
	const router = useRouter()
	const currentRoute = router.pathname;

	return (
		<div className={styles.menu}>
			<Burguer/>
			<div className={styles.navbar}>
				<nav className={styles.barra}>
					<Link href="/skills"><a className={currentRoute === "/" ? "active" : "non-active"}>skills</a></Link>
					<Link href="/sobremi"><a className={currentRoute === "/" ? "active" : "non-active"}>sobre mi</a></Link>
					<Link href="/proyectos"><a className={currentRoute === "/" ? "active" : "non-active"}>proyectos</a></Link>
					<Link href="/contacto"><a className={currentRoute === "/" ? "active" : "non-active"}>contacto</a></Link>
				</nav>
			</div>
		</div>

	)
}

export default Navegacion