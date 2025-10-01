import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ✅ Sample data (replace later with backend data)


const riverTempData = [
  { time: "6 AM", temperature: 22 },
  { time: "8 AM", temperature: 23 },
  { time: "10 AM", temperature: 25 },
  { time: "12 PM", temperature: 27 },
  { time: "2 PM", temperature: 28 },
  { time: "4 PM", temperature: 26 },
];

const River = () => {
  return (
    <Container fluid className="py-4">
      {/* 📈 River Depth & Height Chart */}
      

      {/* 🌡️ River Temperature Chart */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Header className=" text-black">
              River Temperature Over Time
            </Card.Header>
            <Card.Body>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={riverTempData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis label={{ value: "°C", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temperature" stroke="#17a2b8" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default River;
