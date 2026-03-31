import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function HomeNav () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const mobileMenuRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !mobileButtonRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
    }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Home', href: '/'},
    { name: 'Founders', href: '/founders'},
  ];

  return (
    <>
    {/* Unique navbar */}
    <nav className="relative bg-[#042d6d] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div ref={mobileMenuRef} className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
            ref={mobileButtonRef}
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[#ffffff] hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="absolute -inset-0.5"></span>
              {/* Hamburger icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`size-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Close icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`size-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
              >
                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Logo and navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                src="https://placehold.co/32x32?text=Logo"
                alt="logo"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isCurrent = location.pathname === item.href;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        isCurrent
                          ? 'bg-[#032253] text-white'
                          : 'text-white hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-auto sm:pr-0">
              <a
                href="/register"
                className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-all border border-white/10"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="block sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => {
              const isCurrent = location.pathname === item.href;

              return (
                <a
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isCurrent
                    ? 'bg-gray-950/50 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                >
                {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
export default HomeNav;