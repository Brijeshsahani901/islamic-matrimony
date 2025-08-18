"use client";

import { useState } from "react";
import {
  personalInfoUpdated,
  preferencesUpdated,
  careerEducationUpdated,
  privacyUpdated,
  getUserProfileById,
} from "@/api/profile.api";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import ProfileTabs from "@/component/profilePage/profileTabs";
import UserInfoCard from "@/component/profilePage/userInfoCard";
import PersonalForm from "@/component/profilePage/personalForm";
import PartnerPreferencesForm from "@/component/profilePage/PartenerPreferenceForm";
import CareerForm from "@/component/profilePage/careerForm";
import PrivacyForm from "@/component/profilePage/privacyForm";
import Link from "next/link";
import Image from "next/image";

import {
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Personal");
  const queryClient = useQueryClient();

  // Get user ID from localStorage
  const userId =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))?.id
      : null;

  const { data, isLoading } = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => getUserProfileById(userId),
    enabled: !!userId,
  });

  const userProfile = data?.data?.user;

  // -------------------------
  // Mutation hooks
  // -------------------------
  const invalidateProfile = () => {
    queryClient.invalidateQueries({ queryKey: ["userProfile", userId] });
  };

  const personalMutation = useMutation({
    mutationFn: personalInfoUpdated,
    onSuccess: invalidateProfile,
  });

  const preferencesMutation = useMutation({
    mutationFn: preferencesUpdated,
    onSuccess: invalidateProfile,
  });

  const careerMutation = useMutation({
    mutationFn: careerEducationUpdated,
    onSuccess: invalidateProfile,
  });

  const privacyMutation = useMutation({
    mutationFn: privacyUpdated,
    onSuccess: invalidateProfile,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="relative top-0 left-0 w-full bg-white shadow z-50">
        <div className="mx-10 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {/* <span className="text-red-600 text-4xl font-bold">❤️</span> */}
              <img
                              src="/images/Logo.PNG"
                              alt="Logo"
                              width={100}
                              height={100}
                              className="hover:scale-110 transition-transform duration-500 ease-in-out"
                              priority
                            />
            <span className="text-xl font-semibold text-red-700">
              Marrying Muslims
            </span>
          </div>

          <Link href="/dashboard" className="text-lg">
            Dashboard
          </Link>

          {/* Avatar */}
          <Menu as="div" className="relative">
            <MenuButton className="h-10 w-10 rounded-full overflow-hidden border border-gray-300 cursor-pointer">
              <img
                src="https://modern-islamic-matrimony-frontend.vercel.app/placeholder-user.jpg"
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </MenuButton>

            <MenuItems
              anchor="bottom end"
              className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl border border-white/10 bg-white shadow-lg p-1 text-sm text-gray-800"
            >
              <div className="px-4 py-3 border-b">
                <p className="font-medium text-gray-900">ajay</p>
                <p className="text-sm text-gray-500">
                  shajaykumarsh19@gmail.com
                </p>
              </div>

              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  <UserIcon className="w-5 h-5 text-gray-500" />
                  Profile
                </button>
              </MenuItem>

              <MenuItem>
                <button
                  className="group flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 hover:bg-red-100 transition"
                  onClick={() => {
                    sessionStorage.clear();
                    localStorage.clear();
                    window.location.href = "/";
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

      <div className="max-w-4xl mx-auto p-4">
        <UserInfoCard userProfile={userProfile} />

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="bg-white rounded shadow p-6 mt-4">
          {activeTab === "Personal" && (
            <PersonalForm
              initialData={userProfile?.personalInfo}
              onSave={(data) => personalMutation.mutate(data)}
            />
          )}
          {activeTab === "Preferences" && (
            <PartnerPreferencesForm
              initialData={userProfile?.preferences}
              onSave={(data) => preferencesMutation.mutate(data)}
            />
          )}
          {activeTab === "Career" && (
            <CareerForm
              initialData={userProfile?.careerInfo}
              onSave={(data) => careerMutation.mutate(data)}
            />
          )}
          {activeTab === "Privacy" && (
            <PrivacyForm
              initialData={userProfile?.privacySettings}
              onSave={(data) => privacyMutation.mutate(data)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
