import { HomeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const menuItems = [
    { icon: <HomeIcon />, label: "Dashboard" },
    { icon: "👥", label: "Team" },
    { icon: "📁", label: "Projects" },
    { icon: "📅", label: "Calendar" },
    { icon: "📄", label: "Documents" },
    { icon: "📊", label: "Reports" },
  ];

  const teams = [
    { initial: "H", name: "Heroicons" },
    { initial: "T", name: "Tailwind Labs" },
    { initial: "W", name: "Workcation" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-4">
          <svg
            className="w-8 h-8 text-indigo-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <nav className="mt-4"  style={{ height:60, width: 60 }}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 px-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Your teams
          </h3>
          <div className="mt-2 space-y-1">
            {teams.map((team, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center py-2 text-sm text-gray-400 hover:text-white"
              >
                <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-2 text-xs">
                  {team.initial}
                </span>
                {team.name}
              </a>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-64 p-4">
          <a
            href="#"
            className="flex items-center text-sm text-gray-400 hover:text-white"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            Settings
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Top navigation */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-md p-2 w-64"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://placekitten.com/100/100"
                      alt="Profile"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      Tom Cook
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-5">
          {/* Add your main content here */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-96"></div>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
