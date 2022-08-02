import React, { useState } from "react";
import styles from '../styles/Formulario.module.css';

const Formulario = () => {
	const [query, setQuery] = useState({
		nombre: '',
		email: '',
		mensaje: ''
	});

	// Update inputs value
	const handleParam = () => (e) => {
		const nombre = e.target.nombre;
		const email = e.target.email;
		const mensaje = e.target.mensaje;
		const value = e.target.value;
		setQuery((prevState) => ({
			...prevState,
			[nombre]: value,
			[email]: value,
			[mensaje]: value
		}));
	};

	// Form Submit function
	const formSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		Object.entries(query).forEach(([key, value]) => {
			formData.append(key, value);
		});
		fetch("https://getform.io/f/{unique-endpoint-generated-on-step-1}", {
			method: "POST",
			body: formData
		}).then(() => setQuery({ nombre: "", email: "", mensaje: "" }));
	};
	
	return (		
			<main className={styles.contain}>	
			<div className={styles.container}>
			<div className={styles.textoContacto}>
					<h2 className='title'>para contactar <span>conmigo</span></h2>
					<p>Si tienes alguna sugerencia, quieres darme feedback sobre mis proyectos o simplemente decir “Hola!” puedes completar el siguiente formulario de contacto.</p>			
				</div>				
				<form action="https://getform.io/f/68d4c2fd-2bdb-433a-8dfb-6951d3c42ef4" method="POST" >	
					<div className={styles.form}>
					<div className={styles.formulario}>
						<input type="text" name="nombre" placeholder="Nombre" required />
					</div>
					<div className={styles.formulario}>
						<input type="email" name="email" placeholder="nombre@dominio.com" required />
					</div>
					<div className={styles.formulario}>
						<textarea type="text" name="message" placeholder="Mensaje" required/>
					</div>
					<div className={styles.submit}>
					<input
						type='submit'
						value='Enviar'/>
					</div>
					</div>
				</form>
					
			</div>
				
					
			</main>	
	);
}

export default Formulario