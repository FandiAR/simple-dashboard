import {ArrowRightOutlined, Card, Grid, Layout, Typography} from '@components';
import {colors} from '@styles/colors';
import React from 'react';
import {Chart} from 'react-google-charts';

import DashboardProfitSales from './DashboardProfitSales';
import TopAgents from './TopAgents';
import TopProducts from './TopProducts';

const data = [
	['Date', 'Sales'],
	['04 Apr ‘22', 1000],
	['06 Apr ‘22', 1070],
	['08 Apr ‘22', 1065],
	['10 Apr ‘22', 1030],
];
const options = {
	title: 'Company Performance',
	hAxis: {title: 'Date', titleTextStyle: {color: '#333'}},
	vAxis: {minValue: 0},
	chartArea: {width: '50%', height: '70%'},
};

const HomeContainer = () => {
	return (
		<Layout selectedKeys={['1']} keys={['/']} title="Dashboard">
			<Grid justify="space-between" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
				<Grid item className="gutter-row" span={16}>
					<DashboardProfitSales />
					<Card>
						<Typography type="secondary" title level={4} text="Sales Chart" />
						<Chart
							chartType="AreaChart"
							width="100%"
							height="250px"
							data={data}
							options={options}
						/>
					</Card>
					<TopProducts />
				</Grid>
				<Grid item className="gutter-row" span={8}>
					<Card>
						<Typography type="secondary" title level={4} text="Transaction" />
						<Grid gutter={8}>
							<Grid item>
								<Typography title level={3} text="1.090" />
							</Grid>
							<Grid item style={{paddingTop: '8px'}}>
								<Typography
									style={{paddingTop: '20px !important'}}
									text="transactions"
								/>
							</Grid>
						</Grid>
						<Grid justify="end">
							<Grid item span={2}>
								<ArrowRightOutlined style={{color: colors.warning}} />
							</Grid>
							<Grid item>
								<Typography type="warning" text="same as 7 days ago" />
							</Grid>
						</Grid>
					</Card>
					<TopAgents />
				</Grid>
			</Grid>
		</Layout>
	);
};
export default HomeContainer;
