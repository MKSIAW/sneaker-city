import Link from 'next/link';

const HelpPage = () => {
  return (
    <div className="p-8  text-white">
      <div className="max-w-4xl mx-auto text-gray-800 p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">GET HELP</h1>
        
        <div className="mb-16">
          <input 
            type="text" 
            placeholder="What can we help you with?" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">Quick Assists</h2>
        <p className="mb-8">Answers to our most frequently asked questions are just one click away.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            {
              title: "Returns",
              questions: [
                "What is NSneaker City's return policy?",
                "How do I return my Sneaker City order?",
                "Where is my refund?",
              ],
            },
            {
              title: "Shipping & Delivery",
              questions: [
                "What are Sneaker City's shipping options?",
                "Can I buy online and pick up in a store?",
                "How do I get free shipping on Sneaker City orders?",
              ],
            },
            {
              title: "Orders & Payment",
              questions: [
                "Where is my Sneaer City order?",
                "Can I cancel or change my Sneaker City order?",
                "What are Sneaker City's payment options?",
              ],
            },
            {
              title: "Shopping",
              questions: [
                "How do I find the right size and fit?",
                "How can I get Sneaker City's best deals?",
                "Does Sneaker City offer product advice?",
              ],
            },
            {
              title: "Nike Membership & Apps",
              questions: [
                "What is Sneaker City Membership?",
                "What is Sneaker City Pass?",
                "How can I join Sneaker City drawings?",
              ],
            },
            {
              title: "Company Info",
              questions: [
                "Does the shoes have a warranty?",
                "Can I recycle my shoes?",
                "Do you offer grants or donations?",
              ],
            },
          ].map((assist) => (
            <div key={assist.title} className="flex flex-col bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">{assist.title}</h3>
              <ul className="list-disc list-inside mb-2">
                {assist.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
              <Link href={`/${assist.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 underline">View all</Link>
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="mt-8 bg-gray-200 p-4 rounded-lg text-gray-800">
          <h2 className="font-semibold">Contact Us</h2>
          <p>Chat with us</p>
          <p>Products & Orders: 4 am - 11 pm PT, 7 days a week</p>
          <p>Call us: +233 20 909 8878</p>
          <p>Products & Orders: 4 am - 11 pm PT, 7 days a week</p>
          <p>Accra, Teshie: 8 am - 5 pm PT, Mon - Fri</p>
          <p>Company Info & Inquiries: 7 am - 4 pm PT, Mon - Fri</p>
          <Link href="/find-store" className="text-blue-600 underline">Find a Store</Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
