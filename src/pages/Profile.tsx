import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user, loading } = useAuth();
  console.log(user);

  if (loading) {
    return <p>loading......</p>;
  }
  if (!user) {
    return <p className="text-center">User not found. Please log in.</p>;
  }
  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-2xl p-8 text-center">
      <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Name: </span>
        {user.displayName || 'No name'}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Email: </span>
        {user.email}
      </p>
    </div>
  );
}

export default Profile;
