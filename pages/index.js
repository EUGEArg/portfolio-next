import Layout from '../components/Layout'
import Header from '../components/Header'
// import Navegacion from '../components/Navegacion'
import Skill from '../components/Skill'
import Informacion from '../components/Informacion'
import Projects from '../components/Projects'
import Formulario from '../components/Formulario'



export default function Home() {
	return (
		<>
			<Layout>
				{/* <Navegacion /> */}
			</Layout>	
			<Header />		
			<main>	
			
				<div>
					<Skill />
				</div>
				<div>
					<Informacion />
				</div>
				<div>
					<Projects />
				</div>
				<div>
					<Formulario />
				</div>
			</main>
		</>

	)
}
