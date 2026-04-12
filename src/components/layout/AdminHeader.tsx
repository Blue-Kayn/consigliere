"use client";

import { Bell, Search, User, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      {/* Search */}
      <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2 w-80">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search properties, bookings..."
          className="bg-transparent border-none outline-none text-sm flex-1"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="w-10 h-10 rounded-full bg-[var(--charcoal)] flex items-center justify-center text-white">
            <User size={18} />
          </div>
          <div>
            <div className="text-sm font-medium">
              {session?.user?.name || "Admin"}
            </div>
            <div className="text-xs text-gray-500">
              {session?.user?.email || ""}
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="ml-2 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            title="Sign out"
          >
            <LogOut size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
