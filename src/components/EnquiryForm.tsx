import React, { useState, useEffect } from 'react';
import { SERVICES, PROPERTY_TYPES, BUSINESS_INFO } from '../data/business.ts';
import { MessageSquare, Check, AlertCircle, Phone, ArrowUpRight } from 'lucide-react';

interface EnquiryFormProps {
  initialServiceId?: string;
  className?: string;
  onSuccess?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialServiceId,
  className = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [propertyLocation, setPropertyLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [approxArea, setApproxArea] = useState('');
  const [areaUnit, setAreaUnit] = useState<'sq. ft.' | 'sq. yards'>('sq. ft.');
  const [preferredBudget, setPreferredBudget] = useState('');
  const [expectedStartDate, setExpectedStartDate] = useState('');
  const [projectRequirements, setProjectRequirements] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If initialServiceId is passed or changed, ensure it's selected
  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES.find(
        (s) => s.id === initialServiceId || s.name.toLowerCase() === initialServiceId.toLowerCase()
      );
      if (match) {
        setSelectedServices((prev) =>
          prev.includes(match.name) ? prev : [...prev, match.name]
        );
      }
    }
  }, [initialServiceId]);

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
    if (errors.services) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!propertyLocation.trim()) {
      newErrors.propertyLocation = 'Please enter the property location in Hyderabad.';
    }

    if (selectedServices.length === 0) {
      newErrors.services = 'Please select at least one service required.';
    }

    if (!projectRequirements.trim()) {
      newErrors.projectRequirements = 'Please describe your project requirements or expectations.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!handleValidate()) {
      return;
    }

    setIsSubmitting(true);

    // Construct readable WhatsApp message
    const messageParts = [
      `*New Interior Project Enquiry - Krishnaveni Interiors*`,
      `------------------------------------------`,
      `• *Client Name:* ${fullName.trim()}`,
      `• *Location:* ${propertyLocation.trim()}`,
      `• *Property Type:* ${propertyType}`,
      `• *Services Required:*\n  ${selectedServices.map((s) => `• ${s}`).join('\n  ')}`,
    ];

    if (approxArea.trim()) {
      messageParts.push(`• *Approximate Area:* ${approxArea.trim()} ${areaUnit}`);
    }

    if (preferredBudget.trim()) {
      messageParts.push(`• *Preferred Budget:* ${preferredBudget.trim()}`);
    }

    if (expectedStartDate.trim()) {
      messageParts.push(`• *Expected Start Date:* ${expectedStartDate.trim()}`);
    }

    messageParts.push(
      `------------------------------------------`,
      `• *Project Requirements:*`,
      `${projectRequirements.trim()}`,
      `------------------------------------------`,
      `Sent via krishnaveniinteriors.com`
    );

    const fullMessage = messageParts.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp link
    window.location.href = whatsappLink;

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div
      className={`bg-white border border-[#191919]/10 rounded-sm shadow-xs p-6 sm:p-8 lg:p-10 ${className}`}
      id="enquiry-form-container"
    >
      <div className="border-b border-[#191919]/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C6AA76]">
          <span>Project Consultation</span>
          <span>·</span>
          <span>Hyderabad</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] mt-2 font-normal">
          Enquiry Form
        </h3>
        <p className="mt-2 text-sm text-[#191919]/70 leading-relaxed">
          Provide your property details and interior requirements. When you click “Continue on WhatsApp”, your answers are prepared as a message so you can chat directly with our team.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name & Location Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="full-name"
              className="block text-xs font-semibold text-[#191919] uppercase tracking-wider mb-1.5"
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) {
                  setErrors((prev) => ({ ...prev, fullName: '' }));
                }
              }}
              placeholder="e.g. Ramesh Reddy"
              className={`w-full px-3.5 py-2.5 rounded-sm border bg-[#F8F5EF]/40 text-[#191919] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6AA76] transition-all ${
                errors.fullName ? 'border-red-500' : 'border-[#191919]/20'
              }`}
              required
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="property-location"
              className="block text-xs font-semibold text-[#191919] uppercase tracking-wider mb-1.5"
            >
              Property Location (Hyderabad) <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="property-location"
              value={propertyLocation}
              onChange={(e) => {
                setPropertyLocation(e.target.value);
                if (errors.propertyLocation) {
                  setErrors((prev) => ({ ...prev, propertyLocation: '' }));
                }
              }}
              placeholder="e.g. Gachibowli, Jubilee Hills, Kondapur"
              className={`w-full px-3.5 py-2.5 rounded-sm border bg-[#F8F5EF]/40 text-[#191919] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6AA76] transition-all ${
                errors.propertyLocation ? 'border-red-500' : 'border-[#191919]/20'
              }`}
              required
            />
            {errors.propertyLocation && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.propertyLocation}</span>
              </p>
            )}
          </div>
        </div>

        {/* Property Type & Approximate Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="property-type"
              className="block text-xs font-semibold text-[#191919] uppercase tracking-wider mb-1.5"
            >
              Property Type <span className="text-red-600">*</span>
            </label>
            <select
              id="property-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-sm border border-[#191919]/20 bg-[#F8F5EF]/40 text-[#191919] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6AA76] transition-all"
            >
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="approx-area"
              className="block text-xs font-semibold text-[#191919] uppercase tracking-wider mb-1.5"
            >
              Approximate Area <span className="text-xs text-[#191919]/50 font-normal">(Optional)</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="approx-area"
                value={approxArea}
                onChange={(e) => setApproxArea(e.target.value)}
                placeholder="e.g. 1850"
                className="w-2/3 px-3.5 py-2.5 rounded-sm border border-[#191919]/20 bg-[#F8F5EF]/40 text-[#191919] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6AA76] transition-all"
              />
              <select
                value={areaUnit}
                onChange={(e) => setAreaUnit(e.target.value as 'sq. ft.' | 'sq. yards')}
                aria-label="Area unit"
                className="w-1/3 px-2.5 py-2.5 rounded-sm border border-[#191919]/20 bg-[#F8F5EF]/40 text-[#191919] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6AA76] transition-all font-medium"
              >
                <option value="sq. ft.">sq. ft.</option>
                <option value="sq. yards">sq. yards</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Required (Multiple selections, required) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold text-[#191919] uppercase tracking-wider">
              Services Required <span className="text-red-600">*</span>
            </label>
            <span className="text-xs text-[#191919]/60">Select all that apply</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
            {SERVICES.map((service) => {
              const isSelected = selectedServices.includes(service.name);
              return (
                <button
                  type="button"
                  key={service.id}
                  onClick={() => toggleService(service.name)}
                  className={`flex items-start gap-2.5 p-3 rounded-sm border text-left text-xs sm:text-[13px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] ${
                    isSelected
                      ? 'border-[#C6AA76] bg-[#C6AA76]/10 text-[#191919] font-medium'
                      : 'border-[#191919]/15 bg-white text-[#191919]/80 hover:border-[#191919]/35 hover:bg-[#F8F5EF]/50'
                  }`}
                >
                  <div
                    className={`shrink-0 w-4 h-4 rounded-xs border mt-0.5 flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#191919] border-[#191919] text-white'
                        : 'border-[#191919]/30 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
                  </div>
                  <span className="leading-snug">{service.name}</span>
                </button>
              );
            })}
          </div>
          {errors.services && (
            <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.services}</span>
            </p>
          )}
        </div>

        {/* Preferred Budget & Expected Start Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="preferred-budget"
              className="block text-xs font-semibold text-[#191919] uppercase tracking-wider mb-1.5"
            >
              Preferred Budget Range <span className="text-xs text-[#191919]/50 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="preferred-budget"
              value={preferredBudget}
              onChange={(e) => setPreferredBudget(e.target.value)}
              placeholder="e.g. ₹5 Lakhs - ₹10 Lakhs, or Flexible"
              className="w-full px-3.5 py-2.5 rounded-sm border border-[#191919]/20 bg-[#F8F5EF]/40 text-[#191919] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6AA76] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="start-date"
              className="block text-xs font-semibold text-[#191919] uppercase tracking-wider mb-1.5"
            >
              Expected Start Date <span className="text-xs text-[#191919]/50 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="start-date"
              value={expectedStartDate}
              onChange={(e) => setExpectedStartDate(e.target.value)}
              placeholder="e.g. Immediately, Next month, or Within 3 months"
              className="w-full px-3.5 py-2.5 rounded-sm border border-[#191919]/20 bg-[#F8F5EF]/40 text-[#191919] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6AA76] transition-all"
            />
          </div>
        </div>

        {/* Project Requirements (Required) */}
        <div>
          <label
            htmlFor="project-requirements"
            className="block text-xs font-semibold text-[#191919] uppercase tracking-wider mb-1.5"
          >
            Project Requirements <span className="text-red-600">*</span>
          </label>
          <textarea
            id="project-requirements"
            rows={4}
            value={projectRequirements}
            onChange={(e) => {
              setProjectRequirements(e.target.value);
              if (errors.projectRequirements) {
                setErrors((prev) => ({ ...prev, projectRequirements: '' }));
              }
            }}
            placeholder="Tell us about the spaces you want to design, your preferred colours, storage ideas, or any specific requirements..."
            className={`w-full px-3.5 py-2.5 rounded-sm border bg-[#F8F5EF]/40 text-[#191919] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6AA76] transition-all ${
              errors.projectRequirements ? 'border-red-500' : 'border-[#191919]/20'
            }`}
            required
          />
          {errors.projectRequirements && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.projectRequirements}</span>
            </p>
          )}
        </div>

        {/* Submit Actions */}
        <div className="pt-3 border-t border-[#191919]/10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2.5 bg-[#191919] hover:bg-[#2A2A2A] text-[#F8F5EF] hover:text-[#C6AA76] font-semibold text-sm px-7 py-3.5 rounded-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] active:scale-[0.99] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#C6AA76]" />
              <span>{isSubmitting ? 'Opening WhatsApp...' : 'Continue on WhatsApp'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6AA76]" />
            </button>

            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#191919] hover:text-[#C6AA76] transition-colors py-2 px-3 border border-[#191919]/15 rounded-sm sm:border-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6AA76]" />
              <span>Prefer calling? {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="mt-3 text-xs text-[#191919]/65 leading-relaxed">
            Your details will open as a WhatsApp message. Press Send in WhatsApp to share your enquiry.
          </p>
        </div>
      </form>
    </div>
  );
};
