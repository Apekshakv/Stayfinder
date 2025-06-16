import React from 'react';
import './stayfinder.css'
import video from './2169880-uhd_3840_2160_30fps.mp4';
import { Link} from 'react-router-dom';

export const Stayfinder = () => {
  return (
  
    <div className="stayfinder-container">
         
      <video className="stayfinder-video" src={video} autoPlay loop muted></video>
      <div className="stayfinder-content">
       <h1>Stayfinder</h1>
        <p>
          Stayfinder offers comfort you can count on thanks to our flexible rates, unlimited breakfast, and super-comfy beds - what's not to love?
        </p>
        <p>
          Our family rooms include a kingsize* bed for the grown-ups, and two pull-out or sofa beds for the kids. Need a cot? We've got you covered.
        </p>
        <p>
          <strong>Committed to cleanliness:</strong> We follow a rigorous daily cleaning regime — part of our CleanProtect hygiene promise.
        </p>
       <Link to="/city" style={{
  backgroundColor: '#EA4C89',
  borderRadius: '8px',
  borderStyle: 'none',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  height: '40px',
  lineHeight: '20px',
  listStyle: 'none',
  margin: 0,
  outline: 'none',
  padding: '10px 16px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'color 100ms',
  verticalAlign: 'baseline',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
}}>
  Find Your Hotels
</Link>

      </div>
    
    </div>
   
  );
};
