import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-center mb-8">
        We’d love to hear from you! Please reach out with any questions or comments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
            <span className="text-gray-700">+233 20 909 8878</span>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
            <span className="text-gray-700">support@sneakercity.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
            <span className="text-gray-700">Accra, Teshie No. 6 St</span>
          </div>
        </div>
      </div>

      {/* <h2 className="text-3xl font-bold mb-4 text-center">Follow Us</h2> */}
      {/* <div className="flex justify-center space-x-4">
        Replace with your social media icons
        <FontAwesomeIcon icon={['fab', 'facebook-f']} className="text-blue-600" />
        <FontAwesomeIcon icon={['fab', 'twitter']} className="text-blue-400" />
        <FontAwesomeIcon icon={['fab', 'instagram']} className="text-pink-600" />
      </div> */}
    </div>
  );
};

export default ContactUsPage;
