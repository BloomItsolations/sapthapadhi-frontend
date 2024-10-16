
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { isProfileComplete } from "../utils/profileValidation";
import { userDetailsById } from "../store/authSlice";
import { myalldetails } from "../store/userSlice";
import { useEffect } from "react";

const UserValidateRoute = ({ children }) => {
    const location = useLocation();
    const { authInfo } = useSelector((state) => state.auth);
    const { mydetails } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userDetailsById());
        dispatch(myalldetails());
        return () => { };
    }, [dispatch]);


  return !isProfileComplete(mydetails?.userDetails) ? <Navigate to="/app/dashboard/profile" replace /> : children;
};

UserValidateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserValidateRoute;
