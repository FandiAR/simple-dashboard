import {Typography as AntdTypography} from 'antd';
import React, {CSSProperties} from 'react';

const {Text, Title} = AntdTypography;

const Typography = ({
	className,
	title,
	disabled,
	level,
	text,
	onClick,
	style,
	type,
}: {
	className?: string;
	title?: boolean;
	disabled?: boolean;
	level?: 5 | 4 | 3 | 2 | 1;
	text: string | undefined;
	onClick?: () => void;
	style?: CSSProperties;
	type?: 'danger' | 'warning' | 'success' | 'secondary';
}) => {
	if (title)
		return (
			<Title
				type={type}
				style={style}
				className={className}
				level={level}
				onClick={onClick}
			>
				{text}
			</Title>
		);
	return (
		<Text
			type={type}
			style={style}
			className={className}
			disabled={disabled || false}
			onClick={onClick}
		>
			{text}
		</Text>
	);
};
export default Typography;
