import {Row, Col} from 'antd';
import React, {CSSProperties, ReactNode} from 'react';

type CustomGridProps = {
	children?: ReactNode;
	item?: boolean;
	className?: string;
	xs?: number | object;
	sm?: number | object;
	md?: number | object;
	lg?: number | object;
	xl?: number | object;
	gutter?: number | object;
	span?: number;
	style?: CSSProperties | undefined;
	justify?: 'space-between' | 'space-evenly' | 'end';
};
const Grid = (props: CustomGridProps) => {
	const {children, item, ...others} = props;

	if (item) return <Col {...others}>{children}</Col>;
	return <Row {...others}>{children}</Row>;
};
export default Grid;
