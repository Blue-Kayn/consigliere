"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/property/PropertyCard";

interface Property {
  id: string;
  slug: string;
  name: string;
  neighborhood: string;
  city: "London" | "Dubai" | "LONDON" | "DUBAI";
  bedrooms: number;
  bathrooms: number;
  sizeSqm: number | null;
  pricePerNight: number | null;
  pricePerMonth: number | null;
  currency: "GBP" | "AED" | "USD" | "EUR";
  listingType: "SHORT_TERM" | "LONG_TERM" | "FOR_SALE";
  featured: boolean;
  images: { url: string }[];
}

const listingFilters = ["All", "Short-Term", "Long-Term"];
const locationOptions = ["All Locations", "London", "Dubai"];
const bedroomOptions = ["Any Bedrooms", "1+", "2+", "3+", "4+", "5+"];

export function StayContent({ properties }: { properties: Property[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedBedrooms, setSelectedBedrooms] = useState("Any Bedrooms");
  const [sortBy, setSortBy] = useState("Recommended");

  const filteredProperties = properties.filter((p) => {
    // Listing type filter
    if (activeFilter === "Short-Term" && p.listingType !== "SHORT_TERM") return false;
    if (activeFilter === "Long-Term" && p.listingType !== "LONG_TERM") return false;

    // Location filter
    if (selectedLocation !== "All Locations") {
      const cityUpper = p.city.toUpperCase();
      if (selectedLocation === "London" && cityUpper !== "LONDON") return false;
      if (selectedLocation === "Dubai" && cityUpper !== "DUBAI") return false;
    }

    // Bedrooms filter
    if (selectedBedrooms !== "Any Bedrooms") {
      const minBedrooms = parseInt(selectedBedrooms);
      if (p.bedrooms < minBedrooms) return false;
    }

    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "Price: Low to High") {
      const priceA = a.pricePerNight || a.pricePerMonth || 0;
      const priceB = b.pricePerNight || b.pricePerMonth || 0;
      return priceA - priceB;
    }
    if (sortBy === "Price: High to Low") {
      const priceA = a.pricePerNight || a.pricePerMonth || 0;
      const priceB = b.pricePerNight || b.pricePerMonth || 0;
      return priceB - priceA;
    }
    // Recommended - featured first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const handleSearch = () => {
    // Scroll to results
    const resultsSection = document.getElementById("results");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-24 px-8 lg:px-16 bg-[var(--cream)] text-center">
        <h1 className="text-4xl lg:text-5xl mb-4">Find Your Residence</h1>
        <p className="font-editorial text-lg lg:text-xl text-[var(--gray-600)] max-w-2xl mx-auto mb-12">
          Luxury apartments and homes for a week, a month, or a year. Every
          property personally vetted. Every stay fully serviced.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg p-2 flex flex-col lg:flex-row items-stretch">
          <div className="flex-1 p-4 lg:p-5 text-left">
            <label className="block text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[var(--gray-500)] mb-1">
              Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full text-[0.95rem] bg-transparent border-none outline-none cursor-pointer"
            >
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>{loc === "All Locations" ? "All Locations" : `${loc}`}</option>
              ))}
            </select>
          </div>

          <div className="hidden lg:block w-px h-12 self-center bg-[var(--gray-300)]" />

          <div className="flex-1 p-4 lg:p-5 text-left">
            <label className="block text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[var(--gray-500)] mb-1">
              Type
            </label>
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="w-full text-[0.95rem] bg-transparent border-none outline-none cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Short-Term">Short-Term Rental</option>
              <option value="Long-Term">Long-Term Rental</option>
            </select>
          </div>

          <div className="hidden lg:block w-px h-12 self-center bg-[var(--gray-300)]" />

          <div className="flex-1 p-4 lg:p-5 text-left">
            <label className="block text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[var(--gray-500)] mb-1">
              Bedrooms
            </label>
            <select
              value={selectedBedrooms}
              onChange={(e) => setSelectedBedrooms(e.target.value)}
              className="w-full text-[0.95rem] bg-transparent border-none outline-none cursor-pointer"
            >
              {bedroomOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="btn btn-primary px-8"
          >
            Search
          </button>
        </div>
      </section>

      {/* Filters */}
      <div className="py-6 px-8 lg:px-16 bg-white border-b border-[var(--gray-300)] flex flex-wrap gap-4 justify-center">
        {listingFilters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      <section id="results" className="py-16 px-8 lg:px-16">
        <div className="flex justify-between items-end mb-12 max-w-[1400px] mx-auto">
          <h2 className="text-2xl">{sortedProperties.length} Residences Available</h2>
          <div className="hidden sm:flex gap-4 items-center">
            <span className="text-sm text-[var(--gray-500)]">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border border-[var(--gray-300)] text-sm"
            >
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {sortedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 max-w-[1400px] mx-auto">
            <p className="text-xl text-[var(--gray-500)] mb-4">No properties match your criteria</p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSelectedLocation("All Locations");
                setSelectedBedrooms("Any Bedrooms");
              }}
              className="btn btn-outline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
