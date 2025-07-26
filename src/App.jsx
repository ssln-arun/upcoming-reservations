import React from 'react';
import UpcomingReservations from './components/UpcommingReservations';
import reservations from './data/reservation'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Upcoming Reservations
      </h1>
      <UpcomingReservations data={reservations} />
    </div>
  );
}

export default App;