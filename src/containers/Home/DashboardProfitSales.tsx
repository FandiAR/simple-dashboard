import {
	ArrowDownOutlined,
	ArrowUpOutlined,
	Card,
	Grid,
	Typography,
} from '@components';
import {colors} from '@styles/colors';

const DashboardProfitSales = () => (
	<Grid justify="space-between" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
		<Grid item className="gutter-row" span={12}>
			<Card>
				<Typography type="secondary" title level={4} text="Profit" />
				<Grid gutter={8}>
					<Grid item>
						<Typography title level={3} text="Rp. 11.500.000" />
					</Grid>
				</Grid>
				<Grid justify="end">
					<Grid item span={2}>
						<ArrowUpOutlined style={{color: colors.error}} />
					</Grid>
					<Grid item>
						<Typography type="danger" text="0.3% compared to 7 days ago" />
					</Grid>
				</Grid>
			</Card>
		</Grid>
		<Grid item className="gutter-row" span={12}>
			<Card>
				<Typography type="secondary" title level={4} text="Sales" />
				<Grid gutter={8}>
					<Grid item>
						<Typography title level={3} text="Rp. 56.000.000" />
					</Grid>
				</Grid>
				<Grid justify="end">
					<Grid item span={2}>
						<ArrowDownOutlined style={{color: colors.success}} />
					</Grid>
					<Grid item>
						<Typography type="success" text="0.5% compared to 7 days ago" />
					</Grid>
				</Grid>
			</Card>
		</Grid>
	</Grid>
);
export default DashboardProfitSales;
