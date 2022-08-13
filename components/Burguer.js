import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'

const Burguer = () => {

	return (
		<div id="outer-container" className='burguer'>
			<Menu
				width={ 280 }>
				<Links />
			</Menu>
		</div>
	)
}


export const Links = () => (
	<>
		<Link href="#home">Home</Link>
		<Link href="#skills">skills</Link>
		<Link href="#sobremi">sobre mi</Link>
		<Link href="#proyectos">proyectos</Link>
		<Link href="#form">contacto</Link>
	</>
)

export default Burguer