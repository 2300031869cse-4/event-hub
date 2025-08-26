import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AboutSection />
          <QuickLinks />
          <ContactInfo />
          <SocialConnect />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

function AboutSection() {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">About EventHub</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        EventHub is India's premier event management platform, connecting organizers 
        with attendees for conferences, workshops, and cultural celebrations since 2020. 
        We're committed to making event planning and attendance seamless and memorable.
      </p>
    </div>
  );
}

function QuickLinks() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/events", text: "All Events" },
    { to: "/create-event", text: "Create Event" },
    { to: "/blog", text: "Blog" }
  ];

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.to}>
            <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5 mr-3 text-indigo-400" />,
      content: (
        <p className="text-gray-400">
          Level 5, Cyber Towers,<br />
          Hi-Tech City, Hyderabad 500081
        </p>
      )
    },
    {
      icon: <Phone className="h-5 w-5 mr-3 text-indigo-400" />,
      content: <p className="text-gray-400">+91 (040) 4567 8900</p>
    },
    {
      icon: <Mail className="h-5 w-5 mr-3 text-indigo-400" />,
      content: (
        <a href="mailto:support@eventhub.in" className="text-gray-400 hover:text-white">
          support@eventhub.in
        </a>
      )
    }
  ];

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center">
            {detail.icon}
            {detail.content}
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialConnect() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com" }
  ];

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <NewsletterForm />
    </div>
  );
}

function NewsletterForm() {
  return (
    <div className="mt-6">
      <h4 className="text-white text-sm font-semibold mb-2">Subscribe to Our Newsletter</h4>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}

function FooterBottom() {
  const legalLinks = [
    { to: "/privacy", text: "Privacy Policy" },
    { to: "/terms", text: "Terms of Service" },
    { to: "/cookies", text: "Cookie Policy" }
  ];

  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2024 EventHub. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {legalLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-400 hover:text-white text-sm"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}