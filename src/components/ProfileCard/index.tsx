import {colors} from '@styles/colors';
import {message} from 'antd';
import styled from 'styled-components';

import {
	Card,
	DownOutlined,
	MoreOutlined,
	Grid,
	Avatar,
	Typography,
	Button,
} from '@components';

const StyledCard = styled(Card)`
	margin: 0 auto !important;
`;

const ProfileCard = () => (
	<Grid item span={4}>
		<Grid justify="space-between" gutter={8}>
			<Grid item span={6}>
				<Avatar
					src="https://joeschmoe.io/api/v1/random"
					size={50}
					alt="User Photo"
					style={{border: `solid 3px ${colors.blueBorder}`}}
				/>
			</Grid>
			<Grid item span={16}>
				<Typography title level={5} text="Fandi A Riyanto" />
				<Typography type="secondary" text="Owner at Utsman Garden" />
			</Grid>
			<Grid
				style={{paddingTop: '15px !important', color: colors.primary.black}}
				item
				span={2}
			>
				<span>
					<DownOutlined />
				</span>
			</Grid>
		</Grid>
		<StyledCard>
			<Grid>
				<Grid item span={22}>
					<Typography title level={5} type="secondary" text="Total balance" />
				</Grid>
				<Grid item>
					<MoreOutlined />
				</Grid>
			</Grid>
			<Typography title level={3} text="Rp 2.580.000.000" />
			<Button
				onClick={() => message.info('Coming soon :-)')}
				text="Top Up"
				style={{
					background: `${colors.darkBlue}`,
					color: colors.primary.white,
					width: '100%',
				}}
			/>
		</StyledCard>
	</Grid>
);
export default ProfileCard;
