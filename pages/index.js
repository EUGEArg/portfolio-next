import Layout from '../components/Layout'
import Header from '../components/Header'
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
				<Skill />	
				<Informacion />
				<Projects />
				<Formulario />
			</main>
		</>
	)
}
