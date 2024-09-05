// src/components/SubscriptionContainer.jsx
import React, { useEffect, useState } from 'react';
import { fetchSubscriptions, addSubscription, deleteSubscription } from '../api';
import SubscriptionList from '../components/SubscriptionList';
import AddSubscription from '../components/AddSubscription';

const SubscriptionContainer = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const loadSubscriptions = async () => {
      try {
        const result = await fetchSubscriptions();
        setSubscriptions(result);
      } catch (error) {
        console.error('Error loading subscriptions:', error);
      }
    };
    loadSubscriptions();
  }, []);

  const handleAdd = async (subscription) => {
    try {
      const newSubscription = await addSubscription(subscription);
      setSubscriptions([...subscriptions, newSubscription]);
    } catch (error) {
      console.error('Error adding subscription:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSubscription(id);
      setSubscriptions(subscriptions.filter(sub => sub.id !== id));
    } catch (error) {
      console.error('Error deleting subscription:', error);
    }
  };
  const handleOpenRocketLeague = async () => {
    try {
      await axios.get('/api/open-rocket-league');
      alert('Rocket League should be opening now!');
    } catch (error) {
      console.error('Error opening Rocket League:', error);
      alert('Failed to open Rocket League.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Subscription Manager</h1>
    <AddSubscription onAdd={handleAdd} />
    <SubscriptionList subscriptions={subscriptions} onDelete={handleDelete} />
    <button 
        onClick={handleOpenRocketLeague} 
        className="mt-6 w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
      >
        Play Rocket League
      </button>
  </div>
  );
  
};

export default SubscriptionContainer;
