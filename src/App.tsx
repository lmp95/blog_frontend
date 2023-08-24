import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Login from './pages/Login';

function App() {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='' element={<Layout />} />
        </Routes>
    );
}

export default App;
