import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Sparkles,
  Phone,
  Mail,
} from 'lucide-react';
import { AGENCY_CONFIG, SERVICES_DATA } from '../../config/agencyConfig';
import { submitInquiryToSupabase } from '../../lib/supabase';

interface FormData {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  businessName: string;
  websiteUrl: string;
  servicesRequired: string[];
  approximateBudget: string;
  projectDetails: string;
  preferredContactMethod: 'WhatsApp' | 'Phone' | 'Email';
  honeypot: string; // Spam protection
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  phoneNumber?: string;
  projectDetails?: string;
  servicesRequired?: string;
  general?: string;
}

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    businessName: '',
    websiteUrl: '',
    servicesRequired: [],
    approximateBudget: '$2,500 - $5,000 / month',
    projectDetails: '',
    preferredContactMethod: 'WhatsApp',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    id: string;
    timestamp: string;
  } | null>(null);

  // Pre-select service from URL parameter if present
  useEffect(() => {
    if (preselectedService) {
      const match = SERVICES_DATA.find((s) => s.id === preselectedService);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          servicesRequired: prev.servicesRequired.includes(match.title)
            ? prev.servicesRequired
            : [...prev.servicesRequired, match.title],
        }));
      }
    }
  }, [preselectedService]);

  const toggleService = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(serviceTitle);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((s) => s !== serviceTitle)
          : [...prev.servicesRequired, serviceTitle],
      };
    });
    // Clear error if selected
    if (errors.servicesRequired) {
      setErrors((prev) => ({ ...prev, servicesRequired: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required.';
    } else if (!emailRegex.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'Please provide a valid business email address.';
    }

    // Phone validation (digits, +, spaces, min 8 digits)
    const phoneClean = formData.phoneNumber.replace(/[^\d+]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required for scheduling.';
    } else if (phoneClean.length < 8) {
      newErrors.phoneNumber = 'Please provide a valid phone number with country/area code.';
    }

    // Services required check
    if (formData.servicesRequired.length === 0) {
      newErrors.servicesRequired = 'Please select at least one required service.';
    }

    // Project Details validation
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide brief details about your business goals.';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide at least a short sentence regarding your goals.';
    }

    // Spam honeypot detection
    if (formData.honeypot) {
      newErrors.general = 'Spam submission detected.';
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const receiptId = `DM-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString();

      // Push inquiry to Supabase (with localStorage fallback)
      const result = await submitInquiryToSupabase({
        receipt_id: receiptId,
        full_name: formData.fullName,
        business_email: formData.businessEmail,
        phone_number: formData.phoneNumber,
        business_name: formData.businessName,
        website_url: formData.websiteUrl,
        services_required: formData.servicesRequired,
        approximate_budget: formData.approximateBudget,
        project_details: formData.projectDetails,
        preferred_contact_method: formData.preferredContactMethod,
      });

      if (!result.success) {
        throw new Error(result.error || 'Submission failed');
      }

      setSubmissionReceipt({
        id: result.receiptId,
        timestamp,
      });

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#6366f1', '#ec4899', '#38bdf8'],
      });
    } catch {
      setErrors({
        general: 'An error occurred while transmitting your request. Please try contacting us directly via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmissionReceipt(null);
    setFormData({
      fullName: '',
      businessEmail: '',
      phoneNumber: '',
      businessName: '',
      websiteUrl: '',
      servicesRequired: [],
      approximateBudget: '$2,500 - $5,000 / month',
      projectDetails: '',
      preferredContactMethod: 'WhatsApp',
      honeypot: '',
    });
    setErrors({});
  };

  return (
    <div className="relative rounded-3xl glass-panel p-6 sm:p-10 border border-purple-500/30 shadow-2xl shadow-purple-950/40">
      {/* Decorative top gradient */}
      <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {submissionReceipt ? (
        <div className="py-8 text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Inquiry Transmitted Successfully
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              We've Received Your Consultation Request!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. One of our senior marketing directors will review your website and prepare a custom audit report within 24 hours.
            </p>
          </div>

          {/* Receipt Info Box */}
          <div className="bg-slate-900/80 rounded-2xl p-5 max-w-md mx-auto border border-white/10 text-left space-y-2 text-xs">
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-slate-400">Inquiry Reference ID:</span>
              <span className="font-mono font-bold text-purple-300">{submissionReceipt.id}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-slate-400">Submission Timestamp:</span>
              <span className="font-mono text-slate-300">{submissionReceipt.timestamp}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-slate-400">Selected Services:</span>
              <span className="text-slate-200 font-medium">{formData.servicesRequired.join(', ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Preferred Channel:</span>
              <span className="text-emerald-400 font-medium">{formData.preferredContactMethod}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${AGENCY_CONFIG.whatsapp.link}&text=${encodeURIComponent(
                `Hello! I just submitted consultation inquiry ref ${submissionReceipt.id} for ${formData.fullName}. Could we discuss my marketing campaign?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect Instantly on WhatsApp</span>
            </a>

            <button
              onClick={resetForm}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Form Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free 30-Minute Growth Strategy Session</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Schedule Your Free Consultation
            </h3>
            <p className="text-slate-400 text-sm">
              Tell us about your brand. We will formulate a tailored roadmap to scale your leads, reach, and revenue.
            </p>
          </div>

          {/* General Error Alert */}
          {errors.general && (
            <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center gap-3 text-rose-300 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
              <span>{errors.general}</span>
            </div>
          )}

          {/* Honeypot field (hidden from genuine users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this</label>
            <input
              id="hp_field"
              type="text"
              name="website_url_check"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Row 1: Full Name & Business Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                Full Name <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                    errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-purple-500'
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="businessEmail" className="block text-xs font-medium text-slate-300 mb-1.5">
                Business Email <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="businessEmail"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.businessEmail}
                  onChange={(e) => {
                    setFormData({ ...formData, businessEmail: e.target.value });
                    if (errors.businessEmail) setErrors({ ...errors, businessEmail: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                    errors.businessEmail ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-purple-500'
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all`}
                />
              </div>
              {errors.businessEmail && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.businessEmail}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone Number & Business Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-medium text-slate-300 mb-1.5">
                Phone Number (with Country Code) <span className="text-purple-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="phoneNumber"
                  type="tel"
                  required
                  placeholder="+91 93058 56475"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, phoneNumber: e.target.value });
                    if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                    errors.phoneNumber ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-purple-500'
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all font-mono`}
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phoneNumber}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="businessName" className="block text-xs font-medium text-slate-300 mb-1.5">
                Business Name <span className="text-slate-500">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  id="businessName"
                  type="text"
                  placeholder="Apex Commerce Ltd."
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-purple-500 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Website URL & Approximate Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="websiteUrl" className="block text-xs font-medium text-slate-300 mb-1.5">
                Website URL <span className="text-slate-500">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  id="websiteUrl"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-purple-500 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="approximateBudget" className="block text-xs font-medium text-slate-300 mb-1.5">
                Approximate Monthly Budget <span className="text-slate-500">(Optional)</span>
              </label>
              <select
                id="approximateBudget"
                value={formData.approximateBudget}
                onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 focus:border-purple-500 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
              >
                <option value="Under $1,500 / month">Under $1,500 / month</option>
                <option value="$1,500 - $3,000 / month">$1,500 - $3,000 / month</option>
                <option value="$3,000 - $7,500 / month">$3,000 - $7,500 / month</option>
                <option value="$7,500 - $15,000 / month">$7,500 - $15,000 / month</option>
                <option value="$15,000+ / month">$15,000+ / month (Enterprise Scale)</option>
              </select>
            </div>
          </div>

          {/* Services Required (Multi-Select) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-medium text-slate-300">
                Services Required <span className="text-purple-400">*</span>
              </label>
              <span className="text-[11px] text-slate-500">Select all that apply</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SERVICES_DATA.map((srv) => {
                const isSelected = formData.servicesRequired.includes(srv.title);
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => toggleService(srv.title)}
                    className={`p-3 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'bg-purple-600/20 border-purple-500 text-white shadow-md shadow-purple-500/10'
                        : 'bg-slate-900/60 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <span className="truncate">{srv.title}</span>
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-purple-500 border-purple-400 text-white'
                          : 'border-white/20'
                      }`}
                    >
                      {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {errors.servicesRequired && (
              <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.servicesRequired}</span>
              </p>
            )}
          </div>

          {/* Project Details (Textarea) */}
          <div>
            <label htmlFor="projectDetails" className="block text-xs font-medium text-slate-300 mb-1.5">
              Project Details &amp; Business Objectives <span className="text-purple-400">*</span>
            </label>
            <textarea
              id="projectDetails"
              required
              rows={4}
              placeholder="Tell us about your target market, current marketing bottlenecks, timeline, and growth target..."
              value={formData.projectDetails}
              onChange={(e) => {
                setFormData({ ...formData, projectDetails: e.target.value });
                if (errors.projectDetails) setErrors({ ...errors, projectDetails: undefined });
              }}
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                errors.projectDetails ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-purple-500'
              } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all`}
            />
            {errors.projectDetails && (
              <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.projectDetails}</span>
              </p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { method: 'WhatsApp', icon: <MessageCircle className="w-4 h-4 text-emerald-400" /> },
                { method: 'Phone', icon: <Phone className="w-4 h-4 text-blue-400" /> },
                { method: 'Email', icon: <Mail className="w-4 h-4 text-purple-400" /> },
              ].map((item) => (
                <button
                  key={item.method}
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      preferredContactMethod: item.method as 'WhatsApp' | 'Phone' | 'Email',
                    })
                  }
                  className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                    formData.preferredContactMethod === item.method
                      ? 'bg-purple-600/20 border-purple-500 text-white'
                      : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.method}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 rounded-2xl font-heading font-extrabold text-base tracking-wider uppercase text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:via-fuchsia-500 hover:to-indigo-500 shadow-xl shadow-purple-600/35 hover:shadow-purple-600/55 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-3 disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>TRANSMITTING INQUIRY...</span>
                </>
              ) : (
                <>
                  <span>GET FREE CONSULTATION</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="mt-2.5 text-center text-[11px] text-slate-400">
              🔒 100% Confidential. No obligation. Your information is protected under strict privacy terms.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
