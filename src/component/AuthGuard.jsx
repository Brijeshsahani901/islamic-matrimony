"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";
import toast from "react-hot-toast";

const publicPaths = ["/", "/login", "/register"];

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  useEffect(() => {
    setIsAuthChecked(false);
    setIsCheckingAuth(false);

    if (!pathname) return;

    if (publicPaths.includes(pathname)) {
      setIsAuthChecked(true);
      setIsCheckingAuth(false);
      return;
    }

    const idToken = sessionStorage.getItem("token");
    console.log(idToken)

    if (!idToken) {
      setIsCheckingAuth(true);

      setTimeout(() => {
        toast.error("You have no token. Please login.", {
          duration: 4000,
          position: "top-center",
          style: {
            borderRadius: "8px",
            background: "#ffe3e3",
            color: "#d32f2f",
            fontWeight: "bold",
            fontSize: "16px",
          },
        });

        router.replace("/login");
      }, 500);
    } else {
      setIsAuthChecked(true);
      setIsCheckingAuth(false);
    }
  }, [pathname, router]);

  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <svg
            className="animate-spin h-10 w-10 text-red-600 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <p className="text-gray-700 text-lg font-medium">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (isAuthChecked) {
    return <>{children}</>;
  }

  return null;
}
