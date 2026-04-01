import { Eye, Mail, MoreVertical } from "lucide-react";

// Mock data
const bookings = [
  {
    ref: "#CON-A7B3",
    property: "The Grosvenor Suite",
    guest: { name: "James Smith", email: "james@example.com" },
    checkIn: "2024-03-15",
    checkOut: "2024-03-22",
    nights: 7,
    total: "£18,500",
    status: "Confirmed",
  },
  {
    ref: "#CON-B2C4",
    property: "Palm Villa",
    guest: { name: "Ahmed Khan", email: "ahmed@example.com" },
    checkIn: "2024-03-18",
    checkOut: "2024-03-25",
    nights: 7,
    total: "$12,500",
    status: "Pending",
  },
  {
    ref: "#CON-C5D6",
    property: "Chelsea Residence",
    guest: { name: "Maria Johnson", email: "maria@example.com" },
    checkIn: "2024-03-20",
    checkOut: "2024-03-27",
    nights: 7,
    total: "£4,200",
    status: "Confirmed",
  },
  {
    ref: "#CON-D8E9",
    property: "Marina Penthouse",
    guest: { name: "Chen Wei", email: "chen@example.com" },
    checkIn: "2024-04-01",
    checkOut: "2024-04-05",
    nights: 4,
    total: "$6,400",
    status: "Pending",
  },
];

export default function BookingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif">Bookings</h1>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Status</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Properties</option>
          <option>The Grosvenor Suite</option>
          <option>Palm Villa</option>
          <option>Chelsea Residence</option>
        </select>
        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reference
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Guest
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.ref} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-sm">{booking.ref}</td>
                <td className="px-6 py-4 text-sm">{booking.property}</td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium">{booking.guest.name}</div>
                  <div className="text-xs text-gray-500">{booking.guest.email}</div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <div>{booking.checkIn} → {booking.checkOut}</div>
                  <div className="text-xs text-gray-500">{booking.nights} nights</div>
                </td>
                <td className="px-6 py-4 text-sm font-medium">{booking.total}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "Pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded" title="Email Guest">
                      <Mail size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
