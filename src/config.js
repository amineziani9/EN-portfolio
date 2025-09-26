module.exports = {
  email: 'aminziani278@gmail.com',

  socialMedia: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/amine_ziani9/',
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/amineziani3191',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/amine-ziani-/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'blog',
      url: '/blog',
    },
    {
      name: 'Archive',
      url: '/archive',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#071422',
    darkNavy: '#040F1A',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
