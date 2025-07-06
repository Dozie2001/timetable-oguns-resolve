
import { useState } from "react";
import { 
  LayoutDashboard, 
  Calendar, 
  AlertTriangle, 
  BookOpen, 
  Users, 
  Building, 
  FileText, 
  Settings, 
  LogOut 
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Timetable", url: "/timetable", icon: Calendar },
  { title: "Conflicts", url: "/conflicts", icon: AlertTriangle },
  { title: "Courses", url: "/courses", icon: BookOpen },
  { title: "Faculty", url: "/faculty", icon: Users },
  { title: "Classrooms", url: "/classrooms", icon: Building },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const isExpanded = items.some((i) => isActive(i.url));

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} bg-slate-800 text-white border-r-0`} collapsible="offcanvas">
      <SidebarContent className="bg-slate-800">
        {/* Logo/Header */}
        {!collapsed && (
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">OOU</span>
              </div>
              <div>
                <h2 className="font-semibold text-white">CS Department</h2>
                <p className="text-xs text-slate-400">Timetable System</p>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup className="px-4 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-teal-600 text-white" 
                            : "text-slate-300 hover:bg-slate-700 hover:text-white"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Button */}
        <div className="mt-auto p-4 border-t border-slate-700">
          <SidebarMenuButton asChild>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white w-full"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">Logout</span>}
            </button>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
