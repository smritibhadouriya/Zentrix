import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Fa6, FaLocationDot } from 'react-icons/fa6';

export const footerData = {
  company: {
    name: 'Zentrix',
    description: 'Leading digital marketing agency providing comprehensive solutions for modern businesses. We help brands grow through innovative digital strategies.',
    socialLinks: [
      { href: '#', icon: FaFacebook , label: 'Facebook' },
      { href: '#', icon: FaInstagram , label: 'Instagram' },
      { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
      { href: '#', icon: FaTwitter, label: 'Twitter' },
    ],
  },
  services: [
    { to: '/service/brand-strategy', label: 'Brand & Strategy' },
    { to: '/service/creative', label: 'Creative' },
    { to: '/service/social', label: 'Social' },
    { to: '/service/pr', label: 'PR' },
    { to: '/service/digital', label: 'Digital' },
    { to: '/service/performance-marketing', label: 'Performance Marketing' },
  ],
  companyLinks: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
  contactInfo: [
    { icon: FaLocationDot , text: '123 Business Avenue, New York, NY 10001' },
    { icon: FaPhone , text: '+1 (555) 123-4567' },
    { icon: FaMailBulk, text: 'hello@Zentrix.com' },
  ],
  footerLinks: [
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Cookie Policy' },
  ],
};