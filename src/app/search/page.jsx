
'use client'
import { useState,useEffect } from 'react'
import FilterSidebar from '@/component/search/filterSidebar'
import { useQuery } from '@tanstack/react-query'
import ProfileGrid from '@/component/search/profileGrid'
import ProfileCard from '@/component/search/profileCard'
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import ProfileList from '@/component/search/profileList'
import { FaTh, FaList } from 'react-icons/fa'
import { fetchProfiles } from '@/api/profile.api'
import Link from 'next/link'

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export default function Search() {
 const [user, setUser] = useState(null)

  const [filters, setFilters] = useState({
    age: "",
    country: "",
    sect: '',
    status: '',
    search: '',
  })

  const [view, setView] = useState('grid') // grid or list
  const [sortOrder, setSortOrder] = useState('newest') // newest or oldest
   const debouncedSearch = useDebounce(filters.search)

const queryParams = {
  ...(filters.gender && filters.gender !== 'All' && { gender: filters.gender }),
  ...(filters.min_age != null && filters.max_age != null && {
    min_age: filters.min_age,
    max_age: filters.max_age,
  }),
  ...(filters.country && filters.country !== 'All' && { country: filters.country }),
  ...(filters.sect && filters.sect !== 'All' && { sect: filters.sect }),
  ...(filters.status && filters.status !== 'All' && { marital_status: filters.status }),
  ...(filters.annual_income && filters.annual_income !== 'All' && { annual_income: filters.annual_income }),
  ...(filters.search && { search: filters.search }),
  sort: sortOrder === 'newest' ? 'desc' : 'asc',
  per_page: 50,
};


  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const {
    data: profiles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['profiles', queryParams],
    queryFn: () => fetchProfiles(queryParams),
    keepPreviousData: true,
  })

console.log(profiles)
  // const { data: profiles = [], isLoading, isError } = useProfiles(filters, sortOrder)

const clearFilters = () => {
  setFilters({
    age: "",
    country: "",
    sect: "",
    status: "",
    search: "",
  });
};


  return (
    <>
     <header className="sticky top-0 left-0 w-full bg-white shadow z-50">
  <div className="mx-5 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
    {/* Left - Logo */}
    <div className="flex items-center space-x-1">
      <span className="text-red-600 text-4xl font-bold">❤️</span>
      <span className="text-xl font-semibold text-red-700">WIFE4LIFE</span>
    </div>

    {/* Center - Nav Links */}
   <nav className="hidden sm:flex space-x-8 text-gray-700 font-medium">
  <Link href="/dashboard" className="hover:text-red-600 transition">
    Dashboard
  </Link>
  <Link href="/search" className="hover:text-red-600 transition">
    Search
  </Link>
  <Link href="/profile" className="hover:text-red-600 transition">
    Profile
  </Link>
</nav>

    {/* Right - User Menu */}
    <Menu as="div" className="relative">
      <MenuButton className="h-10 w-10 rounded-full overflow-hidden border cursor-pointer border-gray-300">
        <img
          src="https://modern-islamic-matrimony-frontend.vercel.app/placeholder-user.jpg"
          alt="User Avatar"
          className="h-full w-full object-cover"
        />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl border border-white/10 bg-white shadow-lg p-1 text-sm text-gray-800 focus:outline-none"
      >
        <div className="px-4 py-3 border-b">
        <p className="font-medium text-gray-900">{user?.username || "Loading..."}</p>
<p className="text-sm text-gray-500">{user?.email || ""}</p>

        </div>

        <MenuItem>
          <button
            onClick={() => window.location.href = "/profile"}
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
              localStorage.clear()
              window.location.href = "/"
            }}
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500" />
            <span className="text-red-600 font-medium">Logout</span>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</header>

    <main className="flex min-h-screen bg-gray-100">
       
      <div className="mx-5 pl-[10vh] my-5">
        <FilterSidebar filters={filters} setFilters={setFilters} clearFilters={clearFilters} />
      </div>
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Search Profiles</h1>
            <p className="text-sm text-gray-500">
              {isLoading
                ?  "Searching" 
                : `Found ${profiles.length} profiles matching your criteria`}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded ${view === 'grid' ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} border`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded ${view === 'list' ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} border`}
            >
              <FaList />
            </button>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="ml-4 border rounded px-3 py-2 text-sm focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {isLoading ? (
       <div className="flex justify-center items-center h-64">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-red-300 border-dashed rounded-full animate-spin"></div>
       
      </div>
    </div>
        ) : isError ? (
          <div className="text-red-500">Error loading profiles.</div>
        ) : view === 'grid' ? (
          <ProfileGrid profiles={profiles} />
        ) : (
          <ProfileList profiles={profiles} />
        )}
      </div>
    </main>
    </>
  )
}

