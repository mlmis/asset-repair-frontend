import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function DashboardPage() {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    const fetchRepairs = async () => {
      const repairSnapshot = await getDocs(collection(db, 'repairs'));
      const repairList = repairSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRepairs(repairList);
    };
    fetchRepairs();
  }, []);

  return (
    <div>
      <h2>Repair Requests Dashboard</h2>
      <ul>
        {repairs.map(r => (
          <li key={r.id}>{r.description} - {r.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;
