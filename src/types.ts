export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
  capacity: number;
  imageUrl: string;
  organizer: string;
  category: 'conference' | 'wedding' | 'workshop' | 'other';
  currency?: 'USD' | 'INR';
}

export interface Ticket {
  id: string;
  eventId: string;
  attendeeName: string;
  attendeeEmail: string;
  purchaseDate: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}