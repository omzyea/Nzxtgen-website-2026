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