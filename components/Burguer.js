import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'
import Link from 'next/link'

const Burguer = () => {

	const [isOpen, setIsOpen] = useState(false)

	const handleStateChange = (state) => {
		setIsOpen(state.isOpen)
	}
	const closeMenu = () => {
		setIsOpen(false)
	}
	// const openMenu = () => {
	// 	setIsOpen(true)
	// }

	return (
		<div id="outer-container" className='burguer'>
			<Menu
				width={ 280 }
				isOpen={ isOpen }
				onStateChange={ handleStateChange }
			>
				<Link href="/"><a onClick={() => closeMenu()}>Home</a></Link>
				<Link href="#skills"><a onClick={() => closeMenu()}>skills</a></Link>
				<Link href="#sobremi"><a onClick={() => closeMenu()}>sobre mi</a></Link>
				<Link href="#proyectos"><a onClick={() => closeMenu()}>proyectos</a></Link>
				<Link href="#form"><a onClick={() => closeMenu()}>contacto</a></Link>
			</Menu>
		</div>
	)
}

export default Burguer