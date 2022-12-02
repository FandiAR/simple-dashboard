import {Result, Button} from '@components';
import {colors} from '@styles/colors';
import Router from 'next/router';
import React from 'react';

const NotFoundContainer = () => {
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited is under maintenance or does not exist."
			extra={
				<Button
					text="Back to Home"
					style={{background: colors.blueBorder, color: colors.primary.white}}
					onClick={() => Router.push('/')}
				/>
			}
		/>
	);
};
export default NotFoundContainer;
