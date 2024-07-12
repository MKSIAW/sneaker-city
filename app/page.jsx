'use client'
import { useState } from 'react';
//import SneakerList from './components/sneakerList';

export default function LatestSneakers() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    
    </div>
  );
}
