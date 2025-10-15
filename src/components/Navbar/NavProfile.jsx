
"use client";
import React, { use, useEffect, useState } from 'react'
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; 
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '@/store/slices/Login/isAuth';
import { userDets } from '@/store/slices/user/userDet';



function NavProfile() {

    const [submenuOpen, setSubmenuOpen] = useState('');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
          const router = useRouter();

    const token = useSelector((state) => state.isAuth.token);
    const useId = useSelector((state) => state.isAuth.userId);

          const dispatch = useDispatch();


    
      const toggleSubmenu = (item) => {
        setSubmenuOpen((prev) => (prev === item ? '' : item));
      };
  

    const handleLogoutConfirm = () => {
      dispatch(setAuth({ token:"", userId:"" }));

        document.cookie = 'token=; path=/; max-age=0';
    document.cookie = 'userId=; path=/; max-age=0';
      
      setShowLogoutModal(false);
     router.push('/');
      window.location.reload();

      };
// -----------get user profiele data 
const userData = useSelector((state) => state?.userData?.userData);
// const loading = useSelector((state) => state?.userData?.loading);
useEffect(() => {
dispatch(userDets(useId));
}, [])


  return (
    <div className='relative'>
  
       <div className="flex space-x-4 items-center">
          {
 token &&         
       <div className="relative group inline-block">
  {/* Trigger area */}
  <div className="cursor-pointer">
    <img
      className="md:w-[35px] w-[28px] rounded-full mx-auto"
      src="https://randomuser.me/api/portraits/women/82.jpg"
      alt=""
    />
    <button className="text-[white]  md:flex hidden text-[14px] hover:text-indigo-600 items-center gap-1">
     Hi, {userData?.firstName || ''}
      <FaChevronDown size={9} />
    </button>
  </div>

  {/* Dropdown menu mobile */}
  <div className="absolute hidden md:block top-full md:left-[-20px] left-[-20px] w-[ -webkit-fill-available ] bg-[white] border border-grey-200 rounded shadow-lg opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top z-50">
    <p
      className="block md:hidden text-[14px] px-2 py-1 text-[black] hover:bg-grey-100"
    >
     {"user?.firstName"  || ''}
    </p>
    

    <div
      className="flex gap-2 items-center px-2 py-1 cursor-pointer text-[red] hover:text-red-600 transition"
      onClick={() => setShowLogoutModal(true)}
    >
      <p className="mb-0">Log Out</p>
    </div>
  </div> 
 
</div>
    }

       
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

// "use client";
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';

// const NavProfile = () => {
//     const token = useSelector((state) => state.isAuth.token);
//     const useId = useSelector((state) => state.isAuth.userId);
  
//     console.log(useId)
//   return (
//     <div >NavProfile Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora doloremque obcaecati maxime suscipit officia molestias facere praes</div>
//   )
// }

// export default NavProfile
