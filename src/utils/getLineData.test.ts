import { getLineData } from './getLineData';

beforeEach(() => {
	fetchMock.resetMocks();
})

test('returns line data if API call succeeds', async () => {
	const mockLineData = [{
		id: "bakerloo",
		name: "Bakerloo",
		modeName: "tube",
		created: "2024-04-30T17:19:22.673Z",
		modified: "2024-04-30T17:19:22.673Z",
		lineStatuses: [
			{
				id: 0,
				statusSeverity: 10,
				statusSeverityDescription: "Good Service",
			}
		]
	}];

	fetchMock.mockResponse(JSON.stringify(mockLineData));
	const result = await getLineData();
	expect(result).toEqual(mockLineData);
	expect(fetchMock).toHaveBeenCalledTimes(1);
	expect(fetchMock).toHaveBeenCalledWith('http://api.tfl.gov.uk/Line/Mode/Tube/Status');
});

test('returns null if API call fails', async () => {
	fetchMock.mockReject();
	const result = await getLineData();
	expect(result).toEqual(null);
	expect(fetchMock).toHaveBeenCalledTimes(1);
	expect(fetchMock).toHaveBeenCalledWith('http://api.tfl.gov.uk/Line/Mode/Tube/Status');
});
