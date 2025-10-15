"use client"

import { userDets } from '@/store/slices/user/userDet';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.isAuth.userId);
  const userData = useSelector((state) => state?.userData?.userData);
  
useEffect(() => {
  dispatch(userDets(userID));
}, [])

  // console.log(userData)




  return (
    <><div className='text-white text-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium molestiae sunt ipsam aliquid, labore culpa laboriosam dignissimos quam quas, saepe dolorem aut temporibus? Deleniti, pariatur illo. Nulla repellendus dolores, libero recusandae distinctio sun?</div>
 <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mt-6">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {userData?.firstName} {userData?.middleName ? userData?.middleName + ' ' : ''}{userData?.lastName}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{userData?.email}</p>

        <div className="text-gray-700 text-sm space-y-2">
          <p><span className="font-medium">Username:</span> {userData?.userName}</p>
          <p><span className="font-medium">Gender:</span> {userData?.gender}</p>
          <p><span className="font-medium">Mobile:</span> {userData?.mobileNo || 'N/A'}</p>
          <p><span className="font-medium">Address:</span> {userData?.address}</p>
          <p><span className="font-medium">Date of Birth:</span> {new Date(userData?.dob).toLocaleDateString()}</p>
          <p><span className="font-medium">Created At:</span> {new Date(userData?.createdDate).toLocaleString()}</p>
          <p><span className="font-medium">Created By:</span> User ID {userData?.createdBy}</p>
          <p><span className="font-medium">Tenant ID:</span> {userData?.tenantId}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default page