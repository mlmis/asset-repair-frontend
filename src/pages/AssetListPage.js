// frontend/src/pages/AssetListPage.js
import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Import the api client

function AssetListPage() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get('/api/assets').then(res => setAssets(res.data));
  }, []);

  return (
    <div>
      <h2>Assets</h2>
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>{asset.serialNumber} - {asset.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default AssetListPage;
