"use client";

import { useState } from "react";
import Link from "next/link";

const contacts = [
  { label: "London Office", value: "+44 7442 165270", href: "tel:+447442165270" },
  { label: "Dubai Office", value: "+971 50 748 6977", href: "tel:+971507486977" },
  { label: "Email", value: "advisory@theconsigliere.com", href: "mailto:advisory@theconsigliere.com" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to API
    console.log(formData);
    alert("Thank you for your enquiry. We'll be in touch within 24 hours.");
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-24 px-8 lg:px-16 bg-[var(--cream)] text-center">
        <h1 className="text-4xl lg:text-5xl mb-4">Let&apos;s Talk</h1>
        <p className="font-editorial text-lg lg:text-xl text-[var(--gray-600)] max-w-2xl mx-auto">
          Tell us what you&apos;re looking for. A member of our advisory team will
          be in touch within 24 hours.
        </p>
      </section>

      {/* Form */}
      <section className="py-24 px-8 lg:px-16 bg-[var(--cream)]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl">How Can We Help?</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="form-label">I&apos;m Interested In *</label>
              <select
                required
                className="form-input"
                value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                }
              >
                <option value="">Select an option</option>
                <option value="short-term">Short-term rental (1 night - 3 months)</option>
                <option value="long-term">Long-term rental (6+ months)</option>
                <option value="buying">Buying property</option>
                <option value="investment">Investment advisory</option>
                <option value="general">General enquiry</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Preferred Location</label>
                <select
                  className="form-input"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                >
                  <option value="">Select location</option>
                  <option value="london">London</option>
                  <option value="dubai">Dubai</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div>
                <label className="form-label">Budget Range</label>
                <select
                  className="form-input"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                >
                  <option value="">Select budget</option>
                  <option value="2000-night">Up to £2,000/night</option>
                  <option value="2000-5000-night">£2,000 - £5,000/night</option>
                  <option value="5000-plus-night">£5,000+/night</option>
                  <option value="10000-month">Up to £10,000/month</option>
                  <option value="10000-25000-month">£10,000 - £25,000/month</option>
                  <option value="25000-plus-month">£25,000+/month</option>
                  <option value="5m-purchase">Purchasing: Up to £5M</option>
                  <option value="5m-20m-purchase">Purchasing: £5M - £20M</option>
                  <option value="20m-plus-purchase">Purchasing: £20M+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="form-label">Tell Us More</label>
              <textarea
                className="form-input min-h-[150px]"
                placeholder="Describe what you're looking for, any specific requirements, or questions you have..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Submit Enquiry
            </button>

            <p className="text-center text-sm text-[var(--gray-500)]">
              Your information is kept strictly confidential and will never be
              shared with third parties.
            </p>
          </form>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 py-12 px-8 bg-[var(--charcoal)] text-white">
        {contacts.map((contact) => (
          <div key={contact.label} className="text-center">
            <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-2">
              {contact.label}
            </span>
            <Link
              href={contact.href}
              className="text-lg hover:text-[var(--gold)] transition-colors"
            >
              {contact.value}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
