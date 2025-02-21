// src/components/WeatherCard.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const WeatherCard = ({ data }) => {
  const { name, main: { temp, humidity }, weather } = data;
  const weatherDescription = weather[0].description;
  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '10px' }}>
        <Card.Img variant="top" src={weatherIcon} alt={weatherDescription} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Temperature:</strong> {temp} °C
          </Card.Text>
          <Card.Text>
            <strong>Weather:</strong> {weatherDescription}
          </Card.Text>
          <Card.Text>
            <strong>Humidity:</strong> {humidity}%
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WeatherCard;