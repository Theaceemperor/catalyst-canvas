// Import React
import { SubHeader } from '@/app/components/ReuseableComponents';
import React from 'react';

// Privacy & Terms Page component
export default function Page() {
  return (
    <main>
        <SubHeader backgroundImage={'/imgs/8.jpg'} pageTitle={'Privacy & Terms'} />
        <section className="container mx-auto my-16 px-2">
            <h2 className="text-3xl font-bold mb-8">Privacy & Terms</h2>

            {/* Privacy Policy Section */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Privacy Policy</h3>
                <p>Your privacy is important to us. This section outlines how we collect, use, and protect your personal information.</p>
                {/* Include your privacy policy content here */}
            </div>

            {/* Terms of Service Section */}
            <div>
                <h3 className="text-xl font-bold mb-4">Terms of Service</h3>
                <p>By using our website, you agree to abide by our terms and conditions. Please read this section carefully before using our services.</p>
                {/* Include your terms of service content here */}
            </div>
        </section>
    </main>
  );
};