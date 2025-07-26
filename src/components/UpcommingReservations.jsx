import React from 'react';
import PropTypes from 'prop-types';

function UpcomingReservations({ data }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((r) => (
        <div
          key={r.id}
          className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-medium">{r.venueName}</h2>
            <p className="mt-2 text-gray-600">Date: {r.date}</p>
            <p className="text-gray-600">Time: {r.time}</p>
            <p className="text-gray-600">Party Size: {r.partySize}</p>
          </div>
          <button
            onClick={() => console.log('Cancel reservation:', r.id)}
            className="mt-4 py-2 rounded-xl border border-red-500 hover:bg-red-50"
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}

UpcomingReservations.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      venueName: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      partySize: PropTypes.number.isRequired,
      status: PropTypes.string
    })
  ).isRequired
};

export default UpcomingReservations;