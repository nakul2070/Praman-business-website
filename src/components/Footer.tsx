import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1E2833] text-white py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-[#85C12F] font-bold text-lg mb-2">About Us</h3>
          <div className="w-10 h-1 bg-[#85C12F] mb-4" />
          <p className="text-gray-300 text-sm">
            We are a professional surveying company with a primary focus on 3D laser scanning. Based in India, we operate worldwide with vast experience over a diverse range of services.
          </p>
        </div>

        {/* Our Services */}
        <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#85C12F] font-bold text-lg mb-2">Our Services</h3>
            <div className="w-10 h-1 bg-[#85C12F] mb-4" />
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• 3D Laser Scanning</li>
              
              <li>• 3D BIM Modelling</li>
              <li>• 3D Virtual Reality</li>
              <li>• Plant Modeling</li>
              
              <li>• 3D Mesh Model</li>
            </ul>
          </div>
          <div className="sm:mt-9 md:mt-15">
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Lidar Data Processing</li>
              
              
              <li>• Mobile Mapping</li>
              
              
              <li>• NDT</li>
              <li>• Project Based Training</li>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-[#85C12F] font-bold text-lg mb-2">Contact Us</h3>
          <div className="w-10 h-1 bg-[#85C12F] mb-4" />
          <div className="space-y-4 text-gray-300 text-sm">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#1F75FE] mt-1" />
              <span>
                A-03, Anant Tower,<br />
                Near JK Hospital, Kolar Road,<br />
                Bhopal (M.P)
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#1F75FE] mt-1" />
              <span>
                201, Vikas Vehicle Yard,<br />
                Jabalpur Road, Baheria,<br />
                Sagar (M.P)
              </span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#1F75FE]" />
              pramanengineering12@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-[#1F75FE]" />
              +91 8889013444
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-6 px-4 sm:px-6 text-center text-gray-400 text-xs">
        <p>
          © 2021 3D Pointshot India Private Limited All Rights Reserved. Optimize By <span className="text-white font-semibold">Best SEO Company In India - ARE InfoTech</span>
        </p>
        <div className="flex justify-center mt-4 space-x-4 text-white text-base">
          <FaFacebookF className="cursor-pointer hover:text-[#85C12F]" />
          <FaInstagram className="cursor-pointer hover:text-[#85C12F]" />
          <FaLinkedinIn className="cursor-pointer hover:text-[#85C12F]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
