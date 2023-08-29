import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PostDetail from './PostDetail';
import Acitivty from './Dashboard';
import ManagePost from './ManagePosts';
import CreatePost from './ManagePosts/Post';
import ProtectedRoute from '~/routes/ProtectedRoutes';
import Post from './ManagePosts/Post';

function Layout() {
    return (
        <>
            <div className='grid grid-rows-layout grid-cols-1 sm:grid-cols-layout w-screen h-screen'>
                <Sidebar />
                <div className='overflow-y-auto bg-white'>
                    <Header />
                    <div className='mt-[85px] px-8 py-4'>
                        <Routes>
                            <Route path='/' element={<Acitivty />} />
                            <Route path={`/posts/:id`} element={<PostDetail />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path={`/posts/:id/edit`} element={<Post type='update' />} />
                                <Route path={`/manage`} element={<ManagePost />} />
                                <Route path={`/posts`} element={<Post type='create' />} />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
