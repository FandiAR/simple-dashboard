import {
	AppstoreOutlined,
	CreditCardOutlined,
	LogoutOutlined,
	RedEnvelopeOutlined,
	TransactionOutlined,
} from '@components';
import {colors} from '@styles/colors';
import {Menu, MenuProps} from 'antd';
import Router from 'next/router';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
	background: ${colors.primary.background};
	height: 100vh !important;
	.ant-menu-title-content {
		font-size: 16px !important;
	}
	.ant-menu-item-selected {
		background-color: ${colors.primary.white} !important;
		color: ${colors.primary.blue};
		border-right: ${colors.primary.blue} !important;
	}
`;

const SideMenu = ({
	defaultSelectedKeys,
	defaultOpenKeys,
}: {
	defaultSelectedKeys: Array<string>;
	defaultOpenKeys: Array<string>;
}) => {
	const onRedirect: MenuProps['onClick'] = e => {
		Router.push(e.key);
	};

	return (
		<StyledMenu
			style={{width: 256}}
			onClick={onRedirect}
			theme="light"
			mode="inline"
			defaultSelectedKeys={defaultSelectedKeys || ['/']}
			defaultOpenKeys={defaultOpenKeys}
			items={[
				{
					key: '/',
					icon: <AppstoreOutlined />,
					label: 'Dashboard',
				},
				{
					key: '/balance',
					icon: <CreditCardOutlined />,
					label: 'Balance',
				},
				{
					key: '/transaction',
					icon: <TransactionOutlined />,
					label: 'Transaction',
				},
				{
					key: '/product',
					icon: <RedEnvelopeOutlined />,
					label: 'Product',
				},
				{
					key: '/channel',
					icon: <RedEnvelopeOutlined />,
					label: 'Channel',
					children: [
						{label: 'Agent', key: 'agent'},
						{label: 'Balance', key: 'balance'},
						{label: 'Transaction', key: 'transaction'},
					],
				},
				{
					key: '/logout',
					icon: <LogoutOutlined />,
					label: 'Logout',
				},
			]}
		/>
	);
};
export default SideMenu;
