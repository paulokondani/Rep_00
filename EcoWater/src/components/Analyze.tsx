import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Analyze = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ name: string; waterLiters: number } | null>(null);
  const navigate = useNavigate();

  const handleUpload = () => {
    if (file) {
      // Mock AI analysis
      setResult({ name: 'Tulip', waterLiters: 1.5 });
    }
  };

  const handleAdd = () => {
    if (result) {
      // Mock add to plants
      alert('Plant added!');
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Analyze Plant</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        style={{ display: 'block', margin: '10px 0' }}
      />
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" style={{ width: '100%', margin: '10px 0' }} />}
      <button onClick={handleUpload} style={{ width: '100%', padding: '10px', margin: '10px 0' }}>Analyze</button>
      {result && (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
          <p><strong>Plant:</strong> {result.name}</p>
          <p><strong>Water Needed:</strong> {result.waterLiters} L</p>
          <button onClick={handleAdd} style={{ width: '100%', padding: '10px' }}>Add Plant</button>
        </div>
      )}
    </div>
  );
};

export default Analyze;