/**
 * Google Tag Manager Event Tracking Utility
 * Uses dataLayer.push() for GTM instead of direct gtag calls
 * 
 * IMPORTANT: Make sure to configure these events in your GTM container:
 * 1. Create Custom Event triggers for each event name
 * 2. Create GA4 Event tags that fire on those triggers
 * 3. Create Data Layer Variables for the event parameters
 */

// GTM Container ID (for reference - initialization happens in index.js)
export const GTM_ID = 'GTM-TXDCGMR6';

/**
 * Helper to safely push events to dataLayer
 * @param {Object} data - Data to push to dataLayer
 */
const pushToDataLayer = (data) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

/**
 * Track phone call click event
 * @param {string} phoneNumber - The phone number that was clicked
 * @param {string} location - Where the call button was clicked (e.g., 'mobile_button', 'footer', 'contact_page')
 */
export const trackPhoneCall = (phoneNumber, location) => {
  pushToDataLayer({
    event: 'phone_call_click',
    event_category: 'Contact',
    event_label: phoneNumber,
    click_location: location,
    value: 1
  });
};

/**
 * Track form submission event
 * @param {string} formType - Type of form (e.g., 'contact', 'quote', 'enquiry')
 * @param {string} formName - Name/identifier of the form
 */
export const trackFormSubmission = (formType, formName) => {
  pushToDataLayer({
    event: 'form_submission',
    event_category: 'Lead',
    event_label: formType,
    form_name: formName,
    value: 1
  });
};

/**
 * Track quote request event
 * @param {string} source - Where the quote request came from
 */
export const trackQuoteRequest = (source) => {
  pushToDataLayer({
    event: 'quote_request',
    event_category: 'Lead',
    event_label: source,
    value: 1
  });
};

/**
 * Track WhatsApp click event
 * @param {string} phoneNumber - The WhatsApp number clicked
 */
export const trackWhatsAppClick = (phoneNumber) => {
  pushToDataLayer({
    event: 'whatsapp_click',
    event_category: 'Contact',
    event_label: phoneNumber,
    value: 1
  });
};

/**
 * Track virtual page view for SPA navigation
 * Use this when navigating between pages/routes in your React app
 * @param {string} pagePath - The page path (e.g., '/contact')
 * @param {string} pageTitle - The page title
 */
export const trackPageView = (pagePath, pageTitle) => {
  pushToDataLayer({
    event: 'virtualPageview',
    page_path: pagePath || window.location.pathname + window.location.search,
    page_title: pageTitle || document.title,
    page_location: window.location.href
  });
};

/**
 * Track custom events (generic function for any event)
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Additional parameters for the event
 */
export const trackCustomEvent = (eventName, eventParams = {}) => {
  pushToDataLayer({
    event: eventName,
    ...eventParams
  });
};

/**
 * Track email click event
 * @param {string} email - The email that was clicked
 * @param {string} location - Where the email was clicked
 */
export const trackEmailClick = (email, location) => {
  pushToDataLayer({
    event: 'email_click',
    event_category: 'Contact',
    event_label: email,
    click_location: location,
    value: 1
  });
};

/**
 * Track CTA button clicks
 * @param {string} buttonName - Name/text of the button
 * @param {string} location - Where the button is on the page
 */
export const trackCTAClick = (buttonName, location) => {
  pushToDataLayer({
    event: 'cta_click',
    event_category: 'Engagement',
    event_label: buttonName,
    click_location: location,
    value: 1
  });
};

/**
 * SHA-256 hash a string (for hashing PII before sending to ad platforms)
 * Meta, TikTok, and Google Ads Enhanced Conversions all accept SHA-256 hashed data
 * @param {string} value - The string to hash
 * @returns {Promise<string>} - The hex-encoded SHA-256 hash
 */
export const sha256Hash = async (value) => {
  if (!value) return '';
  const normalized = value.trim().toLowerCase();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

/**
 * Push form lead data to dataLayer with hashed PII for ad platforms
 * Used on ThankYou page for Meta/FB, TikTok, and Google Ads conversion tracking
 * @param {string} eventName - The event name (e.g., 'generate_lead')
 * @param {Object} formData - Raw form data with firstName, lastName, email, phone, etc.
 * @param {string} formType - The form type (contact, quote, enquiry)
 */
export const pushLeadData = async (eventName, formData, formType) => {
  const { firstName, lastName, email, phone, address, buildingType } = formData || {};

  // Hash PII with fallback — if hashing fails, still fire the event with raw data
  let hashedEmail = '', hashedPhone = '', hashedFirstName = '', hashedLastName = '';
  try {
    [hashedEmail, hashedPhone, hashedFirstName, hashedLastName] = await Promise.all([
      sha256Hash(email),
      sha256Hash(phone),
      sha256Hash(firstName),
      sha256Hash(lastName),
    ]);
  } catch (err) {
    console.warn('SHA-256 hashing failed, pushing event without hashed data:', err);
  }

  pushToDataLayer({
    event: eventName,
    event_category: 'Lead',
    form_type: formType,
    // Raw values for platforms that hash client-side (Google Ads Enhanced Conversions)
    user_data: {
      email: email || '',
      phone_number: phone || '',
      address: {
        first_name: firstName || '',
        last_name: lastName || '',
        street: address || '',
      }
    },
    // Pre-hashed values for Meta CAPI, TikTok Events API
    user_data_hashed: {
      em: hashedEmail,
      ph: hashedPhone,
      fn: hashedFirstName,
      ln: hashedLastName,
    },
    // Extra form context
    form_name: formType === 'quote' ? 'free_quote_form' : formType === 'enquiry' ? 'enquiry_form' : 'contact_form',
    ...(buildingType && { building_type: buildingType }),
    value: 1,
    currency: 'AUD'
  });
};