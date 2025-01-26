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

// More type-safe version that avoids 'any'
type ApiResponse<T> = T extends Promise<{ data: infer D }> ? D : never;
type GetUsersResponse = ApiResponse<ReturnType<typeof tuyau.users.$get>>;

function App() {
  const [users, setUsers] = useState<GetUsersResponse>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result4 = await tuyau.users.$get({ query: { limit: 10, page: 1 } });
      if (result4.data) {
        setUsers(result4.data);
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
      <div>{users && users.map((user) => <div key={user.id}>{user.email}</div>)}</div>
    </>
  );
}

export default App;
