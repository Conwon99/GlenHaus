// Phone number tracking configuration
export const CANONICAL_PHONE = "07368 665616";
export const CANONICAL_PHONE_TEL = "+447368665616";
export const TRACKING_PHONE = "+44 7368 665616";
export const TRACKING_PHONE_TEL = "+447368665616";

// Format phone number for display (preserves +44 and formats nicely)
export const formatTrackingPhone = (phone: string): string => {
  // Keep +44 prefix and format as +44 7368 665616
  if (phone.startsWith("+44")) {
    const cleaned = phone.replace("+44", "").replace(/\s/g, "");
    // Format as +44 7368 665616 (country code, space, 4 digits, space, 6 digits)
    if (cleaned.length === 10) {
      return "+44 " + cleaned.slice(0, 4) + " " + cleaned.slice(4);
    }
    return "+44 " + cleaned;
  }
  return phone;
};

export const formatTrackingPhoneDisplay = (): string => {
  return formatTrackingPhone(TRACKING_PHONE);
};

