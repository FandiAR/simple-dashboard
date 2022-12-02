import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const NotFoundContainer = dynamic(() => import('@containers/NotFound'));

const NotFoundPage = () => {
	return (
		<>
			<Head>
				<title>Simple Dashboard | Page Not Found</title>
			</Head>
			<NotFoundContainer />
		</>
	);
};
export default NotFoundPage;
