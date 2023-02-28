import React from 'react';

function Error({ error }) {
  return (
    <p style={{ color: '#dc1529' }}>You've exceeded the Rate Limit please wait for 1 minute.</p>
  );
}

export default Error;
