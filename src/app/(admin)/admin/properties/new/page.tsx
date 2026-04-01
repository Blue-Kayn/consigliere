import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PropertyForm } from "@/components/forms/PropertyForm";

export default function NewPropertyPage() {
  return (
    <div>
      <Link
        href="/admin/properties"
        className="btn-text inline-flex items-center gap-2 mb-6"
      >
        <ArrowLeft size={16} />
        Back to Properties
      </Link>

      <h1 className="text-2xl font-serif mb-8">Add New Property</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <PropertyForm />
      </div>
    </div>
  );
}
