import { RouterProvider } from 'react-router';
import './App.css';
import Home from './pages/home';
import { router } from './router';

export default function App() {
  return (
    <div className='bg-[#fbfaf9]'>
      <RouterProvider router={router} />
    </div>
  )
}