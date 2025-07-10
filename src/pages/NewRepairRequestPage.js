import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Import the api client
import DynamicForm from '../components/DynamicForm';

function NewRepairRequestPage() {
  const [assetTypes, setAssetTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [description, setDescription] = useState('');
  const [suggestions, setSuggestions] = useState('');

  useEffect(() => {
    axios.get('/api/asset-types').then(res => setAssetTypes(res.data));
  }, []);

  const fetchSuggestions = async () => {
    const res = await axios.post('/api/ai/suggest', { description });
    setSuggestions(res.data.suggestions);
  };

  const submitRepair = async (values) => {
    const payload = {
      assetTypeId: selectedType._id,
      customData: values,
      description
    };
    await axios.post('/api/repairs', payload);

    // Notify technician via SMS
    await axios.post('/api/notify/sms', {
      to: '+1234567890',
      message: `New repair request submitted: ${description}`
    });

    alert('Repair request submitted!');
  };

  return (
    <div>
      <h2>New Repair Request</h2>
      <textarea
        placeholder="Describe the issue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={fetchSuggestions}>Get AI Suggestions</button>

      {suggestions && <div><h4>Suggestions:</h4><pre>{suggestions}</pre></div>}

      <select onChange={(e) => {
        const type = assetTypes.find(t => t._id === e.target.value);
        setSelectedType(type);
      }}>
        <option>Select Asset Type</option>
        {assetTypes.map(t => (
          <option key={t._id} value={t._id}>{t.name}</option>
        ))}
      </select>

      {selectedType && (
        <DynamicForm fields={selectedType.customFields} onSubmit={submitRepair} />
      )}
    </div>
  );
}

export default NewRepairRequestPage;
