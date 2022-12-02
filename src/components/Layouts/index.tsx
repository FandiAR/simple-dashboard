import {Grid, ProfileCard, SideMenu, Typography} from '@components';
import {colors} from '@styles/colors';
import {ReactNode} from 'react';
import styled from 'styled-components';

const LayoutContainer = styled(Grid)`
	margin: 20px !important;
	background: white;
	color: ${colors.whitesmoke};
`;
const ProductTitle = styled.div`
	text-align: center;
	font-weight: bold;
	background: ${colors.primary.background};
	padding-bottom: 10px;
`;
const ContentContainer = styled.div`
	margin-top: 20px;
`;

const Layout = ({
	selectedKeys,
	keys,
	title,
	children,
}: {
	selectedKeys: Array<string>;
	keys: Array<string>;
	title: string;
	children: ReactNode;
}) => {
	return (
		<LayoutContainer gutter={16}>
			<Grid item span={4}>
				<ProductTitle>
					<Typography
						style={{color: colors.primary.blue}}
						title
						level={4}
						text="SalesDash"
					/>
				</ProductTitle>
				<SideMenu
					defaultSelectedKeys={selectedKeys || ['1']}
					defaultOpenKeys={keys || ['/']}
				/>
			</Grid>
			<Grid item span={16}>
				<Typography title level={4} text={title} />
				<Typography text="Today’s date: Thu, 01 December 2022" />
				<ContentContainer>{children}</ContentContainer>
			</Grid>
			<ProfileCard />
		</LayoutContainer>
	);
};
export default Layout;
