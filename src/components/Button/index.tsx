import {Button as AntdButton, ButtonProps} from 'antd';
import React, {CSSProperties} from 'react';

type CustomButtonProps = {
	text?: string;
	onClick: () => void;
	style?: CSSProperties;
} & ButtonProps;

const Button = (props: CustomButtonProps) => {
	const {text, onClick} = props;

	return (
		<AntdButton
			style={{...props.style, border: 0, borderRadius: 4}}
			onClick={onClick}
		>
			{text}
		</AntdButton>
	);
};
export default Button;
