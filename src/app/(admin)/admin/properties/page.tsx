import Link from "next/link";
import Image from "next/image";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    include: {
      images: { orderBy: { order: "asc" }, take: 1 },
    },
    orderBy: { createdAt: "desc" },
  });

  const getPrice = (property: typeof properties[0]) => {
    if (property.listingType === "SHORT_TERM" && property.pricePerNight) {
      return `${formatPrice(property.pricePerNight, property.currency)}/night`;
    }
    if (property.listingType === "LONG_TERM" && property.pricePerMonth) {
      return `${formatPrice(property.pricePerMonth, property.currency)}/month`;
    }
    if (property.listingType === "FOR_SALE" && property.salePrice) {
      return formatPrice(property.salePrice, property.currency);
    }
    return "—";
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "SHORT_TERM": return "Short-Term";
      case "LONG_TERM": return "Long-Term";
      case "FOR_SALE": return "For Sale";
      default: return type;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif">Properties</h1>
        <Link href="/admin/properties/new" className="btn btn-primary">
          <Plus size={18} />
          Add New Property
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Cities</option>
          <option>London</option>
          <option>Dubai</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Types</option>
          <option>Short-Term</option>
          <option>Long-Term</option>
          <option>For Sale</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
          <option>Archived</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
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
            {properties.map((property) => (
              <tr key={property.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-12 rounded overflow-hidden bg-gray-100">
                      {property.images[0] && (
                        <Image
                          src={property.images[0].url}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <span className="font-medium">{property.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {property.neighborhood}, {property.city}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {getTypeLabel(property.listingType)}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  {getPrice(property)}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    property.status === "PUBLISHED"
                      ? "bg-green-100 text-green-700"
                      : property.status === "DRAFT"
                      ? "bg-gray-100 text-gray-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {property.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/property/${property.slug}`}
                      className="p-2 hover:bg-gray-100 rounded"
                      title="View"
                    >
                      <Eye size={16} />
                    </Link>
                    <Link
                      href={`/admin/properties/${property.id}/edit`}
                      className="p-2 hover:bg-gray-100 rounded"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </Link>
                    <button
                      className="p-2 hover:bg-gray-100 rounded text-red-600"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">Showing {properties.length} properties</span>
      </div>
    </div>
  );
}
