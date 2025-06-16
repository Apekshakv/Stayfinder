import React, { useState } from 'react';
import goaHotels from './goa_hotels.json';
import { Link } from 'react-router-dom';
const Hotel = () => {
  const [searchTerm, setSearchTerm] = useState('');

const filteredHotels = goaHotels.filter((hotel) =>
  (hotel.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) 
 
);


  return (
    <div style={{ padding: '1rem' }}>
     <h2 style={{
      color:" #ff385c"
     }}>Hotels in Goa</h2>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
          padding: '0.5rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        <input
          type="text"
          placeholder="Search hotels..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '20px',
            outline: 'none',
          }}
        />
        <Link to="/city" className="back-link">Back</Link>
      </nav>

     
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>{hotel.name}</h3>
                <p>{hotel.city}</p>
                <p><strong>{hotel.star}</strong></p>
                <p><strong>Rating:</strong> {hotel.rating} </p>
                <p><strong>Price:</strong> {hotel.price}</p>
                <p><strong>Address:</strong> {hotel.address}</p>
              </div>
            </div>
          ))
        ) : (
          <p >
            No hotels found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Hotel;
