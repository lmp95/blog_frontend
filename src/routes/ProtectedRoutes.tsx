import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { tokenSelector } from '~/redux/reducers/user.reducer';

function ProtectedRoute({ children }: { children?: JSX.Element }) {
    const token = useSelector(tokenSelector);
    if (!token) {
        return <Navigate to={'/'} replace />;
    }
    return children ? children : <Outlet />;
}

export default ProtectedRoute;
