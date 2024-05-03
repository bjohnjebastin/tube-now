import { useEffect, useState } from 'react';
import './App.css';
import Line from './models/Line';
import ServiceStatus from './components/ServiceStatus';

function App() {

	const [lineData, setLineData] = useState<Line[]>([]);

	const date = new Date();
	const formattedTime = date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0');

	useEffect(() => {
		fetch('http://api.tfl.gov.uk/Line/Mode/Tube/Status')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setLineData(data);
			});
	}, []);

  return (
		<div className='m-4'>
			<h1 className='text-4xl font-bold'>Service updates</h1>
			<p>Updated at {formattedTime}</p>
			<div className="mt-4 grid gap-4 md:grid-cols-2">
				{lineData.map((tube) => (
					<ServiceStatus key={tube.id} lineId={tube.id} lineName={tube.name} status={tube.lineStatuses[0].statusSeverityDescription}></ServiceStatus>
				))}
			</div>
		</div>
	);
}

export default App;
