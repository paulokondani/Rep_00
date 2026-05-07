import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Plant {
  id: number;
  name: string;
  image: string;
  humidity: number;
  waterLiters: number;
}

const Dashboard = () => {
  const [plants, setPlants] = useState<Plant[]>([
    { id: 1, name: 'Rose', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300', humidity: 45, waterLiters: 2 },
    { id: 2, name: 'Cactus', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', humidity: 20, waterLiters: 0.5 },
  ]);
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Monitored Plants</h2>
      <button onClick={() => navigate('/analyze')} style={{ marginBottom: '20px', padding: '10px' }}>Add Plant</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {plants.map(plant => (
          <div key={plant.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3>{plant.name}</h3>
            <p>Humidity: {plant.humidity}%</p>
            <p>Water Needed: {plant.waterLiters} L</p>
            <button onClick={() => navigate(`/plant/${plant.id}`)} style={{ padding: '8px 16px' }}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;