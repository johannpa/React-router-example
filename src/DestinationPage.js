import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const DestinationPage = () => {
    const location = useLocation();
    const state = location.state;

  return (
    <div style={{ padding: 30 }}>
        <h1>Destination Page</h1>
        <p><Link to="/">Go Home</Link></p>

        {/* Display passed data */}
        {state.message && state.time && <div>
            <h3>{state.message}</h3>
            <h3>{state.time}</h3>
        </div>}
    </div>
  )
}

export default DestinationPage;