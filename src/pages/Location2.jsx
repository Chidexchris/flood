// src/pages/DashBoard.jsx
import React, { useState, useEffect, useRef } from "react";
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';
import Gauge from '../components/Gauge';
import useFirebase from "../firebase/station2";
import Chart from "chart.js/auto";
import '../assets/style.css';

function DashBoard() {
  const [latest, setLatest] = useState(null);
  const chartCanvasRef = useRef(null);
  const chartInstance = useRef(null);

  // Receive data from Firebase
  useFirebase((data) => {
    if (!data) return;
    const keys = Object.keys(data).sort();
    const lastKey = keys[keys.length - 1];
    setLatest(data[lastKey]);
  });

  // Initialize Chart.js
  useEffect(() => {
    if (!chartCanvasRef.current) return;

    const ctx = chartCanvasRef.current.getContext("2d");

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Water Level (cm)",
            borderColor: "#2563eb",
            data: [],
            borderWidth: 2,
          },
          {
            label: "Temperature (°C)",
            borderColor: "#f97316",
            data: [],
            borderWidth: 2,
          },
          {
            label: "Humidity (%)",
            borderColor: "#16a34a",
            data: [],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // allows full container height
        animation: false,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Cleanup chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  // Update chart when new Firebase data arrives
  useEffect(() => {
    if (!latest || !chartInstance.current) return;

    const chart = chartInstance.current;

    chart.data.labels.push(latest.timestamp);
    chart.data.datasets[0].data.push(latest.water_level);
    chart.data.datasets[1].data.push(latest.temperature);
    chart.data.datasets[2].data.push(latest.humidity);

    // Keep last 20 points
    if (chart.data.labels.length > 20) {
      chart.data.labels.shift();
      chart.data.datasets.forEach((d) => d.data.shift());
    }

    chart.update();
  }, [latest]);

  return (
    <div className="container-scroller">
      <AdminHeader />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />

        <div className="main-panel">
          <div className="content-wrapper">

            {/* Gauges */}
            <section className="gauges">
              <Gauge label="Water Level" value={latest?.water_level ?? 0} unit="cm" />
              <Gauge label="Temperature" value={latest?.temperature ?? 0} unit="°C" />
              <Gauge label="Humidity" value={latest?.humidity ?? 0} unit="%" />
            </section>

            {/* Status */}
            <div className={`status ${latest?.status?.toLowerCase() || ""}`}>
              Status: {latest?.status ?? "Loading..."}
            </div>

            {/* Chart */}
          <section className="chart pb-5" style={{ width: '100%', height: '500px' }}>
  <h3>Live Sensor Readings</h3>
  <canvas ref={chartCanvasRef} style={{ width: '100%', height: '100%' }}></canvas>
</section>


            {/* Timestamp */}
            <footer>
              ⏱ Last Updated: <span>{latest?.timestamp ?? "Waiting for data..."}</span>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
