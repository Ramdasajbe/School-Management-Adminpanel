import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuOpen from "@mui/icons-material/MenuOpen";
import Close from "@mui/icons-material/Close";
import Notifications from "@mui/icons-material/Notifications";
import ImageWithLoader from "../components/ImageWithLoader";
import DataTable from "../components/TableWithPagination";
// Child components for dynamic content
const HomeContent = () => <div>Home Page Content</div>;
const SettingsContent = () => <div>Settings Page Content</div>;
const LogoutContent = () => <div>Logout Page Content</div>;

export default function DashBoard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];
  // Sample data
  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "John Doe",
      email: "john@example.com",
      status: (
        <span className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs">
          Active
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      status: (
        <span className="bg-red-100 text-red-600 py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      ),
      action: (
        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
          Edit
        </button>
      ),
    },
    // Add more data rows as needed
  ];
  // Mapping menu items to corresponding content components
  const menuItems = [
    {
      id: "home",
      icon: <HomeIcon />,
      label: "Home",
      component: <HomeContent />,
    },
    {
      id: "settings",
      icon: <SettingsIcon />,
      label: "Settings",
      component: <SettingsContent />,
    },
    {
      id: "logout",
      icon: <LogoutIcon />,
      label: "Logout",
      component: <LogoutContent />,
    },
    {
      id: "home",
      icon: <HomeIcon />,
      label: "Home",
      component: <HomeContent />,
    },
    {
      id: "settings",
      icon: <SettingsIcon />,
      label: "Settings",
      component: <SettingsContent />,
    },
    {
      id: "logout",
      icon: <LogoutIcon />,
      label: "Logout",
      component: <LogoutContent />,
    },
    {
      id: "home",
      icon: <HomeIcon />,
      label: "Home",
      component: <HomeContent />,
    },
    {
      id: "settings",
      icon: <SettingsIcon />,
      label: "Settings",
      component: <SettingsContent />,
    },
    {
      id: "logout",
      icon: <LogoutIcon />,
      label: "Logout",
      component: <LogoutContent />,
    },
    {
      id: "home",
      icon: <HomeIcon />,
      label: "Home",
      component: <HomeContent />,
    },
    {
      id: "settings",
      icon: <SettingsIcon />,
      label: "Settings",
      component: <SettingsContent />,
    },
    {
      id: "logout",
      icon: <LogoutIcon />,
      label: "Logout",
      component: <LogoutContent />,
    },
    {
      id: "home",
      icon: <HomeIcon />,
      label: "Home",
      component: <HomeContent />,
    },
    {
      id: "settings",
      icon: <SettingsIcon />,
      label: "Settings",
      component: <SettingsContent />,
    },
    {
      id: "logout",
      icon: <LogoutIcon />,
      label: "Logout",
      component: <LogoutContent />,
    },
    {
      id: "home",
      icon: <HomeIcon />,
      label: "Home",
      component: <HomeContent />,
    },
    {
      id: "settings",
      icon: <SettingsIcon />,
      label: "Settings",
      component: <SettingsContent />,
    },
    {
      id: "logout",
      icon: <LogoutIcon />,
      label: "Logout",
      component: <LogoutContent />,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar with Toggle Button and User Name */}
      <div className="flex items-center justify-between w-full p-2 border-b-2 border-bgSeCo h-[10%]">
        <button
          className={`bg-baCo text-teCo transition-all duration-300 transform z-50 ml-8`}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <span className="flex justify-center items-center w-10 h-10 bg-red-100 rounded-full mr-6 text-red-400">
              <Close />
            </span>
          ) : (
            <MenuOpen />
          )}
        </button>

        <div>
          <div className="flex items-center w-full mr-8">
            <span className="flex justify-center items-center w-10 h-10 bg-blue-100 rounded-full mr-6 text-blue-400">
              <Notifications />
            </span>

            <ImageWithLoader
              src={"https://via.placeholder.com/400"}
              alt={"Sample"}
              className={" w-12 h-12 object-cover rounded-full"}
            />
            <div className={`px-3 flex flex-col items-center`}>
              <span className="text-teCo font-medium text-lg">User Name</span>
              <span className="text-teCo text-sm">Role</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-grow relative h-[90%] ">
        {/* Sidebar */}
        <div
          className={`bg-baCo text-white transition-all duration-300 transform z-50 border-r-2 border-r-bgCoSe ${
            isSidebarOpen
              ? "w-72" // Full width when open
              : "w-0 md:w-16" // Hidden on small screens, collapsed on medium/large screens
          } ${!isSidebarOpen && "hidden sm:block"} sm:${
            isSidebarOpen ? "block" : "hidden"
          } h-[90%] overflow-hidden relative`}
        >
          {/* Menu Items */}
          <div className="h-[85%] overflow-y-auto hide-scrollbar">
            <div className="flex flex-col items-center">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center space-x-4 my-2 py-2 cursor-pointer w-full`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className="flex items-center w-full">
                    <span
                      className={`px-5 ${
                        activeTab === item.id ? "text-blue-500" : "text-teCo"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {isSidebarOpen && (
                      <span
                        className={`ml-2 ${
                          activeTab === item.id ? "text-blue-400" : "text-teCo"
                        }`}
                      >
                        {item.label}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logout at Bottom */}
          <div className="absolute  bottom-0 left-0 w-full flex items-center px-4 bg-baCo">
            <ImageWithLoader
              src={"https://via.placeholder.com/400"}
              alt={"Sample"}
              className={"w-10 h-10 object-cover rounded-full"}
            />

            {isSidebarOpen && (
              <div className={`pl-3 flex flex-col items-start`}>
                <span className="text-teCo font-medium text-lg">User Name</span>
                <span className="text-teCo text-sm">Logout</span>
              </div>
            )}

            {isSidebarOpen && (
              <span className="pl-4 text-red-500">
                <LogoutIcon />
              </span>
            )}
          </div>
        </div>

        {/* Custom CSS to Hide Scrollbar */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
          }

          .hide-scrollbar {
            -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
            scrollbar-width: none; /* Hide scrollbar for Firefox */
          }
        `}</style>

        {/* Main content area */}
        <div
          className={`flex-grow transition-all duration-300 bg-baCoSe relative ${
            isSidebarOpen ? "ml-0 hidden lg:block" : "ml-0 md:ml-0"
          }`}
        >
          {/* Main content */}
          <div className="p-4">
            <DataTable
              title={"Dynamic Table with Paginations"}
              columns={columns}
              data={data}
              rowsPerPage={5}
            />
          </div>
          <div className="flex absolute justify-center items-center bottom-0 left-0 w-full  bg-baCo z-10">
            © 2024 Your Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
