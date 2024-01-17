'use client'
import { FAQ, SectionHeader, SubHeader } from "@/app/components/ReuseableComponents";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Page() {

    const faqData = [
        { question: 'What is the mission of your organization?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'How can I get involved or contribute?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'Who are the key members ofyour team?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'What projects has your organization been involved in?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'How can i contact your organization?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'Do you have volunteer opportunities available?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: "How can i stay updated on your organization's activities?", answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'What impact has your organization made so far?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
    ]

    const servicesFeaturesData = [
        { title: 'Service 1', description: 'Description of service 1' },
        { title: 'Service 2', description: 'Description of service 2' },
        { title: 'Service 3', description: 'Description of service 3' },
    ]

    return (
        <main>
            <SubHeader backgroundImage={'imgs/6.jpg'} pageTitle={'About Us'} />
            <div id="about" className="container mx-auto py-16 px-2">
                <div className="text-center mb-8">
                    <SectionHeader headerLink={'/about#about'} headerText={'About Our Organization'} style={'justify-center'} />
                    <p className="text-gray-600">Discover our mission, vision, and the people behind our initiatives.</p>
                </div>

                {/* mission and vission section */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold mb-4"><Link href={'#our-mission'} className="flex items-center hover:text-ocean-blue">Our Mission</Link></h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsa similique maxime cupiditate ab nostrum sed illum possimus eum adipisci beatae alias aliquam nihil reprehenderit pariatur, nobis, dolorem non officia. Pariatur laboriosam eum dignissimos repudiandae cumque.</p>
                </section>
                <section className="mb-12">
                    <h3 className="text-2xl font-bold mb-4"><Link href={'#our-vision'} className="flex items-center hover:text-ocean-blue">Our Vision</Link></h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsa similique maxime cupiditate ab nostrum sed illum possimus eum adipisci beatae alias aliquam nihil reprehenderit pariatur, nobis, dolorem non officia. Pariatur laboriosam eum dignissimos repudiandae cumque.</p>
                </section>

                {/* Team section */}
                <section id="our-team">
                    <h3 className="text-2xl font-bold mb-4"><Link href={'#our-team'} className="flex items-center hover:text-ocean-blue">Our Team</Link></h3>
                    {/* Include team member profiles with images and descriptions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white p-4 rounded-md shadow-md shadow-shadow-color">
                            <Image src={'/imgs/5.jpg'} alt="Team member 1" width={500} height={500} quality={80} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h4 className="text-lg font-bold mb-2">John Doe</h4>
                            <p className="text-gray-600">Co-Founder</p>
                        </div>
                        
                        {/* Team Member 1 */}
                        <div className="bg-white p-4 rounded-md shadow-md shadow-shadow-color">
                            <Image src={'/imgs/7.jpg'} alt="Team member 2" width={500} height={500} quality={80} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h4 className="text-lg font-bold mb-2">Jane Smith</h4>
                            <p className="text-gray-600">Treasurer</p>
                        </div>
                        
                        {/* Team Member 1 */}
                        <div className="bg-white p-4 rounded-md shadow-md shadow-shadow-color">
                            <Image src={'/imgs/9.jpg'} alt="Team member 3" width={500} height={500} quality={80} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h4 className="text-lg font-bold mb-2">Aman Dirk</h4>
                            <p className="text-gray-600">Patron</p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="my-16">
                    <SectionHeader headerLink={'#services'} headerText={'Our Services/Features'} style={'justify-center'} />

                    {/*  Services/Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesFeaturesData.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-md shadow-md shadow-shadow-color">
                                <h4 className="text-lg font-bold mb-2">{item.title}</h4>

                                {/* Service/Feature Description */}
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mt-16">
                    <h3 className="text-2xl font-bold mb-4"><Link href={'#faq'} className="flex items-center capitalize hover:text-ocean-blue">Frequently asked questions</Link></h3>

                    {/* FAQ Questions & Answers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* FAQ Question 1 */}
                        {faqData.map((faqItem, index) => 
                            <FAQ key={index} question={faqItem.question} answer={faqItem.answer} />
                        )}
                    </div>

                </section>
            </div>


        </main>
    )
}