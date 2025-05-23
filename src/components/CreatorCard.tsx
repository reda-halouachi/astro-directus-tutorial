import type { Creator } from '../lib/directus';

interface CreatorCardProps {
  creator: Creator;
}

export default function CreatorCard({ creator }: CreatorCardProps) {
  const user = typeof creator.user === 'object' ? creator.user : null;
  
  if (!user) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        {user.avatar && (
          <img
            src={`${import.meta.env.PUBLIC_DIRECTUS_URL}/assets/${user.avatar}`}
            alt={`${user.first_name} ${user.last_name}`}
            className="h-16 w-16 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {user.first_name} {user.last_name}
          </h3>
          {creator.specialization && (
            <p className="text-sm text-gray-600">{creator.specialization}</p>
          )}
        </div>
      </div>
      {creator.bio && (
        <p className="mt-4 text-gray-600 text-sm line-clamp-3">{creator.bio}</p>
      )}
      <a
        href={`/creators/${creator.id}`}
        className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
      >
        View Profile
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
}
