import * as dateFns from 'date-fns';

type DateFormatType =
	| 'E, dd MMM yyyy - HH:mm'
	| 'dd MMM yyyy - HH:mm'
	| 'E, dd MMM yyyy'
	| 'MMMM yyyy'
	| 'yyyy-MM'
	| 'yyyy-MM-dd'
	| 'dd MMM yyyy'
	| 'E'
	| 'dd'
	| 'MM'
	| 'HH:mm'
	| 'EEE, dd MMM yyyy'
	| 'EEE, c LLLL yyyy';

const dateFormatter = (date: Date, dateFormat?: DateFormatType) =>
	dateFns.format(new Date(date), dateFormat || 'dd MMMM yyyy');

export default dateFormatter;
