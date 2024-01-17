'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgLink, CgMail, CgPhone } from 'react-icons/cg';
import { ContactUs, Project, SectionHeader, Testimonial, Text } from './components/ReuseableComponents';

export default function Home() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
      imageUrl: '/imgs/4.jpg',
      link: '#project1'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
      imageUrl: '/imgs/8.jpg',
      link: '#project2'
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas maiores, ducimus non dolor illum.',
      imageUrl: '/imgs/bg_video.mp4',
      link: '#project3'
    },
    // add more projects as needed
  ];

  const testimonials = [
    {
      name: 'John Doe',
      position: 'Volunteer Cordinator',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/imgs/9.jpg'
    },
    {
      name: 'Jane Smith',
      position: 'Donor',
      quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?.',
      imageUrl: '/imgs/5.jpg'
    },
    {
      name: 'Aman Jackson',
      position: 'Donor',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/imgs/6.jpg'
    },
    //Add more testimonials
  ]

  return (
    <main>
      <header className='relative overflow-hidden h-screen'>
        {/* video background */}
        <video className='absolute top-0 left-0 object-cover w-full h-full' autoPlay loop muted>
          <source src='/imgs/bg_video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
          <h1 className='text-4xl font-bold mb-4'>Empowering Change, One Step at a Time</h1>
          <p className='text-lg mb-8'>Join us in making a difference in the world.</p>
          {/*  You can add buttons, calls-to-action, or other elements as needed */}
          <div className='flex gap-4 items-center'>
            <button className='px-4 py-1 bg-ocean-blue rounded'>Donate</button>
            <button className='px-4 py-1 bg-ocean-blue rounded'>contact us</button>
          </div>
        </div>
      </header>

      <section id='about' className='bg-light-gray py-16'>
        <div className='container px-2 sm:px-0 mx-auto flex items-center justify-center flex-col sm:flex-row'>
          <div className='sm:w-1/2 mb-8 sm:md-0 sm:mr-8'>
            {/* Replace the placeholder URL with your actusl image URL */}
            <Image src={"/imgs/1.jpg"} alt='About Us Image' className='rounded-md shadow-md' width={1920} height={1280} />
          </div>
          <div className='sm:w-1/2 text-center sm:text-left'>
            <h2 className='text-3xl font-bold mb-6'><Link href={'/about#about-us'} className='hover:text-ocean-blue flex items-center justify-center'>About Us <CgLink /></Link></h2>
            <p className='text-lg mb-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate veritatis repellat qui est non ratione beatae, iure illum natus vitae!
            </p>
            <p className='text-lg mb-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate veritatis repellat qui est non ratione beatae, iure illum natus vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel delectus itaque, eius fugit, veritatis, neque iure facilis officiis impedit nam! Itaque, et! A?
            </p>
            {/* You can add more paragraphs or information as needed */}
          </div>
        </div>
      </section>

      <section id='projects' className='py-16'>
        <div className='container px-2 mx-auto'>
          <SectionHeader headerLink={'#projects'} headerText={'Our Projects'} style={'justify-center'} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id='get-involved' className='bg-light-gray py-16'>
        <div className='container px-2 mx-auto text-center'>
          <SectionHeader headerLink={'#get-involved'} headerText={'Get Involved'} style={'justify-center'} />
          <p className='text-lg mb-8'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magni earum vitae, incidunt minus nesciunt veritatis.
          </p>
          <p className='text-lg mb-8'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae magni earum vitae, incidunt minus nesciunt veritatis.
          </p>
          <a href='#get-involved' className='bg-ocean-blue text-white py-2 px-6 rounded-full hover:bg-dark-ocean-blue transition duration-300'>Join Us</a>
        </div>
      </section>

      <section id='testimonials' className='py-16'>
        <div className='container px-2 mx-auto text-center'>
          <SectionHeader headerLink={'#testimonials'} headerText={'What Others Say'} style={'justify-center'} />
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
        <div className='text-center mt-8'><a href='#view-more' className='text-ocean-blue hover:underline hover:text-dark-ocean-blue duration-300'>View More</a></div>
      </section>
    </main>
  )
}
