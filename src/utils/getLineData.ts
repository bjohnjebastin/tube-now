export const getLineData = async () => {
	try {
		const response = await fetch('http://api.tfl.gov.uk/Line/Mode/Tube/Status');
		const data = await response.json();
		return data;	
	} catch (error) {
		return null;	
	}
};
