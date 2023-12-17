'use client'
import { SectionHeader, SubHeader } from "@/app/components/ReuseableComponents";


// Donate or Support Page component
export default function Page() {
    // Dummy data for donation options
    const donationOptions = [
      { id: 1, amount: 10, description: 'Donate $10' },
      { id: 2, amount: 25, description: 'Donate $25' },
      { id: 3, amount: 50, description: 'Donate $50' },
      // Add more donation options as needed
    ];
  
    // Function to handle donation
    const handleDonate = (amount) => {
      // Customize this function based on your donation processing logic
      window.alert(`Processing donation of $${amount}, don't wait...`);
    };
  
    return (
        <main>
            <SubHeader backgroundImage={'/imgs/9.jpg'} pageTitle={'Support Us'} />
            <section className="container mx-auto my-16 px-2">
                <SectionHeader headerLink={'#'} headerText={'Donate/Support'} />
        
                {/* Donation Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {donationOptions.map((option) => (
                    <div
                    key={option.id}
                    className="p-4 border border-gray-300 rounded-md cursor-pointer"
                    onClick={() => handleDonate(option.amount)}
                    >
                        <h3 className="text-xl font-bold mb-2">{option.description}</h3>
                        <p className="text-gray-600">Support our cause with a donation of ${option.amount}.</p>
                    </div>
                ))}
                </div>
        
                {/* Donation Form (Placeholder) */}
                <form className="mt-8">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="donationAmount">
                        Other Amount
                    </label>
                    <input
                        type="number"
                        id="donationAmount"
                        name="donationAmount"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-light-blue"
                        placeholder="Enter custom amount"
                    />
            
                    <button
                        type="button"
                        className="mt-4 bg-ocean-blue text-white py-2 px-4 rounded-md hover:bg-dark-ocean-blue cursor-pointer"
                        onClick={() => handleDonate(document.getElementById('donationAmount').value)}
                    >
                        Donate
                    </button>
                </form>
            </section>
        </main>
    );
  };