import {
  HeadsetIcon,
  TargetIcon,
  FileSpreadsheetIcon,
  PhoneCallIcon,
  UsersIcon,
  BarChart3Icon,
  ZapIcon,
  WifiIcon,
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeIcon,
  HeartHandshakeIcon,
  SparklesIcon } from
'lucide-react';

export const BRAND = {
  name: 'ENVIC Global',
  logo: "/image.png",
  mascot: "/image-1.png",
  tagline: 'A leading BPO supporting UK and US businesses',
  email: 'hello@envicglobal.com',
  phone: '+94 11 234 5678',
  ukPhone: '+44 20 7946 0958',
  address: 'Colombo, Sri Lanka'
};

export const IMAGES = {
  hero: "/d9fba48b-5c9c-41e3-bd03-f4d4a98bde12.jpg",
  team: "/c4ddf645-b495-421a-b376-dfc9d806a77c.jpg",
  about: "/a2265fbb-9bd8-44b0-b763-84511b4ac508.jpg",
  office: "/5d728b98-f910-4638-a7ca-5b749471c7ac.jpg",
  cta: "/a7af9efa-32e1-4a87-a655-c32ad936a713.jpg"
};

export const NAV = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Our Services', to: '/services' },
{ label: 'Our Clients', to: '/clients' },
{ 
  label: 'Partners', 
  to: '/partners',
  children: [
    { label: 'Partnership Models', to: '/partners' },
    { label: 'ENVIC RCM', to: '/partners/rcm' },
    { label: 'Siraawata', to: '/partners/siraawata' }
  ]
},
{ label: 'Contact', to: '/contact' }];


export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: typeof HeadsetIcon;
  points: string[];
};

export const SERVICES: Service[] = [
{
  slug: 'customer-support',
  title: 'Customer Support',
  summary:
  'Inbound and outbound voice, email and live chat teams that protect your brand voice across every conversation.',
  icon: HeadsetIcon,
  points: [
  'Multichannel: voice, email, chat and WhatsApp',
  'UK and US business-hours coverage',
  'CSAT tracked and reported weekly']

},
{
  slug: 'lead-generation',
  title: 'Lead Generation',
  summary:
  'Qualified, appointment-ready pipeline built by agents trained on your offer, objections and compliance rules.',
  icon: TargetIcon,
  points: [
  'Data sourcing and list hygiene',
  'Qualification against your ICP',
  'Booked appointments straight into your CRM']

},
{
  slug: 'back-office',
  title: 'Back-Office Solutions',
  summary:
  'The unglamorous work that slows teams down — processed accurately, on time, every single day.',
  icon: FileSpreadsheetIcon,
  points: [
  'Order processing and data entry',
  'Document verification and QA',
  'Billing and account administration']

},
{
  slug: 'telesales',
  title: 'Telesales & Retention',
  summary:
  'Conversion-focused calling teams for acquisition, renewals and win-back campaigns.',
  icon: PhoneCallIcon,
  points: [
  'Script design and A/B testing',
  'Objection handling frameworks',
  'Call scoring and coaching loops']

},
{
  slug: 'dedicated-teams',
  title: 'Dedicated Teams',
  summary:
  'Your own named squad in Colombo — recruited to your brief, managed by us, loyal to your KPIs.',
  icon: UsersIcon,
  points: [
  'Recruit-to-spec in 3–4 weeks',
  'Dedicated team leader and QA analyst',
  'Scale up or down with 30 days notice']

},
{
  slug: 'reporting',
  title: 'Reporting & Analytics',
  summary:
  'Live dashboards and honest weekly reviews so you always know exactly what your outsourced team delivered.',
  icon: BarChart3Icon,
  points: [
  'Real-time performance dashboards',
  'Weekly business reviews',
  'Root-cause analysis on misses']

}];


export const SECTORS = [
{
  title: 'Energy & Utilities',
  icon: ZapIcon,
  body: 'Switching journeys, meter reads, billing queries and retention calling for UK energy suppliers and brokers.'
},
{
  title: 'Telecom',
  icon: WifiIcon,
  body: 'Broadband and mobile onboarding, technical triage, provisioning support and churn-reduction campaigns.'
},
{
  title: 'Home Improvement',
  icon: HomeIcon,
  body: 'Solar, insulation, windows and roofing — qualified appointments and full survey-to-install support.'
}];


export const STATS = [
{ value: '250+', label: 'Trained specialists' },
{ value: '12+', label: 'Years combined leadership' },
{ value: '96%', label: 'Average client CSAT' },
{ value: '2', label: 'Markets served: UK & US' }];


export const VALUES = [
{
  title: 'Accountability',
  icon: ShieldCheckIcon,
  body: 'We report the numbers as they are — including the ones that need work. No dressed-up dashboards.'
},
{
  title: 'Speed to value',
  icon: ClockIcon,
  body: 'Most teams are live and taking contacts within three to four weeks of signing.'
},
{
  title: 'One global standard',
  icon: GlobeIcon,
  body: 'Colombo delivery, UK and US service expectations. Accent-neutral, compliance-first, always.'
},
{
  title: 'People first',
  icon: HeartHandshakeIcon,
  body: 'We invest in careers, not seats. Low attrition is what keeps your quality high.'
}];


export const PROCESS = [
{
  step: '01',
  title: 'Discovery call',
  body: 'We map your volumes, tools, target metrics and the gaps costing you money today.'
},
{
  step: '02',
  title: 'Blueprint & pricing',
  body: 'You get a written delivery model — team shape, coverage hours, SLAs and transparent pricing.'
},
{
  step: '03',
  title: 'Recruit & train',
  body: 'We hire to your brief, then train on your product, systems and tone of voice.'
},
{
  step: '04',
  title: 'Go live & optimise',
  body: 'Soft launch, daily QA, weekly reviews and continuous improvement from week one.'
}];


export const TESTIMONIALS = [
{
  quote:
  'ENVIC took over our entire inbound queue in a month. Our answer rate went from 61% to 94% and we finally stopped losing customers on hold.',
  name: 'Rachel Whitmore',
  role: 'Head of Operations, UK energy supplier'
},
{
  quote:
  'The appointment quality is the difference. Their team pre-qualifies properly, so our surveyors stopped wasting half their week on dead visits.',
  name: 'Daniel Osei',
  role: 'Sales Director, home improvement group'
},
{
  quote:
  'Working with ENVIC feels like having a second office, not a vendor. Weekly reviews are direct, honest and genuinely useful.',
  name: 'Marissa Cole',
  role: 'VP Customer Experience, US telecom'
}];


export const CLIENT_LOGOS = [
'Northgate Energy',
'Brightwire',
'Halcyon Home',
'Meridian Telecom',
'SolarPath',
'Corvus Utilities',
'Blue Harbour',
'Ashford & Co'];


export const CASE_STUDIES = [
{
  sector: 'Energy',
  title: 'Cutting a 9-minute hold time to under 40 seconds',
  body: 'A UK energy supplier was drowning in winter billing queries. We stood up a 24-seat inbound team in 26 days and rebuilt their call routing alongside it.',
  metrics: [
  { value: '-93%', label: 'Average hold time' },
  { value: '+33pts', label: 'Answer rate' }]

},
{
  sector: 'Home Improvement',
  title: 'Doubling installer-ready appointments',
  body: 'Tighter qualification criteria and a rebuilt calling script lifted the share of appointments that converted into surveys, without increasing spend.',
  metrics: [
  { value: '2.1x', label: 'Qualified appointments' },
  { value: '-28%', label: 'Cost per booking' }]

},
{
  sector: 'Telecom',
  title: 'A back-office team that never falls behind',
  body: 'Provisioning and order-processing backlogs were clearing three days late. A dedicated 12-person back-office pod now closes same-day, every day.',
  metrics: [
  { value: '100%', label: 'Same-day processing' },
  { value: '99.4%', label: 'Data accuracy' }]

}];


export const PARTNER_TYPES = [
{
  title: 'Referral Partners',
  icon: SparklesIcon,
  body: 'Consultants and agencies who introduce clients needing offshore capacity. Simple agreement, recurring commission, we handle delivery.',
  perks: ['Recurring revenue share', 'Co-branded proposals', 'Named partner manager']
},
{
  title: 'White-Label Partners',
  icon: ShieldCheckIcon,
  body: 'BPOs and marketing agencies who deliver under their own brand while our Colombo teams run the operation behind the scenes.',
  perks: ['Fully branded as you', 'Dedicated team leads', 'Your SLAs, our delivery']
},
{
  title: 'Technology Partners',
  icon: BarChart3Icon,
  body: 'CRM, dialler and CX platforms who need an implementation-ready service layer for their customers.',
  perks: ['Certified agent pool', 'Joint onboarding', 'Integration support']
}];


export const FAQS = [
{
  q: 'How quickly can a team go live?',
  a: 'Most engagements go live in three to four weeks. Smaller pods of two to five agents can be running in as little as ten working days.'
},
{
  q: 'What are your coverage hours?',
  a: 'We run shifts aligned to UK and US business hours, including weekends and out-of-hours cover where the account needs it.'
},
{
  q: 'How is data handled and secured?',
  a: 'Clean-desk floors, access-controlled systems, GDPR-aligned processing and signed DPAs on every account. Recording and retention policies follow your rules.'
},
{
  q: 'What is the minimum team size?',
  a: 'We start from two full-time agents, which lets you test the model before committing to a larger pod.'
}];