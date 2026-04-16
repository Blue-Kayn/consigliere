"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X, Upload, GripVertical, Loader2 } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useUploadThing } from "@/lib/uploadthing";

interface PropertyFormData {
  name: string;
  tagline: string;
  description: string;
  city: string;
  neighborhood: string;
  propertyType: string;
  listingType: string;
  bookingMode: string;
  bedrooms: number;
  bathrooms: number;
  sleeps: number;
  sizeSqm: number;
  pricePerNight: number;
  pricePerMonth: number;
  salePrice: number;
  currency: string;
  cleaningFee: number;
  images: { url: string; alt?: string }[];
  amenities: string[];
  featured: boolean;
  status: string;
}

interface PropertyFormProps {
  property?: Partial<PropertyFormData> & { id?: string };
}

const amenitiesList = [
  "Air Conditioning",
  "High-Speed WiFi",
  "Smart TV",
  "Fully Equipped Kitchen",
  "Washer & Dryer",
  "Concierge Service",
  "Gym Access",
  "Pool Access",
  "Daily Housekeeping",
  "Private Parking",
  "Balcony/Terrace",
  "Sea View",
  "City View",
  "Garden",
  "Pet Friendly",
  "Elevator Access",
];

function SortableImage({
  image,
  index,
  onRemove,
}: {
  image: { url: string; alt?: string };
  index: number;
  onRemove: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: image.url });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
    opacity: isDragging ? 0 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative aspect-video bg-gray-100 rounded overflow-hidden group"
    >
      <div
        {...attributes}
        {...listeners}
        className="absolute inset-0 cursor-grab active:cursor-grabbing z-[5]"
      />
      <Image
        src={image.url}
        alt={image.alt || "Property image"}
        fill
        className="object-cover pointer-events-none"
      />
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <X size={14} />
      </button>
      {index === 0 && (
        <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
          HERO
        </span>
      )}
      <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
        <GripVertical size={16} className="text-white drop-shadow-lg" />
      </div>
    </div>
  );
}

export function PropertyForm({ property }: PropertyFormProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("basic");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const { startUpload } = useUploadThing("propertyImage");
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = formData.images.findIndex((img) => img.url === active.id);
    const newIndex = formData.images.findIndex((img) => img.url === over.id);
    setFormData({ ...formData, images: arrayMove(formData.images, oldIndex, newIndex) });
  };

  const [formData, setFormData] = useState<PropertyFormData>({
    name: property?.name || "",
    tagline: property?.tagline || "",
    description: property?.description || "",
    city: property?.city || "LONDON",
    neighborhood: property?.neighborhood || "",
    propertyType: property?.propertyType || "APARTMENT",
    listingType: property?.listingType || "SHORT_TERM",
    bookingMode: property?.bookingMode || "INSTANT_BOOK",
    bedrooms: property?.bedrooms || 1,
    bathrooms: property?.bathrooms || 1,
    sleeps: property?.sleeps || 2,
    sizeSqm: property?.sizeSqm || 0,
    pricePerNight: property?.pricePerNight || 0,
    pricePerMonth: property?.pricePerMonth || 0,
    salePrice: property?.salePrice || 0,
    currency: property?.currency || "GBP",
    cleaningFee: property?.cleaningFee || 0,
    images: property?.images || [],
    amenities: property?.amenities || [],
    featured: property?.featured || false,
    status: property?.status || "DRAFT",
  });

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "details", label: "Details" },
    { id: "pricing", label: "Pricing" },
    { id: "images", label: "Images" },
    { id: "amenities", label: "Amenities" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = property?.id
        ? `/api/properties/${property.id}`
        : "/api/properties";
      const method = property?.id ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/properties");
        router.refresh();
      } else {
        alert("Error saving property");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving property");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      const result = await startUpload(Array.from(files));
      if (result) {
        const newImages = result.map((file) => ({
          url: file.ufsUrl,
          alt: file.name,
        }));
        setFormData({
          ...formData,
          images: [...formData.images, ...newImages],
        });
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const toggleAmenity = (amenity: string) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.includes(amenity)
        ? formData.amenities.filter((a) => a !== amenity)
        : [...formData.amenities, amenity],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-[var(--gold)] text-[var(--charcoal)]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Basic Info Tab */}
      {activeTab === "basic" && (
        <div className="space-y-6">
          <div>
            <label className="form-label">Property Name *</label>
            <input
              type="text"
              required
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="form-label">Tagline</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Elegant living in the heart of Mayfair"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
            />
          </div>

          <div>
            <label className="form-label">Description *</label>
            <textarea
              required
              rows={6}
              className="form-input"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="form-label">City *</label>
              <select
                required
                className="form-input"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              >
                <option value="LONDON">London</option>
                <option value="DUBAI">Dubai</option>
              </select>
            </div>

            <div>
              <label className="form-label">Listing Type *</label>
              <select
                required
                className="form-input"
                value={formData.listingType}
                onChange={(e) => setFormData({ ...formData, listingType: e.target.value })}
              >
                <option value="SHORT_TERM">Short-Term Rental</option>
                <option value="LONG_TERM">Long-Term Rental</option>
                <option value="FOR_SALE">For Sale</option>
              </select>
            </div>

            <div>
              <label className="form-label">Booking Mode *</label>
              <select
                required
                className="form-input"
                value={formData.bookingMode}
                onChange={(e) => setFormData({ ...formData, bookingMode: e.target.value })}
              >
                <option value="INSTANT_BOOK">Instant Book</option>
                <option value="REQUEST_TO_BOOK">Request to Book</option>
                <option value="ENQUIRY_ONLY">Enquiry Only</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Property Type *</label>
              <select
                required
                className="form-input"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              >
                <option value="APARTMENT">Apartment</option>
                <option value="PENTHOUSE">Penthouse</option>
                <option value="TOWNHOUSE">Townhouse</option>
                <option value="VILLA">Villa</option>
                <option value="HOUSE">House</option>
              </select>
            </div>

            <div>
              <label className="form-label">Neighborhood *</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g., Mayfair, Palm Jumeirah"
                value={formData.neighborhood}
                onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* Details Tab */}
      {activeTab === "details" && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <label className="form-label">Bedrooms *</label>
              <input
                type="number"
                required
                min="0"
                className="form-input"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: parseInt(e.target.value) })}
              />
            </div>
            <div>
              <label className="form-label">Bathrooms *</label>
              <input
                type="number"
                required
                min="0"
                step="0.5"
                className="form-input"
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: parseFloat(e.target.value) })}
              />
            </div>
            <div>
              <label className="form-label">Sleeps</label>
              <input
                type="number"
                min="0"
                className="form-input"
                value={formData.sleeps}
                onChange={(e) => setFormData({ ...formData, sleeps: parseInt(e.target.value) })}
              />
            </div>
            <div>
              <label className="form-label">Size (m²)</label>
              <input
                type="number"
                min="0"
                className="form-input"
                value={formData.sizeSqm}
                onChange={(e) => setFormData({ ...formData, sizeSqm: parseInt(e.target.value) })}
              />
            </div>
          </div>
        </div>
      )}

      {/* Pricing Tab */}
      {activeTab === "pricing" && (
        <div className="space-y-6">
          <div>
            <label className="form-label">Currency</label>
            <select
              className="form-input w-48"
              value={formData.currency}
              onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
            >
              <option value="GBP">GBP (£)</option>
              <option value="AED">AED</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          {formData.listingType === "SHORT_TERM" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Price per Night *</label>
                <input
                  type="number"
                  required
                  min="0"
                  className="form-input"
                  value={formData.pricePerNight}
                  onChange={(e) => setFormData({ ...formData, pricePerNight: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="form-label">Cleaning Fee</label>
                <input
                  type="number"
                  min="0"
                  className="form-input"
                  value={formData.cleaningFee}
                  onChange={(e) => setFormData({ ...formData, cleaningFee: parseInt(e.target.value) })}
                />
              </div>
            </div>
          )}

          {formData.listingType === "LONG_TERM" && (
            <div>
              <label className="form-label">Price per Month *</label>
              <input
                type="number"
                required
                min="0"
                className="form-input"
                value={formData.pricePerMonth}
                onChange={(e) => setFormData({ ...formData, pricePerMonth: parseInt(e.target.value) })}
              />
            </div>
          )}

          {formData.listingType === "FOR_SALE" && (
            <div>
              <label className="form-label">Sale Price *</label>
              <input
                type="number"
                required
                min="0"
                className="form-input"
                value={formData.salePrice}
                onChange={(e) => setFormData({ ...formData, salePrice: parseInt(e.target.value) })}
              />
            </div>
          )}
        </div>
      )}

      {/* Images Tab */}
      {activeTab === "images" && (
        <div className="space-y-6">
          {/* Image Grid */}
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <SortableContext items={formData.images.map((img) => img.url)} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formData.images.map((image, index) => (
                  <SortableImage
                    key={image.url}
                    image={image}
                    index={index}
                    onRemove={() => removeImage(index)}
                  />
                ))}

                {/* Upload Button */}
            <label className={`aspect-video border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center transition-colors ${isUploading ? "opacity-50 cursor-wait" : "cursor-pointer hover:border-[var(--gold)]"}`}>
              {isUploading ? (
                <>
                  <Loader2 size={24} className="text-gray-400 mb-2 animate-spin" />
                  <span className="text-sm text-gray-500">Uploading...</span>
                </>
              ) : (
                <>
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Upload Image</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
                disabled={isUploading}
              />
            </label>
              </div>
            </SortableContext>
            <DragOverlay>
              {activeId ? (
                <div className="relative aspect-video rounded overflow-hidden shadow-2xl rotate-2 opacity-90">
                  <Image
                    src={formData.images.find((img) => img.url === activeId)?.url || ""}
                    alt="Dragging"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>

          <p className="text-sm text-gray-500">
            First image will be the hero. Drag to reorder. Recommended size: 1200x800px
          </p>
        </div>
      )}

      {/* Amenities Tab */}
      {activeTab === "amenities" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenitiesList.map((amenity) => (
            <label
              key={amenity}
              className={`flex items-center gap-3 p-4 border rounded cursor-pointer transition-colors ${
                formData.amenities.includes(amenity)
                  ? "border-[var(--gold)] bg-[var(--gold)]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.amenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                formData.amenities.includes(amenity)
                  ? "bg-[var(--gold)] border-[var(--gold)]"
                  : "border-gray-300"
              }`}>
                {formData.amenities.includes(amenity) && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-sm">{amenity}</span>
            </label>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-sm">Featured Property</span>
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData({ ...formData, status: "DRAFT" });
            }}
            className="btn btn-outline"
          >
            Save Draft
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            onClick={() => setFormData({ ...formData, status: "PUBLISHED" })}
          >
            {isSubmitting ? "Saving..." : property?.id ? "Update Property" : "Publish Property"}
          </button>
        </div>
      </div>
    </form>
  );
}
