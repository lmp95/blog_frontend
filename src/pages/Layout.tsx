import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PostDetail from './PostDetail';
import Acitivty from './Dashboard';

function Layout() {
    return (
        <>
            <div className='grid grid-rows-layout grid-cols-layout w-screen h-screen'>
                <div className='row-span-2'>
                    <Sidebar />
                </div>
                <div className='overflow-y-auto bg-white'>
                    <Header />
                    <div className='mt-[75px] p-4'>
                        <Routes>
                            <Route path='/' element={<Acitivty />} />
                            <Route path={`/posts/:id`} element={<PostDetail />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
