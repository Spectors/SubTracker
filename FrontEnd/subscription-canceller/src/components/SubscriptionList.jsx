// src/components/SubscriptionList.jsx
import React from 'react';

const SubscriptionList = ({ subscriptions, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Subscriptions</h2>
      <ul className="list-none p-0">
        {subscriptions.length > 0 ? (
          subscriptions.map(sub => (
            <li key={sub.id} className="flex justify-between items-center p-4 mb-2 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
              <span className="text-lg text-gray-700">{sub.name}: {sub.cost}</span>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                onClick={() => onDelete(sub.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No subscriptions found.</p>
        )}
      </ul>
    </div>
  );
};

export default SubscriptionList;
