import Head from 'next/head'
import Header from './Header'


const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>Portfolio EugeARG - {pagina}</title>
                <meta lang="es" name="description" content="Portfolio Frontend Developer" />
            </Head>

            <Header />

            {children}

        </div>
    )
}

export default Layout