import React from 'react'
import NavbarClient from './NavBarClient'
import { cookies } from "next/headers"; //  <-- server-side cookie access


const Navbar = async () => {
      const cookieStore = await cookies(); 
  const token = cookieStore.get("token")?.value || null; 
  return (
<NavbarClient token={token}></NavbarClient>

      )
}

export default Navbar