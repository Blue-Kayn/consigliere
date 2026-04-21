"use client";

import { useState } from "react";

interface BookingEnquiryProps {
  propertyId: string;
  propertyName: string;
  pricePerNight: number | null;
  cleaningFee: number | null;
  bookingMode: string;
}

export function BookingEnquiry({
  propertyId,
  propertyName,
  pricePerNight,
  cleaningFee,
  bookingMode,
}: BookingEnquiryProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const nights = checkIn && checkOut
    ? Math.max(1, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)))
    : 5;

  const subtotal = (pricePerNight || 0) * nights;
  const total = subtotal + (cleaningFee || 0);

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !phone) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          type: "STAY",
          message: `Property: ${propertyName}\nCheck-in: ${checkIn || "Not specified"}\nCheck-out: ${checkOut || "Not specified"}\nGuests: ${guests}\n\n${message}`,
          propertyId,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or email us at info@consigliere-residences.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="sticky top-32 bg-white border border-[var(--gray-300)] p-8 text-center">
        <div className="text-[var(--gold)] text-4xl mb-4">✓</div>
        <h3 className="text-xl mb-2">Enquiry Received</h3>
        <p className="text-sm text-[var(--gray-600)] leading-relaxed">
          Thank you for your interest in {propertyName}. A member of our team will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const buttonLabel =
    bookingMode === "INSTANT_BOOK"
      ? "Book Now"
      : bookingMode === "REQUEST_TO_BOOK"
      ? "Request to Book"
      : "Send Enquiry";

  return (
    <div className="sticky top-32 bg-white border border-[var(--gray-300)] p-8">
      <div className="text-2xl font-medium mb-2">
        £{pricePerNight?.toLocaleString()}
        <span className="text-base font-normal text-[var(--gray-400)]"> / night</span>
      </div>

      <div className="space-y-4 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-[var(--gray-300)] p-4">
            <label className="form-label text-[0.65rem]">Check In</label>
            <input
              type="date"
              className="w-full text-sm"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="border border-[var(--gray-300)] p-4">
            <label className="form-label text-[0.65rem]">Check Out</label>
            <input
              type="date"
              className="w-full text-sm"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>

        <div className="border border-[var(--gray-300)] p-4">
          <label className="form-label text-[0.65rem]">Guests</label>
          <select
            className="w-full text-sm"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
            <option>5 guests</option>
            <option>6 guests</option>
          </select>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[var(--gray-300)] space-y-3">
        <div className="flex justify-between text-sm">
          <span>£{pricePerNight?.toLocaleString()} x {nights} night{nights !== 1 ? "s" : ""}</span>
          <span>£{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Cleaning fee</span>
          <span>£{cleaningFee?.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-medium pt-3 border-t border-[var(--gray-300)]">
          <span>Total</span>
          <span>£{total.toLocaleString()}</span>
        </div>
      </div>

      {!showForm ? (
        <>
          <button
            onClick={() => setShowForm(true)}
            className="btn btn-primary w-full mt-6"
          >
            {buttonLabel}
          </button>
          <p className="text-center text-xs text-[var(--gray-500)] mt-4">
            You won&apos;t be charged yet
          </p>
        </>
      ) : (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label text-[0.65rem]">First Name *</label>
              <input
                type="text"
                className="form-input text-sm"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="form-label text-[0.65rem]">Last Name *</label>
              <input
                type="text"
                className="form-input text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="form-label text-[0.65rem]">Email *</label>
            <input
              type="email"
              className="form-input text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label text-[0.65rem]">Phone *</label>
            <input
              type="tel"
              className="form-input text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label text-[0.65rem]">Message</label>
            <textarea
              className="form-input text-sm min-h-[80px]"
              placeholder="Any special requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !firstName || !lastName || !email || !phone}
            className="btn btn-primary w-full disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </div>
      )}
    </div>
  );
}
