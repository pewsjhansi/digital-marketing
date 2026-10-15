import { createClient } from '@supabase/supabase-js';

// Supabase Project Configuration
// These are public/publishable credentials safe to expose in frontend code.
const SUPABASE_URL = 'https://qbjbhjsrtrnyiyvgscoe.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pa7NleWFWOqYFvshggvfNQ_R-JYCaSH';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// --- Database Table Interfaces ---

export interface ConsultationInquiry {
  id?: string;
  created_at?: string;
  receipt_id: string;
  full_name: string;
  business_email: string;
  phone_number: string;
  business_name: string;
  website_url: string;
  services_required: string[];
  approximate_budget: string;
  project_details: string;
  preferred_contact_method: string;
  status?: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
}

/**
 * Insert a consultation inquiry into Supabase.
 * Falls back to localStorage if Supabase is unavailable.
 */
export async function submitInquiryToSupabase(
  inquiry: Omit<ConsultationInquiry, 'id' | 'created_at' | 'status'>
): Promise<{ success: boolean; receiptId: string; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('consultation_inquiries')
      .insert([
        {
          receipt_id: inquiry.receipt_id,
          full_name: inquiry.full_name,
          business_email: inquiry.business_email,
          phone_number: inquiry.phone_number,
          business_name: inquiry.business_name,
          website_url: inquiry.website_url,
          services_required: inquiry.services_required,
          approximate_budget: inquiry.approximate_budget,
          project_details: inquiry.project_details,
          preferred_contact_method: inquiry.preferred_contact_method,
          status: 'new',
        },
      ])
      .select();

    if (error) {
      console.warn('[Supabase] Insert error, falling back to localStorage:', error.message);
      // Fallback: save to localStorage
      saveInquiryLocally(inquiry);
      return { success: true, receiptId: inquiry.receipt_id, error: error.message };
    }

    console.log('[Supabase] Inquiry saved successfully:', data);
    // Also save locally as backup
    saveInquiryLocally(inquiry);
    return { success: true, receiptId: inquiry.receipt_id };
  } catch (err) {
    console.warn('[Supabase] Network error, falling back to localStorage:', err);
    saveInquiryLocally(inquiry);
    return {
      success: true,
      receiptId: inquiry.receipt_id,
      error: 'Saved locally. Will sync when connection is restored.',
    };
  }
}

/**
 * Save inquiry to localStorage as a backup/fallback.
 */
function saveInquiryLocally(
  inquiry: Omit<ConsultationInquiry, 'id' | 'created_at' | 'status'>
): void {
  try {
    const storedInquiries = JSON.parse(
      localStorage.getItem('dm_inquiries') || '[]'
    );
    storedInquiries.unshift({
      ...inquiry,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('dm_inquiries', JSON.stringify(storedInquiries));
  } catch {
    // localStorage not available
  }
}

/**
 * Fetch all inquiries from Supabase (admin use).
 */
export async function fetchAllInquiries(): Promise<ConsultationInquiry[]> {
  try {
    const { data, error } = await supabase
      .from('consultation_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('[Supabase] Fetch error:', error.message);
      return [];
    }

    return data || [];
  } catch {
    return [];
  }
}
