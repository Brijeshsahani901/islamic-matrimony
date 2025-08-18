

"use client";
import { useState, useEffect } from "react";
import FilterSidebar from "@/component/search/filterSidebar";
import { useQuery } from "@tanstack/react-query";
import ProfileGrid from "@/component/search/profileGrid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import ProfileList from "@/component/search/profileList";
import { FaTh, FaList, FaSearch, FaFilter } from "react-icons/fa";
import { fetchProfiles } from "@/api/profile.api";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default function Search() {
  const [user, setUser] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [filters, setFilters] = useState({
    age: "",
    country: "",
    sect: "",
    status: "",
    search: "",
  });

  const [view, setView] = useState("grid"); // grid or list
  const [sortOrder, setSortOrder] = useState("newest"); // newest or oldest
  const debouncedSearch = useDebounce(filters.search);

  const queryParams = {
    ...(filters.gender &&
      filters.gender !== "All" && { gender: filters.gender }),
    ...(filters.min_age != null &&
      filters.max_age != null && {
        min_age: filters.min_age,
        max_age: filters.max_age,
      }),
    ...(filters.country &&
      filters.country !== "All" && { country: filters.country }),
    ...(filters.sect && filters.sect !== "All" && { sect: filters.sect }),
    ...(filters.status &&
      filters.status !== "All" && { marital_status: filters.status }),
    ...(filters.annual_income &&
      filters.annual_income !== "All" && {
        annual_income: filters.annual_income,
      }),
    ...(filters.search && { search: filters.search }),
    sort: sortOrder === "newest" ? "desc" : "asc",
    per_page: 50,
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const {
    data: profiles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profiles", queryParams],
    queryFn: () => fetchProfiles(queryParams),
    keepPreviousData: true,
  });

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 w-screen bg-white shadow-md z-50">
        <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          {/* <span className="text-red-600 text-2xl font-bold">❤️</span> */}
            <img
        src="/images/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="hover:scale-110 transition-transform duration-500 ease-in-out"
        priority
      />
          <span className="text-xl font-semibold text-red-700">Marrying Muslims</span>
       
        </Link>

          {/* Search Bar - Mobile */}
          {isMobile && (
            <div className="flex-1 mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          )}

          {/* Nav Links - Desktop */}
         <nav className="flex space-x-4 md:space-x-6 text-gray-700 font-medium mr-10">

            <Link href="/dashboard" className="hover:text-red-600 transition gap-4">
              Dashboard
            </Link>
            <Link href="/search" className="text-red-600 font-semibold">
              Search
            </Link>
            <Link href="/profile" className="hover:text-red-600 transition">
              Profile
            </Link>
          </nav>

          {/* User Menu */}
          <Menu as="div" className="relative">
            <MenuButton className="h-10 w-10 rounded-full overflow-hidden border-2 border-red-100 cursor-pointer">
              <img
                src="https://modern-islamic-matrimony-frontend.vercel.app/placeholder-user.jpg"
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-1"
            >
              <div className="px-4 py-3 border-b">
                <p className="font-medium text-gray-900">
                  {user?.username || "Loading..."}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {user?.email || ""}
                </p>
              </div>

              <MenuItem>
                <Link
                  href="/profile"
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 transition"
                >
                  <UserIcon className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
                  <span>Profile</span>
                </Link>
              </MenuItem>

              <MenuItem>
                <button
                  className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 hover:bg-red-50 text-red-600"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 py-6 mt-16">
        <div className="flex flex-col md:flex-row gap-6 max-w-[95%] mx-auto">
          {/* Sidebar - Desktop */}
          {!isMobile && (
        <div className="w-full md:w-72 flex-shrink-0 sticky top-[80px] self-start max-h-[calc(100vh-80px)]">
  <FilterSidebar
    filters={filters}
    setFilters={setFilters}
    clearFilters={clearFilters}
  />
</div>


          )}

          {/* Mobile Filters Button */}
          {isMobile && (
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center justify-center gap-2 mb-4 w-full py-2 bg-red-600 text-white rounded-lg shadow"
            >
              <FaFilter /> Filters
            </button>
          )}

          {/* Mobile Filters Sidebar */}
          {isMobile && mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Background overlay */}
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                {/* Sidebar content */}
                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full h-full w-4/5 fixed left-0 top-0"
                  role="dialog"
                >
                  <div className="bg-white p-4 h-full overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Filters</h2>
                      <button
                        onClick={() => setMobileFiltersOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>
                    <FilterSidebar
                      filters={filters}
                      setFilters={setFilters}
                      clearFilters={clearFilters}
                    />
                    {/* <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="mt-4 w-full py-2 bg-red-600 text-white rounded-lg"
                    >
                      Apply Filters
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1 w-full">
            {/* Search and Filter Controls - Desktop */}
            {!isMobile && (
              <div className="mb-6 bg-white p-4 rounded-xl shadow-sm">
                <div className="flex flex-wrap items-stretch justify-between gap-4">
                  {/* Search Input */}
                  <div className="relative flex-grow min-w-[250px] max-w-full sm:max-w-md">
                    <input
                      type="text"
                      placeholder="Search by name, profession, etc..."
                      value={filters.search}
                      onChange={(e) =>
                        setFilters({ ...filters, search: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  </div>

                  {/* View + Sort Container */}
                  <div className="flex flex-wrap items-center gap-3 justify-between w-full sm:w-auto">
                    {/* View Toggle */}
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setView("grid")}
                        className={`p-2 rounded-lg ${
                          view === "grid"
                            ? "bg-white shadow text-red-600"
                            : "text-gray-600"
                        }`}
                        aria-label="Grid view"
                      >
                        <FaTh />
                      </button>
                      <button
                        onClick={() => setView("list")}
                        className={`p-2 rounded-lg ${
                          view === "list"
                            ? "bg-white shadow text-red-600"
                            : "text-gray-600"
                        }`}
                        aria-label="List view"
                      >
                        <FaList />
                      </button>
                    </div>

                    {/* Sort Dropdown */}
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-full sm:w-auto"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">
                Search Results
              </h1>
              {!isLoading && (
                <p className="text-sm text-gray-500">
                  {profiles.length}{" "}
                  {profiles.length === 1 ? "profile" : "profiles"} found
                </p>
              )}
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-red-300 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : isError ? (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Error loading profiles
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>Please try again later or refresh the page.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : profiles.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No profiles found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
                <div className="mt-6">
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            ) : view === "grid" ? (
              <ProfileGrid profiles={profiles} />
            ) : (
              <ProfileList profiles={profiles} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

