import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { authInfo } = useSelector((state) => state.auth);

  return (
    <>
      {authInfo !== null ? (
        <Navigate to="/app/dashboard" state={{ from: location }} replace />
      ) : (
        children
      )}
    </>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
