import {Avatar, Card, Grid, Typography} from '@components';
import {colors} from '@styles/colors';
import styled from 'styled-components';

const MarginTop10px = styled.div`
	margin-top: 10px;
`;

const TopAgents = () => (
	<Card>
		<Typography type="secondary" title level={4} text="Top 5 Agents" />
		<MarginTop10px>
			<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
				<Grid item span={6}>
					<Avatar
						style={{
							marginTop: '40px',
							border: `solid 3px ${colors.blueBorder}`,
						}}
						size={60}
						src="https://joeschmoe.io/api/v1/bakr"
					/>
				</Grid>
				<Grid item span={18}>
					<Typography
						title
						level={4}
						text="Pustaka Abu Bakr"
						style={{color: colors.blueBorder, fontWeight: 'bold'}}
					/>
					<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
						<Grid item span={10}>
							<Typography text="Profit" />
							<br />
							<Typography text="Sales" />
							<br />
							<Typography text="Transaction" />
						</Grid>
						<Grid item span={14}>
							<Typography
								text="Rp 3.700.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="Rp 7.320.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="43 transactions"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</MarginTop10px>
		<MarginTop10px>
			<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
				<Grid item span={6}>
					<Avatar
						style={{
							marginTop: '40px',
							border: `solid 3px ${colors.blueBorder}`,
						}}
						size={60}
						src="https://joeschmoe.io/api/v1/j"
					/>
				</Grid>
				<Grid item span={18}>
					<Typography
						title
						level={4}
						text="Umar Khattab Herbal"
						style={{color: colors.blueBorder, fontWeight: 'bold'}}
					/>
					<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
						<Grid item span={10}>
							<Typography text="Profit" />
							<br />
							<Typography text="Sales" />
							<br />
							<Typography text="Transaction" />
						</Grid>
						<Grid item span={14}>
							<Typography
								text="Rp 3.550.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="Rp 5.230.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="37 transactions"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</MarginTop10px>
		<MarginTop10px>
			<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
				<Grid item span={6}>
					<Avatar
						style={{
							marginTop: '40px',
							border: `solid 3px ${colors.blueBorder}`,
						}}
						size={60}
						src="https://joeschmoe.io/api/v1/h"
					/>
				</Grid>
				<Grid item span={18}>
					<Typography
						title
						level={4}
						text="Utsman Garden"
						style={{color: colors.blueBorder, fontWeight: 'bold'}}
					/>
					<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
						<Grid item span={10}>
							<Typography text="Profit" />
							<br />
							<Typography text="Sales" />
							<br />
							<Typography text="Transaction" />
						</Grid>
						<Grid item span={14}>
							<Typography
								text="Rp 2.860.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="Rp 4.500.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="38 transactions"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</MarginTop10px>
		<MarginTop10px>
			<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
				<Grid item span={6}>
					<Avatar
						style={{
							marginTop: '40px',
							border: `solid 3px ${colors.blueBorder}`,
						}}
						size={60}
						src="https://joeschmoe.io/api/v1/i"
					/>
				</Grid>
				<Grid item span={18}>
					<Typography
						title
						level={4}
						text="Ali Book Store"
						style={{color: colors.blueBorder, fontWeight: 'bold'}}
					/>
					<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
						<Grid item span={10}>
							<Typography text="Profit" />
							<br />
							<Typography text="Sales" />
							<br />
							<Typography text="Transaction" />
						</Grid>
						<Grid item span={14}>
							<Typography
								text="Rp 2.400.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="Rp 4.800.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="40 transactions"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</MarginTop10px>
		<MarginTop10px>
			<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
				<Grid item span={6}>
					<Avatar
						style={{
							marginTop: '40px',
							border: `solid 3px ${colors.blueBorder}`,
						}}
						size={60}
						src="https://joeschmoe.io/api/v1/a"
					/>
				</Grid>
				<Grid item span={18}>
					<Typography
						title
						level={4}
						text="Maktabah Muawwiyah"
						style={{color: colors.blueBorder, fontWeight: 'bold'}}
					/>
					<Grid gutter={{xs: 24, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8}}>
						<Grid item span={10}>
							<Typography text="Profit" />
							<br />
							<Typography text="Sales" />
							<br />
							<Typography text="Transaction" />
						</Grid>
						<Grid item span={14}>
							<Typography
								text="Rp 2.350.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="Rp 2.100.000"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
							<br />
							<Typography
								text="20 transactions"
								style={{
									fontSize: '14px',
									color: colors.primary.black,
									fontWeight: 'bold',
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</MarginTop10px>
	</Card>
);
export default TopAgents;
