import React from 'react';
import spinner from './spinner.gif';
import './spinner.css'

export default function Spinner() {
  return (
    <div>
      <img 
        src={ spinner } 
        alt="Loading..." 
        className="loader"
      />
    </div>
  )
}
