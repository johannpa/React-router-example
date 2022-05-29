import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
    const [redirect, setRedirect] = useState(false);
    
  return redirect ?
    <Navigate
        to="/destination"
        replace={true}
        state={{
            message: "You was redirected from the Home page to the Destination page",
            time: new Date().toLocaleString()
        }} />
    : <div style={{ padding: 30 }}>
        <h1>Home Page</h1>

        <p>
            <button onClick={() => setRedirect(true)}>
                Continue to Destination page
            </button>
        </p>

        <p>
            <input 
                type="checkbox"
                checked={redirect}
                onChange={() => {
                    setRedirect(true);
                }}
                id="my-checkbox" />
            <label htmlFor="my-checkbox"> Go to Destination page?</label>
        </p>
    </div>
}

export default HomePage;