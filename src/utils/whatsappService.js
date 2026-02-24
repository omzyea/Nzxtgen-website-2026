// utils/whatsappService.js
// Enhanced WhatsApp service for sending comprehensive notifications

const ADMIN_WHATSAPP = "61437885910"; // Your admin WhatsApp number

// Format phone number for WhatsApp
const formatPhoneNumber = (phone) => {
  if (!phone) return ADMIN_WHATSAPP;
  // Remove all non-numeric characters
  const cleaned = phone.replace(/[^0-9]/g, '');
  // Add country code if missing (assuming Australia +61)
  if (cleaned.length === 10 && cleaned.startsWith('0')) {
    return '61' + cleaned.substring(1);
  }
  if (cleaned.length === 9) {
    return '61' + cleaned;
  }
  return cleaned;
};

// Send admin notification for new submission
export const sendAdminNotification = (submissionData, type, filesCount = 0) => {
  let message;
  if (type === 'enquiry') {
    message = formatEnquiryNotification(submissionData, filesCount);
  } else if (type === 'contact') {
    message = formatContactNotification(submissionData);
  } else {
    message = formatQuoteNotification(submissionData, filesCount);
  }

  const whatsappURL = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in new tab for automatic notification
  window.open(whatsappURL, '_blank');
};

// Send customer WhatsApp message
export const sendCustomerMessage = (submissionData, type, filesCount = 0) => {
  const message = type === 'enquiry'
    ? formatEnquiryCustomerMessage(submissionData, filesCount)
    : formatQuoteCustomerMessage(submissionData, filesCount);
  
  const whatsappURL = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};

// Generate reply WhatsApp link
export const getReplyWhatsAppLink = (submissionData, type) => {
  const phone = formatPhoneNumber(submissionData.phone);
  const message = type === 'enquiry'
    ? `Hi ${submissionData.name}, thanks for your enquiry about "${submissionData.message?.substring(0, 50)}...". We'll get back to you soon with your $50 discount offer!`
    : `Hi ${submissionData.firstName}, thanks for your quote request for "${submissionData.description?.substring(0, 50)}...". We'll prepare your detailed quote shortly!`;
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// Format contact form notification for admin
const formatContactNotification = (data) => {
  const timestamp = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `📩 *NEW CONTACT MESSAGE!* 📩
━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS:*
• Name: ${data.firstName || ''} ${data.lastName || ''}
• Email: ${data.email || 'Not provided'}

💬 *MESSAGE:*
"${data.message || 'No message provided'}"

⏰ *SUBMITTED:*
${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━

💡 *Quick Actions:*
• Email: mailto:${data.email}`;
};

// Format enquiry notification for admin (UPDATED - removed action items and admin panel link)
const formatEnquiryNotification = (data, filesCount = 0) => {
  const timestamp = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `🔥 *NEW ENQUIRY ALERT! $50 off* 🔥
━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS:*
• Name: ${data.name || 'Not provided'}
• Email: ${data.email || 'Not provided'}
• Phone: ${data.phone || 'Not provided'}
• Address: ${data.address || 'Not provided'}

💬 *MESSAGE:*
"${data.message || 'No message provided'}"

${filesCount > 0 ? `📎 *ATTACHMENTS:*
• ${filesCount} file${filesCount > 1 ? 's' : ''} included
` : ''}⏰ *SUBMITTED:*
${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━

💡 *Quick Actions:*
• Reply: ${getReplyWhatsAppLink(data, 'enquiry')}
• Email: mailto:${data.email}`;
};

// Format quote notification for admin (UPDATED - removed action items and admin panel link)
const formatQuoteNotification = (data, filesCount = 0) => {
  const timestamp = new Date().toLocaleString('en-AU', {
    timeZone: 'Australia/Sydney',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `🧾 *NEW QUOTE REQUEST!* 🧾
━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS:*
• Name: ${data.firstName || ''} ${data.lastName || ''}
• Email: ${data.email || 'Not provided'}
• Phone: ${data.phone || 'Not provided'}

🏗️ *PROJECT DETAILS:*
• Building Type: ${data.buildingType || 'Not specified'}
• Description: ${data.description || 'No description'}
${data.otherSpec ? `• Other Specification: ${data.otherSpec}` : ''}

🧱 *WALL INFORMATION:*
• Types: ${data.wallTypes || 'None selected'}

🏠 *CEILING INFORMATION:*
• Types: ${data.ceilingTypes || 'None selected'}

🏢 *ROOF INFORMATION:*
• Type: ${data.roofType || 'Not specified'}

ℹ️ *ADDITIONAL DETAILS:*
• Info: ${data.additionalInfo || 'None selected'}

${filesCount > 0 ? `📎 *ATTACHMENTS:*
• ${filesCount} file${filesCount > 1 ? 's' : ''} included for better quote accuracy
` : ''}⏰ *SUBMITTED:*
${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━

💡 *Quick Actions:*
• Reply: ${getReplyWhatsAppLink(data, 'quote')}
• Email: mailto:${data.email}`;
};

// Format enquiry customer message (COMPREHENSIVE)
const formatEnquiryCustomerMessage = (data, filesCount = 0) => {
  return `📝 *ENQUIRY DETAILS:*
━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *Your Information:*
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}
• Address: ${data.address}

💬 *Your Message:*
"${data.message}"

${filesCount > 0 ? `📎 *Files Attached:* ${filesCount} file${filesCount > 1 ? 's' : ''}
` : ''}⏰ *Submitted:* ${new Date().toLocaleString()}

🎉 *Special Offer:* $50 OFF your electrical, security & tech needs!

━━━━━━━━━━━━━━━━━━━━━━━━━
We'll contact you within 24 hours!`;
};

// Format quote customer message (COMPREHENSIVE)
const formatQuoteCustomerMessage = (data, filesCount = 0) => {
  return `🧾 *QUOTE REQUEST DETAILS:*
━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *Your Information:*
• Name: ${data.firstName} ${data.lastName}
• Email: ${data.email}
• Phone: ${data.phone}

🏗️ *Project Details:*
• Building: ${data.buildingType}
• Work Description: ${data.description}
${data.otherSpec ? `• Other Details: ${data.otherSpec}` : ''}

🏠 *Property Specifications:*
• Wall Types: ${data.wallTypes || 'None selected'}
• Ceiling Types: ${data.ceilingTypes || 'None selected'}
• Roof Type: ${data.roofType}
• Additional Info: ${data.additionalInfo || 'None'}

${filesCount > 0 ? `📎 *Files Attached:* ${filesCount} file${filesCount > 1 ? 's' : ''} for accurate quoting
` : ''}⏰ *Submitted:* ${new Date().toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━
We'll prepare your detailed quote and contact you within 48 hours!`;
};

// Delay function for sequential operations
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Send notification with retry logic
export const sendNotificationWithRetry = async (submissionData, type, filesCount = 0, retries = 3) => {
  try {
    sendAdminNotification(submissionData, type, filesCount);
    return { success: true };
  } catch (error) {
    if (retries > 0) {
      await delay(1000);
      return sendNotificationWithRetry(submissionData, type, filesCount, retries - 1);
    }
    return { success: false, error: error.message };
  }
};

// Bulk notification sender (for multiple submissions)
export const sendBulkNotifications = async (submissions) => {
  const results = [];
  
  for (const submission of submissions) {
    const result = await sendNotificationWithRetry(
      submission.data, 
      submission.type,
      submission.filesCount || 0
    );
    results.push({ id: submission.id, ...result });
    
    // Add delay between notifications to avoid spam
    await delay(2000);
  }
  
  return results;
};

// Generate email link
export const getEmailReplyLink = (submissionData, type) => {
  const subject = type === 'enquiry' 
    ? `Re: Your Enquiry - ${submissionData.name} ($50 Discount Offer)`
    : `Re: Your Quote Request - ${submissionData.firstName} ${submissionData.lastName}`;
  
  const body = type === 'enquiry'
    ? `Hi ${submissionData.name},\n\nThank you for your enquiry about "${submissionData.message?.substring(0, 100)}..."\n\nAs promised, we're offering you $50 OFF your electrical, security & tech needs!\n\nWe'll contact you within 24 hours to discuss your requirements.\n\nBest regards,\nNZXT Gen Team`
    : `Hi ${submissionData.firstName},\n\nThank you for your quote request for "${submissionData.description?.substring(0, 100)}..."\n\nWe're preparing a detailed quote for your ${submissionData.buildingType} project and will contact you within 48 hours.\n\nBest regards,\nNZXT Gen Team`;
  
  return `mailto:${submissionData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// Generate calendar event link (for follow-ups)
export const getCalendarEventLink = (submissionData, type) => {
  const title = type === 'enquiry'
    ? `Follow up: Enquiry from ${submissionData.name}`
    : `Follow up: Quote for ${submissionData.firstName} ${submissionData.lastName}`;
  
  const details = type === 'enquiry'
    ? `Customer: ${submissionData.name}
Email: ${submissionData.email}
Phone: ${submissionData.phone}
Address: ${submissionData.address}
Message: ${submissionData.message}
Special Offer: $50 OFF mentioned`
    : `Customer: ${submissionData.firstName} ${submissionData.lastName}
Email: ${submissionData.email}
Phone: ${submissionData.phone}
Building: ${submissionData.buildingType}
Description: ${submissionData.description}
Walls: ${submissionData.wallTypes}
Ceiling: ${submissionData.ceilingTypes}
Roof: ${submissionData.roofType}
Additional: ${submissionData.additionalInfo}`;
  
  // Google Calendar link
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1); // Tomorrow
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 1); // 1 hour duration
  
  const formatDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    details: details,
    location: submissionData.address || 'Customer Location'
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

// WhatsApp message templates with enhanced formatting
export const messageTemplates = {
  enquiry: {
    initial: "🎉 Hi {name}! Thanks for your enquiry! Don't forget your $50 discount. We'll contact you within 24 hours! 🔥",
    followUp: "👋 Hi {name}, following up on your enquiry about {subject}. Ready to save $50? Any questions? 💡",
    quote: "📊 Hi {name}, here's your quote with $50 discount applied: {quoteDetails} ✨",
    completion: "🎊 Hi {name}, your project is complete! Thanks for choosing NZXT Gen! 🏆"
  },
  quote: {
    initial: "🧾 Hi {name}! Quote request received for {project}. Preparing detailed quote now! ⚡",
    followUp: "📋 Hi {name}, your {project} quote is ready! When's good to discuss? 📞",
    approved: "🚀 Hi {name}, fantastic! Starting your {project} project as discussed! 🔧",
    completion: "✅ Hi {name}, your {project} is complete! Thanks for your business! 🌟"
  }
};

// Replace template variables
export const formatMessageTemplate = (template, data) => {
  return template
    .replace(/{name}/g, data.name || `${data.firstName} ${data.lastName}`)
    .replace(/{subject}/g, data.message?.substring(0, 50) || data.description?.substring(0, 50))
    .replace(/{project}/g, data.buildingType || 'electrical project')
    .replace(/{quoteDetails}/g, data.quoteDetails || 'See attached quote')
    .replace(/{(\w+)}/g, (match, key) => data[key] || match);
};

// Analytics functions
export const getNotificationStats = () => {
  const stats = {
    enquiriesSentToday: 0,
    quotesSentToday: 0,
    totalNotifications: 0,
    lastNotificationTime: null
  };
  
  // This would typically pull from localStorage or a database
  return stats;
};

// Emergency notification (for urgent submissions)
export const sendUrgentNotification = (submissionData, type, reason = 'High Priority') => {
  const urgentMessage = `🚨 *URGENT SUBMISSION* 🚨
*Reason:* ${reason}

${type === 'enquiry' ? formatEnquiryNotification(submissionData) : formatQuoteNotification(submissionData)}

⚡ *IMMEDIATE ACTION REQUIRED* ⚡`;

  const whatsappURL = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(urgentMessage)}`;
  window.open(whatsappURL, '_blank');
};

const whatsappService = {
  sendAdminNotification,
  sendCustomerMessage,
  getReplyWhatsAppLink,
  getEmailReplyLink,
  getCalendarEventLink,
  sendNotificationWithRetry,
  sendBulkNotifications,
  sendUrgentNotification,
  messageTemplates,
  formatMessageTemplate,
  getNotificationStats
};

export default whatsappService;
