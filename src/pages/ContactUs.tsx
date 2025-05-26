import { Card } from 'antd';

const ContactUs = () => {
  return (
    <div className="w-[90%] md:w-[85%] mx-auto ">
      <div>
        <Card>
          <div className="flex justify-center items-center gap-2 md:gap-10 text-nowrap">
            <img src="/gif/call.gif" alt="" className="w-14 h-20" />
            <div>
              <h3>Colauncha@gmail.com</h3>
              <p>+234 98356672867</p>
            </div>
          </div>
        </Card>
        <h1 className="text-4xl font-bold text-center mt-10">Contact Us</h1>
        <p className="text-center mt-4">We would love to hear from you!</p>
        <form className="max-w-lg mx-auto mt-8">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
