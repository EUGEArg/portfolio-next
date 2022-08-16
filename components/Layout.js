import Head from 'next/head'
import Navegacion from './Navegacion'




const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>Eugenia Rivarossa  | Portfolio{pagina}</title>
                <meta lang="es" name="description" content="Portfolio Frontend Developer" />
            </Head>
            <Navegacion />
            {children}

        </div>
    )
}

export default Layout