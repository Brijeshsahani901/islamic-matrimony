'use client';
import { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="bg-red-50 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 left-0 w-full bg-white shadow z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <span className="text-red-600 text-3xl">❤️</span>
            <span className="text-xl font-bold text-red-700 tracking-wide">
              Marrying Muslims
            </span>
          </div>

          {/* Avatar + Dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="h-10 w-10 rounded-full overflow-hidden border border-gray-300 shadow-sm hover:ring-2 ring-red-500 transition">
              <img
                src="https://modern-islamic-matrimony-frontend.vercel.app/placeholder-user.jpg"
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl border border-white/10 bg-white shadow-xl p-1 text-sm text-gray-800 focus:outline-none z-50"
            >
              <div className="px-4 py-3 border-b">
                <p className="font-semibold text-gray-900">{user?.username || 'User'}</p>
                <p className="text-sm text-gray-500">{user?.email || 'email@example.com'}</p>
              </div>

              <MenuItem>
                <button
                  onClick={() => router.push('/profile')}
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 transition"
                >
                  <UserIcon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                  Profile
                </button>
              </MenuItem>

              <MenuItem>
                <button
                  className="group flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-red-100 transition"
                  onClick={() => {
                    localStorage.clear();
                    sessionStorage.clear();
                    router.push('/login');
                  }}
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500" />
                  <span className="text-red-600 font-semibold">Logout</span>
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </header>

      {/* Welcome Message */}
      <section className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 animate-fade-up">
        <h2 className="text-3xl font-extrabold text-gray-800">Welcome back, {user?.username || 'User'}! 👋</h2>
        <p className="text-gray-500 mt-1">
          {`Your profile is complete. Start exploring matches now.`}
        </p>
      </section>

      {/* Stats + Cards */}
      <section className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up animate-delay-200">
        {/* Profile Views */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
          <p className="text-gray-500 text-sm">Profile Views</p>
          <h3 className="text-4xl font-bold mt-2 text-gray-800">24</h3>
          <p className="text-sm text-green-500 mt-1">+12% from last week</p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 gap-6">
          <div
            onClick={() => router.push('/search')}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start gap-4 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            <span className="text-red-600 text-3xl">🔍</span>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Find Matches</h4>
              <p className="text-gray-500 text-sm">Discover profiles that match your preferences.</p>
            </div>
          </div>

          <div
            onClick={() => router.push('/profile')}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start gap-4 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            <span className="text-red-600 text-3xl">👤</span>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">My Profile</h4>
              <p className="text-gray-500 text-sm">View and edit your profile information.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
