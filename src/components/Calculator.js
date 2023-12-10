import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Calculator = () => {
  const [distance, setDistance] = useState('');
  const [tollRate, setTollRate] = useState('');
  const [totalToll, setTotalToll] = useState(null);

  const calculateToll = () => {
    const distanceFloat = parseFloat(distance);
    const tollRateFloat = parseFloat(tollRate);

    if (!isNaN(distanceFloat) && !isNaN(tollRateFloat)) {
      const result = distanceFloat * tollRateFloat;
      setTotalToll(result.toFixed(2));
    } else {
      setTotalToll(null);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="distance">
          <Form.Label>Distance (in miles)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="tollRate">
          <Form.Label>Toll Rate (per mile)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter toll rate"
            value={tollRate}
            onChange={(e) => setTollRate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={calculateToll}>
          Calculate Toll
        </Button>
      </Form>

      {totalToll !== null && (
        <div>
          <h3>Total Toll:</h3>
          <p>${totalToll}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;