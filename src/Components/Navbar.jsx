import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import assets
import logo from '../assets/logo.png'

// import icon fontawesome
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchInput () {
  return (
    <>
      <form method="post">
        <div className="flex bg-slate-50 py-2 px-3 gap-x-3 rounded-xl w-[900px]">
          <input type="text" className='bg-transparent w-full focus:outline-none' placeholder='Masukan nama barang yang dicari' />
          <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
      </form>
    </>
  )
}

function Navbar () {
  return (
    <>
      <nav className='bg-white best-layout'>
        <div className="logo">
          <img src={logo} alt="" srcSet="" className='w-28 h-16 object-cover' />
        </div>
        <div className="search-input-container flex justify-center mt-[-20px] pb-5">
        <SearchInput />
        </div>
      </nav>
    </>
  )
}

export default Navbar
