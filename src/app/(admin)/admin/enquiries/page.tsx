import { Eye, Mail, Check, Archive } from "lucide-react";

// Mock data
const enquiries = [
  {
    id: "1",
    from: { name: "John Doe", email: "john@example.com", phone: "+44 7123 456789" },
    type: "Purchase",
    property: null,
    location: "London",
    budget: "£5M - £10M",
    message: "Looking for a family home in Mayfair or Belgravia...",
    status: "NEW",
    date: "2024-03-14",
  },
  {
    id: "2",
    from: { name: "Sarah Ahmed", email: "sarah@example.com", phone: "+971 50 123 4567" },
    type: "Stay",
    property: "Mayfair Suite",
    location: "London",
    budget: "£2,000 - £5,000/night",
    message: "Interested in a 2-week stay in April...",
    status: "NEW",
    date: "2024-03-13",
  },
  {
    id: "3",
    from: { name: "Mike Chen", email: "mike@example.com", phone: "+1 212 555 0123" },
    type: "Stay",
    property: "Dubai Marina",
    location: "Dubai",
    budget: "Up to $1,500/night",
    message: "Corporate relocation, need accommodation for 3 months...",
    status: "Responded",
    date: "2024-03-12",
  },
  {
    id: "4",
    from: { name: "Emma Wilson", email: "emma@example.com" },
    type: "Investment",
    property: null,
    location: "Dubai",
    budget: "£10M+",
    message: "Interested in investment opportunities with Golden Visa eligibility...",
    status: "Responded",
    date: "2024-03-10",
  },
];

export default function EnquiriesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif">Enquiries</h1>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Status</option>
          <option>New</option>
          <option>Responded</option>
          <option>Closed</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Types</option>
          <option>Stay</option>
          <option>Purchase</option>
          <option>Investment</option>
          <option>General</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Locations</option>
          <option>London</option>
          <option>Dubai</option>
        </select>
      </div>

      {/* Enquiries List */}
      <div className="space-y-4">
        {enquiries.map((enquiry) => (
          <div
            key={enquiry.id}
            className="bg-white rounded-lg border border-gray-200 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">{enquiry.from.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      enquiry.status === "NEW"
                        ? "bg-red-100 text-red-700"
                        : enquiry.status === "Responded"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {enquiry.status}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {enquiry.from.email}
                  {enquiry.from.phone && ` · ${enquiry.from.phone}`}
                </div>
              </div>
              <div className="text-sm text-gray-500">{enquiry.date}</div>
            </div>

            <div className="flex gap-8 mb-4 text-sm">
              <div>
                <span className="text-gray-500">Type:</span>{" "}
                <span className="font-medium">{enquiry.type}</span>
              </div>
              <div>
                <span className="text-gray-500">Location:</span>{" "}
                <span className="font-medium">{enquiry.location}</span>
              </div>
              <div>
                <span className="text-gray-500">Budget:</span>{" "}
                <span className="font-medium">{enquiry.budget}</span>
              </div>
              {enquiry.property && (
                <div>
                  <span className="text-gray-500">Property:</span>{" "}
                  <span className="font-medium">{enquiry.property}</span>
                </div>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-4">{enquiry.message}</p>

            <div className="flex gap-2">
              <button className="btn btn-outline text-sm py-2 px-4">
                <Eye size={14} />
                View Details
              </button>
              <button className="btn btn-primary text-sm py-2 px-4">
                <Mail size={14} />
                Reply
              </button>
              {enquiry.status !== "Closed" && (
                <button className="p-2 hover:bg-gray-100 rounded" title="Mark as Responded">
                  <Check size={16} />
                </button>
              )}
              <button className="p-2 hover:bg-gray-100 rounded" title="Archive">
                <Archive size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
