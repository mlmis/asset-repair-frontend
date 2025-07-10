// frontend/src/pages/RepairListPage.js
import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Import the api client

function RepairListPage() {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    axios.get('/api/repairs').then(res => setRepairs(res.data));
  }, []);

  return (
    <div>
      <h2>Repair Requests</h2>
      <ul>
        {repairs.map(repair => (
          <li key={repair.id}>{repair.description} - {repair.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default RepairListPage;
