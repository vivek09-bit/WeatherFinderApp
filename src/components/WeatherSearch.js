import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import WeatherCard from './WeatherCard';
import Calendar from './Calendar';
import MeteorologicalPredictions from './MeteorologicalPredictions';
import { getWeatherData } from '../services/WeatherService';

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState('');
  const [meteorologicalPredictions, setMeteorologicalPredictions] = useState('');

  useEffect(() => {
    const currentDate = new Date().toDateString();
    const predictions = 'Meteorological predictions for the week: ...';
    setDate(currentDate);
    setMeteorologicalPredictions(predictions);
  }, []);

  const handleSearch = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm p-4 border-0 rounded-4">
            <h2 className="text-center mb-4">Weather Finder</h2>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-start"
              />
              <Button 
                variant="primary"
                onClick={handleSearch}
                className="rounded-end"
              >
                Search
              </Button>
            </InputGroup>
            {weatherData && <WeatherCard data={weatherData} />}
            {date && <Calendar date={date} />}
            {meteorologicalPredictions && (
              <MeteorologicalPredictions predictions={meteorologicalPredictions} />
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherSearch;
