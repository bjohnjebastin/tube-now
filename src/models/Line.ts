import LineStatus from './LineStatus';

interface Line {
	id: string;
	name: string;
	modeName: string;
	created: string;
	modified: string;
	lineStatuses: LineStatus[];
}

export default Line;
