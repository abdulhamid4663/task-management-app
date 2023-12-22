import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to="/login" replace />
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;