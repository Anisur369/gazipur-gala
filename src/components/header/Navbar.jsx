import Link from "next/link";
import DropdownMenu from "./DropdownMenu";



function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">

      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link href="/">Home</Link></li>
            {/* <li>
              <a>Police Station</a>
              <ul className="p-2">
                <li><Link href="/submenu1">kapashia</Link></li>
                <li><Link href="/submenu2">Gazipur Sadar</Link></li>
                <li>
                  <a>Police Station</a>
                  <ul className="p-2">
                    <li><Link href="/submenu1">kapashia</Link></li>
                    <li><Link href="/submenu2">Gazipur Sadar</Link></li>
                  </ul>
                </li>
              </ul>
            </li> */}
            <li><Link href="/allcase">All Cases</Link></li>
            <li><Link href="/allcase/add">Add Cases</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Gazipur-CR-GR
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          <li><Link href="/">Home</Link></li>
          <li><Link href="/allcase">All Case</Link></li>

          {/* 🔴 GAZIPUR CR */}
            <DropdownMenu title="Gazipur CR" basePath="gazipurcr" />

          {/* 🔵 GAZIPUR GR */}
          <DropdownMenu title="Gazipur GR" basePath="gazipurgr" />


          <li><Link href="/allcase/add">Add Case</Link></li>

        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
            <span className="badge badge-xs badge-primary indicator-item">1</span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/anis.jpg" />
            </div>
          </div>
          <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Navbar;