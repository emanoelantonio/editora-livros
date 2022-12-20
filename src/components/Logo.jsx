import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/'>
      <h1 className='logo'>
        <span>Editora Maujor</span>
      </h1>
    </Link>
  );
}
