import Layout from '../components/Layout'
import Skill from '../components/Skill'
import Informacion from '../components/Informacion'
import Projects from '../components/Projects'
import Formulario from '../components/Formulario'



export default function Home() {
	return (

		<main>
			<Layout/>
			
			<div>
				<Skill/>
			</div>

			<div>
				<Informacion/>
			</div>
			
			<div>
				<Projects/>
			</div>
			<div className='contacto'>
				<Formulario/>
			</div>
		</main>
	)
}
