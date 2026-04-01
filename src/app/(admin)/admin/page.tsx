import Link from "next/link";
import {
  TrendingUp,
  Calendar,
  Clock,
  Building,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

// Mock data - will be replaced with database queries
const stats = [
  {
    label: "Revenue This Month",
    value: "£45,200",
    change: "+12%",
    positive: true,
    icon: TrendingUp,
  },
  {
    label: "Bookings This Month",
    value: "12",
    change: "+3",
    positive: true,
    icon: Calendar,
  },
  {
    label: "Pending Enquiries",
    value: "5",
    change: "2 new",
    positive: false,
    icon: Clock,
  },
  {
    label: "Listed Properties",
    value: "77",
    change: "+2",
    positive: true,
    icon: Building,
  },
];

const recentBookings = [
  { ref: "#CON-A7B3", property: "The Grosvenor Suite", guest: "J. Smith", dates: "Mar 15-22", status: "Confirmed" },
  { ref: "#CON-B2C4", property: "Palm Villa", guest: "A. Khan", dates: "Mar 18-25", status: "Pending" },
  { ref: "#CON-C5D6", property: "Chelsea Residence", guest: "M. Johnson", dates: "Mar 20-27", status: "Confirmed" },
];

const recentEnquiries = [
  { from: "John Doe", type: "Purchase", property: "—", status: "NEW" },
  { from: "Sarah Ahmed", type: "Stay", property: "Mayfair Suite", status: "NEW" },
  { from: "Mike Chen", type: "Stay", property: "Dubai Marina", status: "Responded" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif">Dashboard</h1>
        <Link href="/admin/properties/new" className="btn btn-primary">
          Add Property
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-lg p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Icon size={24} className="text-[var(--charcoal)]" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.positive ? "text-green-600" : "text-amber-600"
                }`}>
                  {stat.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-medium mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium">Recent Bookings</h2>
            <Link href="/admin/bookings" className="text-sm text-[var(--gold)] flex items-center gap-1 hover:underline">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentBookings.map((booking) => (
              <div key={booking.ref} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{booking.ref}</div>
                  <div className="text-sm text-gray-500">{booking.property}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">{booking.guest}</div>
                  <div className="text-sm text-gray-500">{booking.dates}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  booking.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Enquiries */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium">Recent Enquiries</h2>
            <Link href="/admin/enquiries" className="text-sm text-[var(--gold)] flex items-center gap-1 hover:underline">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentEnquiries.map((enquiry, i) => (
              <div key={i} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{enquiry.from}</div>
                  <div className="text-sm text-gray-500">{enquiry.type}</div>
                </div>
                <div className="text-sm text-gray-500">{enquiry.property}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  enquiry.status === "NEW"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {enquiry.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
