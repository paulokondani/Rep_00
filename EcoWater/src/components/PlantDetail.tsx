import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PlantDetail = () => {
  const { id } = useParams();
  const [humidity, setHumidity] = useState(45);
  const [waterCount, setWaterCount] = useState(0);
  const [isWatering, setIsWatering] = useState(false);

  useEffect(() => {
    // Mock sensor data
    const interval = setInterval(() => {
      setHumidity(Math.floor(Math.random() * 100));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const startCount = () => {
    setIsWatering(true);
    setWaterCount(prev => prev + 1);
    // Mock stop after 10 seconds
    setTimeout(() => setIsWatering(false), 10000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Plant Details - ID: {id}</h2>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <p><strong>Soil Humidity:</strong> {humidity}%</p>
        <p><strong>Water Provided:</strong> {waterCount} L</p>
        <button onClick={startCount} disabled={isWatering} style={{ padding: '10px 20px', fontSize: '16px' }}>
          {isWatering ? 'Watering...' : 'Water Plant'}
        </button>
      </div>
    </div>
  );
};

export default PlantDetail;