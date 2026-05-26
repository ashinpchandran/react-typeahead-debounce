import React, { useState, useEffect } from 'react';
import './style.css';
import useDebounce from './useDebounce';

const USERS = [
  {
    id: 1,
    name: 'Alex Morgan',
    username: 'alexm_99',
    email: 'alex.morgan@example.com',
    isActive: true,
    role: 'Admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    address: {
      street: '123 Innovation Way',
      city: 'Tech City',
      zipcode: '94016',
    },
    skills: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 2,
    name: 'Taylor Swift',
    username: 'taylor_s',
    email: 'taylor.s@example.com',
    isActive: false,
    role: 'User',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor',
    address: {
      street: '456 Melody Lane',
      city: 'Nashville',
      zipcode: '37201',
    },
    skills: ['UI/UX', 'Figma', 'CSS'],
  },
  {
    id: 3,
    name: 'Jordan Lee',
    username: 'jordan_lee',
    email: 'jordan.lee@example.com',
    isActive: true,
    role: 'Editor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
    address: {
      street: '789 Creative Blvd',
      city: 'Austin',
      zipcode: '73301',
    },
    skills: ['Python', 'Django', 'SQL'],
  },
];

export default function App() {
  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState([]);
  const debouncedVal = useDebounce(inputVal,500);

  useEffect(()=>{
    const filteredResult = USERS.filter(user=>user.name.toLowerCase().includes(debouncedVal.trim().toLowerCase()));
    setResult(filteredResult)
  },[debouncedVal])
  
  return (
    <div>
      <h1>Debounced Type Ahead Search</h1>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
