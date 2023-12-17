'use client'
import { SectionHeader, SubHeader } from '@/app/components/ReuseableComponents';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Dummy data for events
const eventsData = [
  { id: 1, title: 'Community Cleanup', date: new Date(2023, 11, 25), location: 'City Park', description: 'Join us for a community cleanup event at City Park.' },
  { id: 2, title: 'Fundraising Gala', date: new Date(2024, 0, 1), location: 'Grand Ballroom', description: 'Annual fundraising gala to support our projects.' },
  // Add more events as needed
];

// Events Page component
export default function Page() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <main>
        <SubHeader backgroundImage={'/imgs/8.jpg'} pageTitle={'Our Events'} />
        <section className="container mx-auto my-16 px-2">
            <SectionHeader headerLink={'#upcoming-events'} headerText={'Upcoming Events'} />

            <div className="flex flex-col md:flex-row">
                {/* Calendar */}
                <div className="mb-8 md:mr-8">
                <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                />
                </div>

                {/* Events List */}
                <ul className="list-disc pl-8">
                    {eventsData.map((event) => (
                        <li key={event.id} className='mb-4'>
                            <h3 className='text-xl font-bold'>{event.title}</h3>
                            <p className='text-gray-600 mb-2'>{event.date.toDateString()} | {event.location}</p>
                            <p>{event.description}</p>
                        </li>
                    ))}
                {/* {eventsData.filter(event =>
                    event.date.toDateString() === selectedDate.toDateString()).map((event) => (
                    <li key={event.id} className="mb-4">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.date.toDateString()} | {event.location}</p>
                        <p>{event.description}</p>
                    </li>
                    ))
                } */}
                </ul>
            </div>
        </section>
    </main>
  );
};