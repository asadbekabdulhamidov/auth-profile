// src/pages/Profile.tsx
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';

import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase/firebase.config';

type ProfileFormValues = {
  displayName: string;
  photoUrl: string;
};

function Profile() {
  const { user, loading, logOut } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      displayName: user?.displayName || '',
      photoUrl: user?.photoURL || '',
    },
  });

  // user o'zgarsa (yoki sahifa refresh bo'lsa) formani yangilab turish
  useEffect(() => {
    if (user) {
      reset({
        displayName: user.displayName || '',
        photoUrl: user.photoURL || '',
      });
    }
  }, [user, reset]);

  const onSubmit: SubmitHandler<ProfileFormValues> = async (values) => {
    if (!auth.currentUser) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: values.displayName,
        photoURL: values.photoUrl || null,
      });

      // hozircha oddiy console bilan chek qilamiz
      console.log('Profile updated:', values);
      // keyin toast qo'shsak bo'ladi
    } catch (error) {
      console.error('Update profile error:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Checking authentication...</p>
      </div>
    );
  }

  if (!user) {
    // ProtectedRoute baribir bu sahifani ko'rsatmaydi,
    // lekin type-safety uchun
    return null;
  }

  const emailStatus = user.emailVerified ? 'Verified' : 'Not verified';

  return (
    <div className="w-full max-w-[1100px] mx-auto py-10">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Profile Settings
        </h1>
        <p className="text-sm text-gray-500">Manage your account information</p>
      </div>

      {/* Yuqori katta karta */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
        {/* User header */}
        <div className="flex items-center gap-4 mb-6">
          {/* Avatar */}
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User avatar'}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-semibold">
              {(user.displayName || user.email || 'U').charAt(0).toUpperCase()}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <p className="font-semibold text-gray-900">
              {user.displayName || 'No name'}
            </p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <span className="inline-block px-3 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
              Active Account
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Display name */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Display Name
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
              {...register('displayName', {
                required: 'Display name is required',
                minLength: { value: 3, message: 'Min 3 characters' },
              })}
            />
          </div>

          {/* Photo URL */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://images.unsplash.com/..."
              {...register('photoUrl')}
            />
            <p className="text-xs text-gray-400">
              Enter a URL to your profile picture
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-xl py-3 text-sm font-medium text-white bg-gradient-to-r from-[#2B7FFF] to-[#4F39F6] disabled:opacity-70"
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>

            <button
              type="button"
              onClick={logOut}
              className="flex-1 rounded-xl py-3 text-sm font-medium text-white bg-red-500 hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </form>
      </div>

      {/* Pastdagi Account Information kartasi */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Account Information
        </h2>

        <div className="divide-y divide-gray-200 text-sm">
          <div className="flex justify-between py-3">
            <span className="text-gray-500">User ID</span>
            <span className="text-gray-900">{user.uid}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-500">Email</span>
            <span className="text-gray-900">{user.email}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-500">Account Status</span>
            <span
              className={
                emailStatus === 'Verified'
                  ? 'text-green-600'
                  : 'text-yellow-600'
              }
            >
              {emailStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
