import Image from 'next/image';
import Link from 'next/link';

const JoinUsPage = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className=" p-8">
        <h1 className="text-4xl font-bold mb-6">Join Us</h1>
        <p className="text-lg mb-6">
          Become a member today and enjoy exclusive benefits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-6">
            <Image
              src="/images/exclusive.avif"
              alt="Benefit 1"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">Exclusive Products</h2>
            <p className="mt-2 text-gray-600">
              Get early access to our latest releases and limited-edition
              products.
            </p>
          </div>
          <div className="mb-6">
            <Image
              src="/images/discount.avif"
              alt="Benefit 2"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">Member Discounts</h2>
            <p className="mt-2 text-gray-600">
              Enjoy special pricing and discounts on select items.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-6">
            <Image
              src="/images/customize.avif"
              alt="Benefit 3"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">Personalized Offers</h2>
            <p className="mt-2 text-gray-600">
              Receive personalized offers and recommendations based on your
              preferences.
            </p>
          </div>
          <div className="mb-6">
            <Image
              src="/images/vip.avif"
              alt="Benefit 4"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">VIP Events</h2>
            <p className="mt-2 text-gray-600">
              Gain access to exclusive member-only events and experiences.
            </p>
          </div>
        </div>

        <Link href="/SignIn">
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinUsPage;
