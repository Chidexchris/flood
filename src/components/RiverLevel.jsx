import 'bootstrap/dist/css/bootstrap.min.css';

const RiverLevel = ({ totalDepth = 20, currentHeight = 12 }) => {
  const depth = totalDepth;
  const height = currentHeight;

  // Calculate percentage
  const percentage = Math.min((height / depth) * 100, 100);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h5>Total River Depth: {depth} m</h5>
        <h5>Current Water Height: {height} m</h5>
        <div className="progress mt-3" style={{ height: "30px" }}>
          <div
            className={`progress-bar ${
              percentage < 70 ? "bg-info" : percentage < 90 ? "bg-warning" : "bg-danger"
            }`}
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {percentage.toFixed(1)}%
          </div>
        </div>
        <p className="mt-3 text-muted">
          {percentage < 70
            ? "✅ Water level is safe."
            : percentage < 90
            ? "⚠️ Warning: Water level rising."
            : "🚨 Danger: Flood risk imminent!"}
        </p>
      </div>
    </div>
  );
};

export default RiverLevel;
