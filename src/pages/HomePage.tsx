import React from 'react';
import { EventCard } from '../components/EventCard';
import { Event } from '../types';
import { useNavigate } from 'react-router-dom';
import { AIChatbox } from '../components/AIChatbox';

// Mock data for demonstration
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.',
    date: '2024-06-15',
    location: 'Bangalore, India',
    price: 24999,
    capacity: 500,
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'TechEvents India',
    category: 'conference',
    currency: 'INR'
  },
  {
    id: '2',
    title: 'Royal Indian Wedding Expo',
    description: 'Experience the grandeur of Indian weddings with top wedding planners, designers, and vendors.',
    date: '2024-07-20',
    location: 'Delhi, India',
    price: 1999,
    capacity: 200,
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'Wedding Pros India',
    category: 'wedding',
    currency: 'INR'
  },
  {
    id: '3',
    title: 'Business Leadership Summit',
    description: 'A transformative experience for business leaders focusing on innovation and growth strategies.',
    date: '2024-08-10',
    location: 'Mumbai, India',
    price: 34999,
    capacity: 200,
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'Business Leaders Association',
    category: 'conference',
    currency: 'INR'
  },
  {
    id: '4',
    title: 'Bollywood Music Festival 2024',
    description: 'Three days of non-stop music featuring top Bollywood artists, food vendors, and cultural performances.',
    date: '2024-07-01',
    location: 'Goa, India',
    price: 4999,
    capacity: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'Festival Productions India',
    category: 'other',
    currency: 'INR'
  },
  {
    id: '5',
    title: 'Indian Cuisine Masterclass',
    description: 'Learn authentic Indian cooking techniques from renowned chefs in this intensive workshop.',
    date: '2024-06-25',
    location: 'Chennai, India',
    price: 9999,
    capacity: 30,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'Culinary Institute of India',
    category: 'workshop',
    currency: 'INR'
  },
  {
    id: '6',
    title: 'Startup India Pitch Competition',
    description: 'Present your startup idea to leading Indian venture capitalists and win up to ₹1 Crore in funding.',
    date: '2024-08-20',
    location: 'Hyderabad, India',
    price: 2999,
    capacity: 150,
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'Startup India Network',
    category: 'conference',
    currency: 'INR'
  },
  {
    id: '7',
    title: 'Destination Wedding Showcase',
    description: 'Explore magnificent Indian palace venues and meet with luxury wedding planners.',
    date: '2024-09-05',
    location: 'Udaipur, India',
    price: 5999,
    capacity: 300,
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'Royal Weddings India',
    category: 'wedding',
    currency: 'INR'
  },
  {
    id: '8',
    title: 'Digital Marketing Bootcamp',
    description: 'Master the Indian digital landscape with this intensive workshop on SEO, social media, and digital advertising.',
    date: '2024-07-15',
    location: 'Pune, India',
    price: 14999,
    capacity: 100,
    imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'Digital Marketing Institute India',
    category: 'workshop',
    currency: 'INR'
  },
  {
    id: '9',
    title: 'Sustainability Summit India',
    description: 'Join environmental leaders to discuss sustainable solutions for Indian cities and businesses.',
    date: '2024-08-30',
    location: 'Ahmedabad, India',
    price: 7999,
    capacity: 400,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    organizer: 'Green Future India',
    category: 'conference',
    currency: 'INR'
  }
];

export function HomePage() {
  const navigate = useNavigate();

  const handleEventClick = (event: Event) => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Discover Amazing Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find and book the perfect events across India - from tech conferences to cultural festivals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockEvents.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onClick={handleEventClick}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <AIChatbox />
    </div>
  );
}