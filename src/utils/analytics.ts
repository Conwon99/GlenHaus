// Google Analytics event tracking utility

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - The event name (e.g., "quoteButton_hero", "phone_nav")
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'CTA',
      event_label: eventName,
      ...eventParams,
    });
  }
};

/**
 * Track quote button clicks
 * Format: quoteButton_{location}
 * Examples: quoteButton_hero, quoteButton_nav
 */
export const trackQuoteButton = (location: string) => {
  trackEvent(`quoteButton_${location}`);
};

/**
 * Track phone link clicks
 * Format: phone_{location}
 * Examples: phone_hero, phone_nav, phone_services
 */
export const trackPhone = (location: string) => {
  trackEvent(`phone_${location}`);
};

/**
 * Track form start (when user first interacts with form)
 * Format: formstart_{location}
 * Examples: formstart_contact, formstart_service
 */
export const trackFormStart = (location: string = 'contact') => {
  trackEvent(`formstart_${location}`, {
    event_category: 'Form',
    event_label: location,
  });
};

/**
 * Track form submit
 * Event name: form_submit
 */
export const trackFormSubmit = (location?: string) => {
  trackEvent('form_submit', {
    event_category: 'Form',
    event_label: location || 'contact',
  });
};

