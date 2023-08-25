import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Auth from './pages/Auth';

function App() {
    return (
        <Routes>
            <Route path='login' element={<Auth isRegister={false} />} />
            <Route path='register' element={<Auth isRegister={true} />} />
            <Route path='' element={<Layout />} />
        </Routes>
    );
}

export default App;
