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
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<any>(null);
  const [userByEmail, setUserByEmail] = useState<any>(null);
  const [userByName, setUserByName] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await tuyau.users({ id: 1 }).$get();
      const emailData = await tuyau.users.findByEmail.$get({ query: { email: 'test@test.com' } });
      const nameData = await tuyau.users.findByName.$get({ query: { name: 'test' } });
      setUsers(usersData);
      setUserByEmail(emailData);
      setUserByName(nameData);
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
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <div>{JSON.stringify(users)}</div>
      <div>{JSON.stringify(userByEmail)}</div>
      <div>{JSON.stringify(userByName)}</div>
    </>
  );
}

export default App;
