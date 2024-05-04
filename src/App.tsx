import React from 'react';
import './App.css';
import Line from './models/Line';
import ServiceStatus from './components/ServiceStatus';
import { getLineData } from './utils/getLineData';

function App() {
  const [lineData, setLineData] = React.useState<Line[]>([]);

  React.useEffect(() => {
    getLineData().then(data => setLineData(data));
    const timer = setInterval(() => {
			getLineData().then(data => setLineData(data));
		}, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='m-4'>
      <h1 className='text-4xl font-bold'>Service updates</h1>
      <div className='text-xs'>
				updates every 10 seconds
      </div>
      <div className='mt-4 grid gap-4 md:grid-cols-2'>
        {lineData.map((tube) => (
					<ServiceStatus
						key={tube.id}
						lineId={tube.id}
						lineName={tube.name}
						status={tube.lineStatuses[0].statusSeverityDescription}
					></ServiceStatus>
        ))}
      </div>
    </div>
  );
}

export default App;
