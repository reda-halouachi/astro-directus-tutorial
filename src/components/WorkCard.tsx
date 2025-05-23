import type { Work } from '../lib/directus';

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  const creator = typeof work.creator === 'object' ? work.creator : null;
  const category = typeof work.category === 'object' ? work.category : null;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {work.image && (
        <img
          src={`${import.meta.env.PUBLIC_DIRECTUS_URL}/assets/${work.image}`}
          alt={work.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{work.title}</h3>
        {creator && (
          <p className="text-sm text-gray-600 mb-2">
            by {creator.user.first_name} {creator.user.last_name}
          </p>
        )}
        {category && (
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {category.name}
          </span>
        )}
        {work.description && (
          <p className="mt-2 text-gray-600 text-sm line-clamp-2">
            {work.description}
          </p>
        )}
        <a
          href={`/works/${work.id}`}
          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          View Details
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
    </div>
  );
}
