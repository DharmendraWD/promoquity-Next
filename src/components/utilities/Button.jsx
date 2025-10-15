import React from 'react'
import Link from 'next/link'

function Button({link, label}) {
  return (
                 <div className="text-center mt-4">
          <Link href={link} className="text-sm font-semibold border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
           {label}
          </Link>
        </div>
  )
}

export default Button