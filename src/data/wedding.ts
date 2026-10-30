/**
 * Centralized Wedding Content Data Module
 *
 * All placeholder values are marked as TO_BE_CONFIRMED.
 * Content should be populated from family-approved submissions in wedding-details.template.md.
 * Do not invent names, dates, times, venues, or ritual details.
 */

export interface AuspiciousInvocation {
  enabled: boolean;
  telugu: string;
  transliteration?: string;
  english?: string;
}

export interface PersonDetails {
  name: string;
  nameTelugu: string;
  parents: string;
  parentsTelugu: string;
  researchField?: string;
}

export interface CoupleData {
  groom: PersonDetails;
  bride: PersonDetails;
  invitationLine: string;
  invitationLineTelugu: string;
  story: {
    enabled: boolean;
    headline: string;
    description: string;
    descriptionTelugu?: string;
    botanicalTheme: string;
  };
}

export interface WeddingEvent {
  id: string;
  name: string;
  nameTelugu: string;
  date: string;
  time: string;
  venue: string;
  notes?: string;
  isConfirmed: boolean;
}

export interface MainCeremony {
  eventTitle: string;
  eventTitleTelugu: string;
  date: string;
  dayOfWeek: string;
  muhurthamTime: string;
  muhurthamTelugu: string;
  venueName: string;
  venueAddress: string;
  directionsUrl: string;
  parkingNotes: string;
  travelNotes: string;
}

export interface FamilyHosts {
  invitationText: string;
  invitationTextTelugu: string;
  hostsSummary: string;
}

export interface ClosingBlessing {
  eldersBlessing: string;
  eldersBlessingTelugu: string;
  signoff: string;
  signoffTelugu: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  isAvailable: boolean;
  caption?: string;
}

export interface PhotographyConfig {
  heroImage: ImageAsset;
  couplePortrait: ImageAsset;
  walkingShot: ImageAsset;
  ritualImage: ImageAsset;
  agricultureTheme: ImageAsset;
  venueImage: ImageAsset;
  celebrationImage: ImageAsset;
  // Legacy aliases
  storyImage: ImageAsset;
}

export interface WeddingData {
  siteTitle: string;
  auspiciousInvocation: AuspiciousInvocation;
  couple: CoupleData;
  mainCeremony: MainCeremony;
  schedule: WeddingEvent[];
  familyHosts: FamilyHosts;
  closing: ClosingBlessing;
  photography: PhotographyConfig;
}

export const weddingData: WeddingData = {
  siteTitle: "Wedding Invitation | TO_BE_CONFIRMED",

  auspiciousInvocation: {
    // Only displayed if confirmed and approved by family
    enabled: true,
    telugu: "శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు",
    transliteration: "Sri Rastu · Shubhamastu · Avighnamastu",
    english: "May there be auspiciousness, wellness, and unhindered joy",
  },

  couple: {
    groom: {
      name: "TO_BE_CONFIRMED",
      nameTelugu: "TO_BE_CONFIRMED",
      parents: "Smt. TO_BE_CONFIRMED & Sri TO_BE_CONFIRMED",
      parentsTelugu: "శ్రీమతి & శ్రీ TO_BE_CONFIRMED",
      researchField: "Agricultural Sciences & Research (TO_BE_CONFIRMED)",
    },
    bride: {
      name: "TO_BE_CONFIRMED",
      nameTelugu: "TO_BE_CONFIRMED",
      parents: "Smt. TO_BE_CONFIRMED & Sri TO_BE_CONFIRMED",
      parentsTelugu: "శ్రీమతి & శ్రీ TO_BE_CONFIRMED",
      researchField: "Agricultural Sciences & Research (TO_BE_CONFIRMED)",
    },
    invitationLine: "Together with our families, we invite you to share our joy as we unite in marriage.",
    invitationLineTelugu: "మా వివాహ మహోత్సవానికి మీ ఆశీస్సులతో విచ్చేయవలసిందిగా సాదర ఆహ్వానం.",
    story: {
      enabled: true,
      headline: "Rooted in Heritage, Growing Together",
      description:
        "United by deep cultural values and a shared dedication to cultivation and discovery, our journey begins with reverence for the soil and hope for the harvest ahead.",
      descriptionTelugu:
        "మన సంస్కృతి సాంప్రదాయాలపై గౌరవంతో, నూతన జీవితంలోకి అడుగుపెడుతున్న శుభవేళ...",
      botanicalTheme: "Telangana flora and seeds of prosperity (TO_BE_CONFIRMED)",
    },
  },

  mainCeremony: {
    eventTitle: "Kalyanam & Auspicious Muhurtham",
    eventTitleTelugu: "కల్యాణం & సుముహూర్తం",
    date: "TO_BE_CONFIRMED",
    dayOfWeek: "TO_BE_CONFIRMED",
    muhurthamTime: "TO_BE_CONFIRMED (Auspicious Muhurtham)",
    muhurthamTelugu: "సుముహూర్తం: TO_BE_CONFIRMED",
    venueName: "TO_BE_CONFIRMED Convention / Kalyana Mandapam",
    venueAddress: "TO_BE_CONFIRMED, Hyderabad / Telangana",
    directionsUrl: "https://maps.google.com/?q=TO_BE_CONFIRMED",
    parkingNotes: "Valet & guest parking available on premises (TO_BE_CONFIRMED).",
    travelNotes: "Easily accessible from major transport hubs in Telangana (TO_BE_CONFIRMED).",
  },

  schedule: [
    {
      id: "event-muhurtham",
      name: "Wedding Ceremony (Muhurtham)",
      nameTelugu: "లగ్న మహోత్సవం",
      date: "TO_BE_CONFIRMED",
      time: "TO_BE_CONFIRMED",
      venue: "Main Mandapam (TO_BE_CONFIRMED)",
      notes: "Traditional Telugu Hindu wedding rituals including Jeelakarra-Bellam and Talambralu.",
      isConfirmed: false,
    },
    {
      id: "event-reception",
      name: "Wedding Reception & Dinner",
      nameTelugu: "విందు & శుభాకాంక్షలు",
      date: "TO_BE_CONFIRMED",
      time: "TO_BE_CONFIRMED",
      venue: "Banquet Hall (TO_BE_CONFIRMED)",
      notes: "An evening of celebration and traditional Telangana feast with family and friends.",
      isConfirmed: false,
    },
  ],

  familyHosts: {
    invitationText:
      "We warmly request the honor of your presence and blessings on this sacred occasion as our children embark on their new beginning.",
    invitationTextTelugu:
      "మా కుటుంబ సమేతంగా మీ అందరినీ ఆప్యాయంగా ఆహ్వానిస్తున్నాము. మీ శుభాశీస్సులే మాకు శ్రీరామరక్ష.",
    hostsSummary: "The Sheri & [Bride's Family Name] Families (TO_BE_CONFIRMED)",
  },

  closing: {
    eldersBlessing: "With the loving blessings of our parents, grandparents, and ancestors.",
    eldersBlessingTelugu: "తల్లిదండ్రుల, పెద్దల దివ్యాశీస్సులతో...",
    signoff: "We eagerly look forward to welcoming you and celebrating together.",
    signoffTelugu: "మీ రాక మాకు ఎంతో సంతోషం.",
  },

  photography: {
    heroImage: {
      src: "/images/01-hero-main-banner.jpg",
      alt: "Telugu bride and groom standing together in traditional wedding attire",
      isAvailable: true,
      caption: "Auspicious Union · కల్యాణ వైభోగం",
    },
    couplePortrait: {
      src: "/images/02-couple-portrait.jpg",
      alt: "Close-up portrait of the bride and groom sharing a serene moment",
      isAvailable: true,
      caption: "A shared journey begins · నూతన దంపతులు",
    },
    walkingShot: {
      src: "/images/03-full-body-walking-shot.jpg",
      alt: "Full-body portrait of the bride and groom walking together hand in hand",
      isAvailable: true,
      caption: "Walking towards a shared future · సప్తపది అడుగులు",
    },
    ritualImage: {
      src: "/images/04-traditional-ritual.jpg",
      alt: "Traditional Telugu wedding rituals and sacred havan ceremony",
      isAvailable: true,
      caption: "Sacred rites & invocations · వివాహ సంప్రదాయాలు",
    },
    agricultureTheme: {
      src: "/images/05-agriculture-theme.jpg",
      alt: "Couple in lush green agricultural field celebrating Telangana's fertile soil and harvest",
      isAvailable: true,
      caption: "Rooted in the fertile soil of Telangana · హరిత సౌభాగ్యం",
    },
    venueImage: {
      src: "/images/06-venue-location.jpg",
      alt: "The elegantly decorated wedding venue and celebration mandapam",
      isAvailable: true,
      caption: "Venue & Celebration Mandapam · వివాహ ప్రాంగణం",
    },
    celebrationImage: {
      src: "/images/07-celebration-family.jpg",
      alt: "Warm family celebration and blessings with loved ones",
      isAvailable: true,
      caption: "Surrounded by family, elders, and cherished friends · ఆశీస్సులతో",
    },
    // Backwards-compatible alias for existing references
    storyImage: {
      src: "/images/05-agriculture-theme.jpg",
      alt: "Couple in lush green agricultural field celebrating Telangana's fertile soil and harvest",
      isAvailable: true,
      caption: "Rooted in the fertile soil of Telangana · హరిత సౌభాగ్యం",
    },
  },
};
