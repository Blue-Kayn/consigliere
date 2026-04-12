"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Building,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Plus
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Properties", href: "/admin/properties", icon: Building },
  { name: "Bookings", href: "/admin/bookings", icon: Calendar },
  { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[var(--charcoal)] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/admin">
          <Logo color="light" showText={false} />
          <div className="mt-2">
            <span className="font-serif text-sm tracking-widest">CONSIGLIERE</span>
            <span className="block text-xs text-[var(--gray-500)] tracking-wider">ADMIN</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-[var(--gray-400)] hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon size={20} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Quick Actions */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h4 className="px-4 text-xs text-[var(--gray-500)] tracking-wider uppercase mb-4">
            Quick Actions
          </h4>
          <Link
            href="/admin/properties/new"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--gold)] hover:bg-white/5 transition-colors"
          >
            <Plus size={20} />
            <span className="text-sm">Add Property</span>
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--gray-400)] hover:bg-white/5 hover:text-white transition-colors w-full"
        >
          <LogOut size={20} />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
