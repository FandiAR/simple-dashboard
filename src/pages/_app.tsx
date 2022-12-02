import 'antd/dist/antd.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100vw;
    height: 100vh;
    color: black;
    padding: 0;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

const SimpleDashboard = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<Head>
				<title>Simple Dashboard</title>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};
export default SimpleDashboard;
