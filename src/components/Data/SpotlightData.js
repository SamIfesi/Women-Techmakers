export const spotlightHero = {
  eyebrow: 'Women Spotlight',
  titleLine1: 'Celebrate',
  titleLine2Leading: 'A',
  titleLine2: 'Woman',
  titleLine3: 'In Tech',
  subtitle:
    'Know a woman in technology who deserves to be celebrated? Nominate her for the WTM Nsukka Women Spotlight at IWD 2026.',
  stat: null,
};

export const spotlightAbout = {
  icon: '/assets/icons/spotlight.svg',
  title: 'What is the Women Spotlight?',
  paragraphs: [
    "The Women Spotlight is WTM Nsukka's way of recognising and publicly celebrating women who are making a difference in technology - whether through building products, mentoring others, leading teams, or simply showing up consistently in spaces where they are often the only woman in the room.",
    "Nominated women will be celebrated at the IWD 2026 event on 28th March and featured on this page permanently as part of the event's digital legacy.",
  ],
};

export const spotlightNomination = {
  icon: '/assets/icons/spotlight-love.svg',
  title: 'Nominate Someone',
  intro:
    'Fill out the form below to nominate a woman in technology for the WTM Nsukka Women Spotlight.',
  fields: [
    {
      id: 'nominee-name',
      label: "Nominee's Full Name",
      placeholder: 'e.g. Ada Lovelace',
      type: 'text',
      required: true,
    },
    {
      id: 'nominee-role',
      label: 'Role & Organisation',
      placeholder: 'e.g. Software Engineer at TechCo',
      type: 'text',
      required: true,
    },
    {
      id: 'nominee-why',
      label: 'Why should she be spotlighted?',
      placeholder: 'Tell us what makes her remarkable...',
      type: 'textarea',
      required: true,
    },
    {
      id: 'nominator-contact',
      label: 'Your Contact (optional)',
      placeholder: 'Email or phone number',
      type: 'text',
      required: false,
    },
  ],
  submitText: 'Submit Nomination',
  deadlineText: 'Nominations close before 28th March 2026',
};
