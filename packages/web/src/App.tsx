import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createTuyau } from '@tuyau/client';
import { api } from '@monorepo/api';

export const tuyau = createTuyau({
  api,
  baseUrl: 'http://localhost:3333',
});

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const result4 = await tuyau.users.$get({ query: { limit: 10, page: 1 } });
      if (result4.data) {
        const user = result4.data[1];
        console.log(user.id, user.name, user.email, user.age);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
