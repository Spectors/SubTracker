// src/components/AddSubscription.jsx
import React, { useState } from 'react';

const AddSubscription = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAdd({ id: Date.now(), name, cost });
      setName('');
      setCost('');
    } catch (error) {
      console.error('Error adding subscription:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
    <div className="grid grid-cols-1 gap-4 mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Service Name"
        required
        className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Cost"
        required
        className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
      Add Subscription
    </button>
  </form>
  );
};

export default AddSubscription;
