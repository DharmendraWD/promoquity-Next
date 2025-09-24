import React from 'react'
import Link from 'next/link';

function Button2({label, link, clr, widthValue}) {
  return (
     <Link href={link}
                        className={`lg:inline-block bg-white w-${widthValue} text-${clr} font-semibold px-6 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50`}
                    >
                      {label}
                    </Link>
  )
}

export default Button2