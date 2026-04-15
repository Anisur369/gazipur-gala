import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link href="/">Home</Link></li>
            <li>
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
            </li>
            <li><Link href="/allcase">All Cases</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Gazipur-GR-CR
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          {/* <li>
            <details>
              <summary>Police Station</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <details>
                    <summary>Sreepur</summary>
                    <ul className="">
                      <li><Link href="/submenu1">2026</Link></li>
                      <li><Link href="/submenu2">2027</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>kapashia</summary>
                    <ul className="">
                      <li><Link href="/submenu1">2026</Link></li>
                      <li><Link href="/submenu2">2027</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Gazipur Sadar</summary>
                    <ul className="">
                      <li><Link href="/submenu1">2026</Link></li>
                      <li><Link href="/submenu2">2027</Link></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li> */}
          <li><Link href="/allcase">All Case</Link></li>
          <li><Link href="/allcase/add">Add Case</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link href="/profile" className="btn">
          Profile
        </Link>
        <Link href="/logout" className="btn">
          Logout{"=>"}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
