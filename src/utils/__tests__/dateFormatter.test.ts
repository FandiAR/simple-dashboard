import dateFormatter from '@utils/dateFormatter';

describe('dateFormatter', () => {
	test('valid', () => {
		const test = dateFormatter(new Date(2022, 0, 1));
		expect(test).toBe('01 January 2022');
	});

	test('valid data with date format', () => {
		const testWithDateFormat = dateFormatter(
			new Date(2022, 0, 1),
			'dd MMM yyyy',
		);
		expect(testWithDateFormat).toBe('01 Jan 2022');
	});
});
