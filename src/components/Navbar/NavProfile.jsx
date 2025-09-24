import React, { useEffect, useState } from 'react'
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/slices/auth/LoginSlice';
import Loading from '../utilities/loading/Loading';
import { useDispatch, useSelector } from 'react-redux';


import {userProfile} from '../../redux/slices/user/Userslice'



function NavProfile() {
    const [submenuOpen, setSubmenuOpen] = useState('');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector((state) => state.login.loading);
    
      const toggleSubmenu = (item) => {
        setSubmenuOpen((prev) => (prev === item ? '' : item));
      };
  

    const handleLogoutConfirm = () => {
  
      dispatch(logoutUser());
      navigate('/');
      setShowLogoutModal(false);
      };
    
// -----------get user profiele data 
const userData = useSelector((state) => state.user);

useEffect(() => {
  dispatch(userProfile());
}, []);

  return (
    <div className='relative'>
       {
  isLoading && <> 
  <div className="flex absolute top-[19px]-translate-y-1/2 justify-center w-full ">
      <Loading></Loading>

</div>
  </>
}
       <div className="flex space-x-4 items-center">        
       <div className="relative group inline-block">
  {/* Trigger area */}
  <div className="cursor-pointer">
    <img
      className="md:w-[35px] w-[28px] rounded-full mx-auto"
      src="https://randomuser.me/api/portraits/women/82.jpg"
      alt=""
    />
    <button className="text-[white]  md:flex hidden text-[14px] hover:text-indigo-600 items-center gap-1">
     Hi, {userData?.user?.firstName || ''}
      <FaChevronDown size={9} />
    </button>
  </div>

  {/* Dropdown menu mobile */}
  <div className="absolute hidden md:block top-full md:left-[-20px] left-[-20px] w-[ -webkit-fill-available ] bg-[white] border border-grey-200 rounded shadow-lg opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top z-50">
    <p
      className="block md:hidden text-[14px] px-2 py-1 text-[black] hover:bg-grey-100"
    >
     {userData?.user?.firstName || ''}
    </p>
    

    <div
      className="flex gap-2 items-center px-2 py-1 cursor-pointer text-[red] hover:text-red-600 transition"
      onClick={() => setShowLogoutModal(true)}
    >
      <p className="mb-0">Log Out</p>
    </div>
  </div>
</div>

       
            </div>
            {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavProfile
