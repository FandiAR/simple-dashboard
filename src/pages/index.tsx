import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomeContainer = dynamic(() => import('@containers/Home'));

const HomePage = () => (
	<>
		<Head>
			<title>Simple Dashboard | Home</title>
		</Head>
		<HomeContainer />
	</>
);
export default HomePage;
