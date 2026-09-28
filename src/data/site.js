// Central place for editable content. Swap images/contact details/stats here.
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=70`;

// Replace with licensed photos of your own projects before launch.
export const IMAGES = {
  hero: u('photo-1509391366360-2e959784a276'),
  residential: u('photo-1508514177221-188b1cf16e9d'),
  commercial: u('photo-1559302504-64aae6ca6b6d'),
  industrial: u('photo-1497440001374-f26997328c1b'),
  consultation: u('photo-1521618755572-156ae0cdd74d'),
  about: u('photo-1613665813446-82a78c468a1d'),
};

// Placeholder values: edit freely.
export const STATS = [
  { value: '500+', label: 'Projects' },
  { value: '1,000+', label: 'Happy Customers' },
  { value: '5 MW+', label: 'Clean Energy Generated' },
  { value: '25+ Years', label: 'Solar Lifespan' },
];

export const CONTACT = {
  phone: '[Add phone number]',
  email: '[Add email]',
  address: '[Add company address]',
  hours: ['Monday – Saturday', '9:00 AM – 6:00 PM'],
};

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About & Solutions' },
  { to: '/contact', label: 'Contact' },
];
