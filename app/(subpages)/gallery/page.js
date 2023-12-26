'use client'
import ModalImage from 'react-modal-image';
import { SubHeader } from '@/app/components/ReuseableComponents';
import React from 'react';

// Dummy data for media items
const mediaData = [
  { id: 1, type: 'image', url: '/imgs/1.jpg', description: 'Description of Image 1', category: 'Kids' },
  { id: 2, type: 'image', url: '/imgs/2.jpg', description: 'Description of Image 2', category: 'Kids' },
  { id: 3, type: 'image', url: '/imgs/3.jpg', description: 'Description of Image 3', category: 'Kids' },
  { id: 4, type: 'image', url: '/imgs/4.jpg', description: 'Description of Image 4', category: 'Donation' },
  { id: 5, type: 'image', url: '/imgs/5.jpg', description: 'Description of Image 5', category: 'Donation' },
  { id: 6, type: 'image', url: '/imgs/6.jpg', description: 'Description of Image 6', category: 'Donation' },
  { id: 7, type: 'image', url: '/imgs/7.jpg', description: 'Description of Image 7', category: 'Donation' },
  { id: 8, type: 'image', url: '/imgs/8.jpg', description: 'Description of Image 8', category: 'Donation' },
  { id: 9, type: 'image', url: '/imgs/9.jpg', description: 'Description of Image 9', category: 'Donation' },
  // Add more media items (images or videos) as needed
];

// Media Gallery Page component
export default function Page() {
    const [lightboxIndex, setLightboxIndex] = React.useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [sortOption, setSortOption] = React.useState('Default');
  
    const openLightbox = (index) => {
      setLightboxIndex(index);
      setIsLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setIsLightboxOpen(false);
    };
  
    const filteredMediaData = selectedCategory === 'All'
      ? mediaData
      : mediaData.filter(item => item.category === selectedCategory);
  
    const sortedMediaData = sortOption === 'Default'
      ? filteredMediaData
      : [...filteredMediaData].sort((a, b) => {
          if (sortOption === 'Category') {
            //Make sure 'a' and 'b' have the 'category' property
            if (a.category && b.category) {
                return a.category.localeCompare(b.category);
            }
          }
          // Add more sorting options as needed
          return 0;
        });
  
    return (
      <main>
        <SubHeader backgroundImage={'/imgs/8.jpg'} pageTitle={'Media Gallery'} />
        <section className="container mx-auto my-16 px-2">
          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
            <label className="sm:mr-4 text-lg">Filter by Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 sm:mr-4 mb-2"
            >
              <option value="All">All</option>
              {/* Add unique categories from your data */}
              {Array.from(new Set(mediaData.map(item => item.category))).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
    
            <label className="sm:mr-4 text-lg">Sort by:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="Default">Default</option>
              <option value="Category">Category</option>
              {/* Add more sorting options as needed */}
            </select>
          </div>
    
          {/* Media Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedMediaData.map((mediaItem, index) => (
              <div key={mediaItem.id} className="mb-8">
                {/* Media Item (Image or Video) */}
                {mediaItem.type === 'image' ? (
                  <ModalImage
                      small={mediaItem.url}
                      large={mediaItem.url}
                    alt={`Media ${mediaItem.id}`}
                    className="w-full h-40 object-cover mb-4 rounded-md cursor-pointer"
                    onClick={() => openLightbox(mediaItem.url)}
                  />
                ) : (
                  // Similar setup for videos if needed
                  <video controls className="w-full h-40 mb-4 rounded-md">
                    <source src={mediaItem.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
    
                {/* Media Item Description */}
                <p className="text-sm text-gray-600">{mediaItem.description}</p>
              </div>
            ))}
          </div>
    
          {/* Lightbox */}
          {isLightboxOpen && (
            <Lightbox
              mainSrc={sortedMediaData[lightboxIndex].url}
              nextSrc={sortedMediaData[(lightboxIndex + 1) % sortedMediaData.length].url}
              prevSrc={sortedMediaData[(lightboxIndex + sortedMediaData.length - 1) % sortedMediaData.length].url}
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() => setLightboxIndex((lightboxIndex + sortedMediaData.length - 1) % sortedMediaData.length)}
              onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % sortedMediaData.length)}
            />
          )}
        </section>
      </main>
    )
};