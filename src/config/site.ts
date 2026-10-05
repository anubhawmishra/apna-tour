// Central Site & Business Configuration for APNA TOUR
// Prevents hardcoded contact details across components and ensures single-source-of-truth.

export const siteConfig = {
  name: "APNA TOUR",
  legalName: "APNA TOUR Travel Discovery Private Limited",
  tagline: "Your trusted companion for discovering India",
  description:
    "An independent, editorial Indian travel discovery platform. Explore states, storied cities, authentic regional food, hidden architectural gems, and human itineraries.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://apnatour.in",

  // Business Owner & Operations Contact
  contact: {
    ownerName: "Ashish Nath Tiwari",
    name: "Ashish Nath Tiwari",
    role: "Founder & Operations Lead",
    email: "ashishnathtiwari12@gmail.com",
    phone: "+91 7277631873",
    displayPhone: "+91 72776 31873",
    cleanPhone: "917277631873",
    whatsappUrl: "https://wa.me/917277631873?text=Hi%20Ashish,%20I%20am%20exploring%20a%20trip%20on%20APNA%20TOUR",
    hours: "Monday – Saturday: 9:30 AM – 7:30 PM IST",
    location: "Pune, Maharashtra & New Delhi, India",
    editorialEmail: "editorial@apnatour.in",
  },

  // Legal & Grievance Placeholders
  legal: {
    entityName: "[LEGAL ENTITY NAME]",
    registeredAddress: "[REGISTERED ADDRESS]",
    privacyEmail: "privacy@apnatour.in",
    grievanceEmail: "ashishnathtiwari12@gmail.com",
    grievanceOfficerName: "Ashish Nath Tiwari (Designated Grievance Officer)",
  },

  // Social & Platform Links
  social: {
    twitter: "https://twitter.com/apnatour",
    instagram: "https://instagram.com/apnatour",
  },
};
