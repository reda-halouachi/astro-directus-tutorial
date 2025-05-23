import { useAuth } from '../lib/AuthContext';

export default function Navbar() {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return <div className="h-16 bg-white shadow"></div>;
  }

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-xl font-bold text-indigo-600">
                Portfolio
              </a>
            </div>
            <div className="ml-6 flex space-x-8">
              <a
                href="/works"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700"
              >
                Works
              </a>
              <a
                href="/creators"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700"
              >
                Creators
              </a>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Ciao, {user.first_name}</span>
                {user.avatar && (
                  <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="h-8 w-8 rounded-full"
                  />
                )}
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a
                href="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
