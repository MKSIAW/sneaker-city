import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullseye, faChartLine } from '@fortawesome/free-solid-svg-icons';

const AboutUsPage = () => {
  return (
    <div className=" p-8">
      <div className=" p-8 mb-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-6 text-center">
          Welcome to Sneaker City! We are dedicated to providing the best selection of sneakers from top brands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FontAwesomeIcon icon={faUsers} className="text-blue-500 mb-4" style={{ fontSize: '72px' }} />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-700">
              Meet the passionate individuals behind Sneaker City. We strive to bring you the best service and experience.
            </p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faBullseye} className="text-green-500 mb-4" style={{ fontSize: '72px' }} />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to provide sneaker enthusiasts with the best selection of high-quality sneakers.
            </p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faChartLine} className="text-red-500 mb-4" style={{ fontSize: '72px' }} />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              We aim to be the leading sneaker retailer by offering top brands and unparalleled customer service.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image src="/images/our_story.jpg" alt="Our Story" width={500} height={300} className="rounded-lg object-cover" />
          <p className="text-lg text-gray-700">
            Sneaker City started with a passion for sneakers and a vision to create a one-stop shop for sneaker lovers.
            Our journey began with a small store and has grown into a thriving online community. We are committed to
            bringing you the latest trends and timeless classics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
