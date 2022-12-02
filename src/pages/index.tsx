import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomeContainer = dynamic(() => import('@containers/Home'));

const HomePage = () => (
	<>
		<Head>
			<title>Pintar Ventura</title>
		</Head>
		<HomeContainer />
	</>
);
export default HomePage;
