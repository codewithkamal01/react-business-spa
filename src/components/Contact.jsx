import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 md:p-12 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>

      <p className="text-gray-400 mb-8 max-w-md">
        Have questions or need assistance? Reach out to us and our team will get
        back to you as soon as possible.
      </p>

      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-orange-400 text-xl mt-1" />
          <p>Kolkata, West Bengal, India</p>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-green-400 text-xl" />
          <a
            href="tel:+919876543210"
            className="hover:underline hover:text-green-300 transition" >
            +91 9877262321
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-400 text-xl" />
          <a
            href="mailto:info@xyzcompany.com"
            className="hover:underline hover:text-blue-300 transition"
          >
            info@xyzcompany.com
          </a>
        </div>

        {/* Contact Person */}
        <div className="flex items-center gap-4">
          <FaUser className="text-yellow-400 text-xl" />
          <p>Kamal Manna</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
