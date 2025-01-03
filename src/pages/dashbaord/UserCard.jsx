import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { clearError, sendRequest } from '../../store/userSlice';
import Swal from 'sweetalert2';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const UserCard = ({ id, profilePhoto, name, age, height, status }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error } = useSelector(state => state.user);
  const [newStatus, setNewStatus] = useState(status);
  const { authInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: success,
      });
      dispatch(clearError());
    }
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
      dispatch(clearError());
    }
  }, [success, error, dispatch]);

  const handleSendRequest = () => {
    if (!authInfo) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please Login First",
      });
      navigate('/login');
      return;
    }

    dispatch(sendRequest(id));
    setNewStatus(true);
  };

  return (
    <div className="flex items-center justify-center bg-gray-200">
      <div className="relative py-3 px-2 rounded-lg gap-3 bg-gray-200  rounded-lg shadow-lg flex justify-between items-center">
        <Link
          onClick={(e) => {
            if (!authInfo) {
              e.preventDefault();
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login First',
              });
              navigate('/login');
            }
          }}
          to={!newStatus ? `/app/userdetails/${id}` : `/app/requested-profile-view/${id}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div className="w-36  h-36  overflow-hidden flex items-center justify-center bg-gray-300 shadow-inner">
            <img
              src={profilePhoto}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

        </Link>



        <div className=''>
          <div className="mt-4 text-center">
            <h2
              className="text-xl font-semibold text-gray-800 truncate"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name}
            </h2>
            <p
              className="text-gray-600 truncate"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Age: {age} Yrs, Height: {height}
            </p>
          </div>
          <div className="flex w-full mt-4">
            <Link
              onClick={(e) => {
                if (!authInfo) {
                  e.preventDefault();
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Login First',
                  });
                  navigate('/login');
                }
              }}
              className="w-1/2 bg-white flex justify-center items-center text-gray-800 py-1 text-[12px] rounded-lg shadow-md hover:bg-gray-100 text-center" to={!newStatus ? `/app/userdetails/${id}` : `/app/requested-profile-view/${id}`} style={{ textDecoration: 'none' }}>
              View Profile
            </Link>
            <button
              className="w-1/2 ml-2 bg-blue-600 text-white text-[10px] py-1 rounded-lg shadow-md hover:bg-blue-700"
              onClick={handleSendRequest}
              disabled={newStatus}
            >
              {newStatus ? 'Requested' : 'Send Request'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
