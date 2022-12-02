import {colors} from '@styles/colors';
import Image from 'next/image';
import styled from 'styled-components';

import {Card, Typography} from '@components';

const SmallCard = styled.span`
	border: solid 3px ${colors.blueBorder};
	border-radius: 12px;
	padding: 8px;
	width: 20%;
	height: 200px !important;
	display: block;
	align-items: center;
	justify-content: center;
	text-align: center;
`;
const LogoContainer = styled.div`
	margin-bottom: 10px;
`;

const TopProducts = () => (
	<Card>
		<Typography type="secondary" title level={4} text="Top 4 Products" />
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<SmallCard style={{width: '20%'}}>
				<LogoContainer>
					<Image src="/pln.png" alt="PLN Logo" width={50} height={50} />
				</LogoContainer>
				<Typography
					title
					level={4}
					text="Postpaid"
					style={{color: colors.blueBorder, fontWeight: 'bold'}}
				/>
				<Typography text="Rp. 250.000" />
				<br />
				<Typography style={{fontWeight: 'bold'}} text="98 transactions" />
			</SmallCard>
			<SmallCard style={{width: '20%'}}>
				<LogoContainer>
					<Image
						src="/telkomsel.png"
						alt="Telkomsel Logo"
						width={50}
						height={50}
					/>
				</LogoContainer>
				<Typography
					title
					level={4}
					text="Telkomsel"
					style={{color: colors.blueBorder, fontWeight: 'bold'}}
				/>
				<Typography text="Rp. 50.000" />
				<br />
				<Typography style={{fontWeight: 'bold'}} text="74 transactions" />
			</SmallCard>
			<SmallCard style={{width: '20%'}}>
				<LogoContainer>
					<Image src="/three.png" alt="Three Logo" width={50} height={50} />
				</LogoContainer>
				<Typography
					title
					level={4}
					text="Three"
					style={{color: colors.blueBorder, fontWeight: 'bold'}}
				/>
				<Typography text="Rp. 50.000" />
				<br />
				<Typography style={{fontWeight: 'bold'}} text="50 transactions" />
			</SmallCard>
			<SmallCard style={{width: '20%'}}>
				<LogoContainer>
					<Image src="/ovo.png" alt="Ovo Logo" width={50} height={50} />
				</LogoContainer>
				<Typography
					title
					level={4}
					text="Ovo"
					style={{color: colors.blueBorder, fontWeight: 'bold'}}
				/>
				<Typography text="Rp. 100.000" />
				<br />
				<Typography style={{fontWeight: 'bold'}} text="68 transactions" />
			</SmallCard>
		</div>
	</Card>
);
export default TopProducts;
