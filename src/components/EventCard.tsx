import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../types';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

export function EventCard({ event, onClick }: EventCardProps) {
  const formatCurrency = (price: number, currency: string) => {
    if (currency === 'INR') {
      return `₹${price.toLocaleString('en-IN')}`;
    }
    return `$${price}`;
  };

  return (
    <div 
      onClick={() => onClick(event)}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="relative">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 font-semibold rounded-full text-sm">
            {event.category}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
            <span>{format(new Date(event.date), 'PPP')}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-2 text-indigo-500" />
            <span>{event.capacity.toLocaleString()} spots</span>
          </div>
          <div className="text-lg font-bold text-indigo-600">
            {formatCurrency(event.price, event.currency || 'USD')}
          </div>
        </div>
      </div>
    </div>
  );
}