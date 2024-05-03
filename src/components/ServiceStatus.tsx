function ServiceStatus(props: { lineId: string; lineName: string; status: string }) {
  return (
		<div className="w-100 border-2">
			<div className={`bg-${props.lineId} w-2 h-full float-left mr-4`}></div>
			<div>{props.lineName}</div>
			<div className="text-sm font-bold">{props.status}</div>
		</div>
  );
}

export default ServiceStatus;
