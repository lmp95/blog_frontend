import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Layout() {
    return (
        <>
            <div className='grid grid-rows-layout grid-cols-layout w-screen h-screen'>
                <div className='row-span-2'>
                    <Sidebar />
                </div>
                <div className='overflow-y-auto bg-white'>
                    <Header />
                </div>
            </div>
        </>
    );
}

export default Layout;
