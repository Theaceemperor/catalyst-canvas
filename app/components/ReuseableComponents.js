'use client'
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgArrowDown, CgClose, CgLink, CgMail, CgMenu, CgPhone } from 'react-icons/cg';
import { FaFacebook, FaInstagram, FaMinus, FaPlus, FaQ, FaTwitter, FaYoutube } from 'react-icons/fa6';
import FileViewer from './FIleViewer';
import { ChatEngine } from 'react-chat-engine';


export function LiveChat() {

    return (
        <ChatEngine
        projectID="75b973f5-fe93-4f15-a4c9-f3ecb0cf3eac"
        userName="SpadesDev"
        userSecret="SpadesDev2023"
        />
    )
}

export function CallToAction() {
    const router = useRouter();

    return (
        <section className=''>
            <div id='cta' className='container sm:mx-auto my-16 bg-ocean-blue text-white p-8 rounded-md'>
                <SectionHeader headerLink={'#cta'} headerText={'Join Us in Making a Difference'} style={'hover:text-light-blue'} />
                <p className='text-lg mb-4'>Explore how you can contribute to our mission and make a positive impact.</p>

                {/* CTA Button */}
                <button className='bg-light-blue text-white py-2 px-4 rounded-md hover:bg-white hover:text-ocean-blue'
                onClick={() => router.replace('#contact-us')}>Get Involved</button>
            </div>
        </section>
    )
}

export function SubHeader({ backgroundImage, pageTitle }) {
    const subheaderStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    }

    return (
        <header style={subheaderStyle}>
            <div className='w-full h-full bg-black/30 flex items-center justify-center'>
                <h2 className='text-4xl font-bold text-center'>{pageTitle}</h2>
            </div>
        </header>
    )
}

export function FAQ({ question, answer }) {
    const [open,setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="px-4 py-2 shadow shadow-shadow-color rounded min-w-full max-w-md">
            <span className="flex flex-row gap-4 font-bold text-lg"> 
                {question}
                {
                    open
                    ?
                    <button className="focus:outline-none" onClick={handleClose}><FaMinus /></button>
                    :
                    <button className="focus:outline-none" onClick={handleOpen}><FaPlus /></button>
                }
            </span>
            {
                open
                ?
                <blockquote className="flex flex-col gap-1 mt-1">
                    <hr className="border-light-blue mx-2 sm:mx-4" />
                    <p className='text-gray-600'>{answer}</p>
                </blockquote>
                :
                null
            }
        </div>
    )
}

export function Text({text}) {

    return (
        <p className='text-lg mb-8'>{text}</p>
    )
}

export function Testimonial({ name,position,quote,imageUrl }) {

    return (
        <div className='mb-8 sm:mb-0 sm:shadow sm:shadow-shadow-color rounded sm:p-2'>
            <Image src={imageUrl} alt={`${name} Image`} width={500} height={500} quality={80} className='rounded-full w-16 h-16 object-cover mb-4 mx-auto sm:mx-0' />
            <p className='text-gray-600 mb-4'>{quote}</p>
            <p className='font-bold'>{name}</p>
            <p className='text-gray-500'>{position}</p>
        </div>
    )
}

export function SectionHeader({ headerText,headerLink,style }) {

    return (
        <h2 className={`text-3xl font-bold mb-8 text-center`}><Link href={headerLink} className={`flex items-center hover:text-ocean-blue ${style}`}>{headerText}<CgLink /></Link></h2>
    )
}

export function Project({ title, description, imageUrl, link }) {

    return (
        <div className='mb-8'>
            {
                imageUrl
                ?
                <FileViewer filePath={imageUrl} title={title} />
                :
                null
            }
            {/* <Image src={imageUrl} alt={`${title} Image`} width={500} height={500} quality={100} className='rounded-md shadow-md mb-4' /> */}
            <h3 className='text-xl font-bold mb-2'>{title}</h3>
            <p className='text-gray-600 mb-4'>{description}</p>
            {
                link
                ?
                <Link href={link} className='text-ocean-blue hover:underline'>Learn more</Link>
                :
                null
            }
        </div>
    )
}

export function ContactUs() {

    return (
        <section id='contact-us' className='bg-ocean-blue text-white py-16'>
            <div className='container mx-auto text-center'>
            <SectionHeader headerLink={'#contact-us'} headerText={'Contact-Us'} style={'hover:text-light-blue'} />
            <Text text={'Have questions or want to get in touch? Feel free to reach out to us.'} />
                <div className='flex justify-center items-center space-x-4'>
                    {/* contact info */}
                    <a href='mailto:spadesinstitute.empire@gmail.com' className='text-white hover:underline hover:text-goldenrod duration-300 flex items-center'>Email <CgMail className='text-xl' /></a>
                    <span>|</span>
                    <a href='tel:+2349023236306' className='text-white hover:underline hover:text-mint-green duration-300 flex items-center'>Phone <CgPhone /></a>
                </div>
                {/* Contact Form */}
                <form className='max-w-md mx-auto px-2 sm:px-0 mt-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-400'>Your Name</label>
                            <input type='text' id='name' name='name' required className='mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-ocean-blue' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-400'>Your Email</label>
                            <input type='email' id='email' name='email' required className='mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-ocean-blue' />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='message' className='block text-sm font-medium text-gray-400'>Your Message</label>
                        <textarea id='message' name='message' rows={4} required className='mt-1 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-ocean-blue' />
                    </div>
                    <button className='bg-ocean-blue text-white py-2 px-6 rounded-full hover:bg-light-blue transition duration-300'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export function Layout({ children }) {

    return (
        <>
            <NavBar />
            {children}
            <CallToAction />
            <ContactUs />
            <Footer />
        </>
    )
}

export function Footer() {

    return (
        <footer className='bg-gradient-to-r from-ocean-blue to-light-blue text-white p-8'>
            <div className='container mx-auto flex flex-col sm:flex-row justify-between'>
                <div>
                    <h2 className='text-2xl font-bold mb-2'>Quick Links</h2>
                    <aside className='flex flex-col sm:flex-row gap-8 text-left mb-4 sm:mb-0'>
                    <ul className='space-y-2'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About us</Link></li>
                        <li><Link href={'/'}>Projects</Link></li>
                        <li><Link href={'/#get-involved'}>Get Involved</Link></li>
                        <li><Link href={'/'}>Donate</Link></li>
                        <li><Link href={'/'}>News/Events</Link></li>
                        <li><Link href={'/'}>Blog</Link></li>
                    </ul>
                    <ul className='space-y-2'>
                        <li><Link href={'/'}>Impact</Link></li>
                        <li><Link href={'/'}>Gallery</Link></li>
                        <li><Link href={'/#contact-us'}>Contact</Link></li>
                        <li><Link href={'/'}>FAQ</Link></li>
                        <li><Link href={'/'}>Privacy & Terms</Link></li>
                        <li><Link href={'/'}>Get help</Link></li>
                    </ul>
                    </aside>
                </div>
                <p className='text-sm place-self-end font-bold'>© 2023 ESRO. All rights reserved</p>
            </div>
            {/* Social Links */}
            <div className='flex items-center justify-center font-bold mt-4 text-xl'>
                <a href='https://twitter.com/@spadeshub' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
                <span className='mx-2'>∘</span>
                <a href='https://twitter.com/@spadeshub' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
                <span className='mx-2'>∘</span>
                <a href='https://nexvault.vercel.app' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><Image src={'/nexvault_icon.ICO'} width={500} height={500} quality={100} alt='NexVault' className='w-5 h-5 rounded-full' /></a>
                <span className='mx-2'>∘</span>
                <a href='https://twitter.com/@spadeshub' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                <span className='mx-2'>∘</span>
                <a href='https://twitter.com/@spadeshub' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><FaYoutube /></a>
            </div>
        </footer>
    )
}

export function NavBar() {
    const router = useRouter();
    const pathName = usePathname();

  // state for menu togggle
  const [isMobileMenuOpen,setMobileMenuOpen] = React.useState(false);
  // state for scroll direction
  const [prevScrollPosition,setPrevScrollPosition] = React.useState(0);
  //state for overall navbar visibility on scroll
  const [isNavbarVisible, setNavbarVisible] = React.useState(true);

  //function to handle scroll events
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > prevScrollPosition) {
      // scrolling down, hide the navbar
      setNavbarVisible(false);
    } else {
      //scrolling up, show the NavBar
      setNavbarVisible(true);
    }

    // update the previous scroll position
    setPrevScrollPosition(currentScrollPosition);
  };

  // effect to add and remove event listener for scroll
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPosition]);
  
  return (
    <nav className={`${isNavbarVisible || window.scrollY === 0 ? 'translate-y-0' : '-translate-y-full'} transform transition-transform duration-300 ease-in-out bg-gradient-to-r from-ocean-blue to-light-blue p-4 fixed top-0 w-full z-20`}>
    <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'>
        <div className='text-white text-lg font-bold mb-4 sm:mb-0'>Catalyst Canvas</div>
        <div className='sm:hidden'>
        <button className='focus:outline-none text-white' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <CgClose /> : <CgMenu />}
        </button>
        </div>
        <ul className={`sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'} `}>
        {/* Nav Links for small screens */}
            <li className='text-white'><Link href={'/'} passHref className={`cursor-pointer ${pathName === '/' ? 'text-dark-ocean-blue font-bold' : ''} `}>Home</Link></li>
            <li className='text-white'><Link href={'/about'} passHref className={`cursor-pointer ${pathName === '/about' ? 'text-dark-ocean-blue font-bold' : ''} `}>About</Link></li>
            <li className='text-white relative group'>
                <span className={`cursor-pointer ${pathName === '/projects' ? 'font-bold text-dark-ocean-blue' : 'text-white '} `}>Projects</span>
                <ul className='absolute hidden bg-white text-gray-800 p-2 rounded shadow space-y-2 group-hover:block min-w-max'>
                    <li className='hover:bg-gray-200'><Link href={'/projects#project1'}>Project 1</Link></li>
                    <li className='hover:bg-gray-200'><Link href={'/project#project2'}>Project 2</Link></li>
                </ul>
            </li>
            <li className='text-white'><Link href={'/donate'} passHref className={pathName === '/donate' ? 'text-dark-ocean-blue font-bold' : ''}>Donate</Link></li>
            <li className='text-white relative group'>
                <span className='text-white cursor-pointer flex items-center'>More <CgArrowDown /></span>
                <ul className='absolute hidden bg-white text-gray-800 p-2 rounded shadow space-y-2 group-hover:block min-w-max'>
                    <li className='hover:bg-gray-200'><Link href={'/#get-involved'} passHref className={pathName === '/#get-involved' ? 'text-dark-ocean-blue font-bold' : ''}>Get Involved</Link></li>
                    <li className='hover:bg-gray-200'><Link href={'/blog'} passHref className={`cursor-pointer ${pathName === '/blog' ? 'text-dark-ocean-blue font-bold' : ''} `}>Blog/News</Link></li>
                    <li className='hover:bg-gray-200'><Link href={'/projects#impact'}>Impact</Link></li>
                    <li className='hover:bg-gray-200'><Link href={'/events'} passHref className={`cursor-pointer ${pathName === '/events' ? 'text-dark-ocean-blue font-bold' : ''} `}>Events</Link></li>
                    <li className='hover:bg-gray-200'><Link href={'/gallery'} passHref className={`cursor-pointer ${pathName === '/gallery' ? 'text-dark-ocean-blue font-bold' : ''} `}>Media Gallery</Link></li>
                    <li className='hover:bg-gray-200'><Link href={'/about#faq'}>FAQ</Link></li>
                    <li className='hover:bg-gray-200'><Link href={'/privacy'} passHref className={`cursor-pointer ${pathName === '/privacy' ? 'text-dark-ocean-blue font-bold' : ''} `}>Privacy & Terms</Link></li>
                </ul>
            </li>
            <li className='text-white'><Link href={'#contact-us'} className='transition duration-500'>Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className={`mt-4 sm:mt-0 flex items-center space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden sm:flex'} `}>
            <a href='https://twitter.com/@spadeshub' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
            <a href='https://twitter.com/@spadeshub' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
            <a href='https://nexvault.vercel.app' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><Image src={'/nexvault_icon.ICO'} width={500} height={500} quality={100} alt='NexVault' className='w-5 h-5 rounded-full' /></a>
            <a href='https://twitter.com/@spadeshub' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a href='https://twitter.com/@spadeshub' className='text-white hover:text-light-blue' target='_blank' rel='noopener noreferrer'><FaYoutube /></a>
        </div>
    </div>
    </nav>
  )
}
