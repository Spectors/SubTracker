// src/api.js
import axios from 'axios';

// Set up Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Fetch subscriptions
export const fetchSubscriptions = async () => {
  try {
    const response = await api.get('/subscriptions');
    return response.data;
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    throw error;
  }
};

// Add a subscription
export const addSubscription = async (subscription) => {
  try {
    const response = await api.post('/subscriptions', subscription);
    return response.data;
  } catch (error) {
    console.error('Error adding subscription:', error);
    throw error;
  }
};

// Delete a subscription
export const deleteSubscription = async (id) => {
  try {
    await api.delete(`/subscriptions/${id}`);
  } catch (error) {
    console.error('Error deleting subscription:', error);
    throw error;
  }
};
