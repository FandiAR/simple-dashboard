import {colors} from '@styles/colors';
import {Card as AntdCard} from 'antd';
import {ReactNode} from 'react';
import styled from 'styled-components';

const StyledCard = styled(AntdCard)`
	box-shadow: 0px 0px 26px ${colors.primary.border};
	background: ${colors.primary.white};
	border-radius: 12px;
	margin-top: 10px !important;
`;
const Card = ({children}: {children: ReactNode}) => (
	<StyledCard>{children}</StyledCard>
);
export default Card;
