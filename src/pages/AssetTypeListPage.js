import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Import the api client

function AssetTypeListPage() {
  const [assetTypes, setAssetTypes] = useState([]);

  useEffect(() => {
    axios.get('/api/asset-types').then(res => setAssetTypes(res.data));
  }, []);

  return (
    <div>
      <h2>Asset Types</h2>
      <ul>
        {assetTypes.map(type => (
          <li key={type.id}>{type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AssetTypeListPage;
