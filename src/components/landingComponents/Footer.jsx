import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f479c] to-[#061b3a] font-sans text-white px-5 py-10">
      {/* Top Right Bubble */}
      <div
        className="absolute top-0 right-0 mt-2 mr-2 text-7xl z-10 pointer-events-none"
        style={{
          opacity: 0.6,
          textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
          filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))",
        }}
      >
        🫧
      </div>

      {/* Bottom Left Bubble */}
      <div
        className="absolute bottom-0 left-0 mb-2 ml-2 text-4xl z-10 pointer-events-none"
        style={{
          opacity: 0.7,
          textShadow: "0 0 6px rgba(255, 255, 255, 0.2)",
          filter: "drop-shadow(0 0 1px rgba(255, 255, 255, 0.15))",
        }}
      >
        🫧
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          <div className="flex-shrink-0">
            <h2>
              <a
                href="#"
                className="text-2xl font-bold text-yolearn-dark flex items-center"
              >
                <span className="text-yolearn-blue">Y</span>
                <span className="text-emerald-500">o</span>
                Learn.ai
              </a>
            </h2>
            <p className="text-[12px] mt-2">
              AI powered learning. Beyond Limits.
            </p>
            <div className="mt-6">
              
              <div className="grid grid-cols-5 gap-4 max-w-md mx-auto">
                {/* Row 1 */}
                <a
                  href="#"
                  className="bg-[#0077b5] p-2.5 rounded-full flex items-center justify-center text-white text-lg"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="bg-[#FF0000] p-2.5 rounded-full flex items-center justify-center text-white text-lg"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-2.5 rounded-full flex items-center justify-center text-white text-lg"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-black p-2.5 rounded-full flex items-center justify-center text-white text-lg"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="bg-[#1877f2] p-2.5 rounded-full flex items-center justify-center text-white text-lg"
                >
                  <FaFacebook />
                </a>

                {/* Row 2 */}
                <a
                  href="#"
                  className="bg-[#FFCC00] p-2.5 rounded-full flex items-center justify-center text-white"
                >
                  {/* Substack icon replacement */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M3 3h18v4H3V3zm0 6h18v2H3V9zm0 4h18v8l-9-4-9 4v-8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-[#1DB954] p-2.5 rounded-full flex items-center justify-center text-white"
                >
                  {/* Spotify icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.548 17.625a.749.749 0 0 1-1.035.224c-2.828-1.742-6.39-2.135-10.603-1.164a.75.75 0 0 1-.349-1.457c4.669-1.117 8.657-.674 11.827 1.296a.75.75 0 0 1 .16 1.101zm1.526-3.217a.938.938 0 0 1-1.294.28c-3.238-1.998-8.162-2.58-11.964-1.41a.938.938 0 0 1-.54-1.797c4.418-1.33 9.905-.668 13.635 1.622a.938.938 0 0 1 .163 1.305zm.162-3.378c-3.875-2.302-10.253-2.507-13.983-1.37a1.125 1.125 0 0 1-.649-2.149c4.305-1.3 11.384-1.058 15.832 1.58a1.125 1.125 0 0 1-1.2 1.939z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-[#5865F2] p-2.5 rounded-full flex items-center justify-center text-white"
                >
                  {/* Discord icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.219 18.219 0 0 0-5.49 0 12.76 12.76 0 0 0-.617-1.25.076.076 0 0 0-.078-.037A19.736 19.736 0 0 0 3.683 4.37a.07.07 0 0 0-.032.027C1.548 7.62.386 10.78.544 13.889a.082.082 0 0 0 .028.054 19.978 19.978 0 0 0 5.993 3.01.077.077 0 0 0 .084-.027c.46-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104 13.053 13.053 0 0 1-1.872-.89.075.075 0 0 1-.008-.125c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.928 1.787 8.18 1.787 12.062 0a.075.075 0 0 1 .078.009c.12.098.246.196.373.29a.075.075 0 0 1-.006.125 12.386 12.386 0 0 1-1.873.89.075.075 0 0 0-.04.105c.36.698.773 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.934 19.934 0 0 0 6.002-3.01.076.076 0 0 0 .028-.054c.244-4.032-1.25-7.159-2.927-9.494a.061.061 0 0 0-.03-.028zM8.02 13.577c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.174 1.093 2.157 2.419 0 1.334-.955 2.418-2.157 2.418zm7.977 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.174 1.093 2.157 2.419 0 1.334-.947 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-[#229ED9] p-2.5 rounded-full flex items-center justify-center text-white text-lg"
                >
                  <FaTelegram />
                </a>
                <a
                  href="#"
                  className="bg-[#25D366] p-2.5 rounded-full flex items-center justify-center text-white text-lg"
                >
                  <FaWhatsapp />
                </a>
              </div>

              {/* Email section */}
              <div className="mt-5 text-white text-sm font-medium flex items-start justify-start gap-2">
                <span>✉️</span>
                <span>support@yolearn.ai</span>
              </div>
            </div>
          </div>
          {/* main section */}
          <div className="flex-1 min-w-[300px] mt-5 md:mt-0 lg:ml-auto lg:max-w-xl">
            <h3 className="mb-3 text-[1.2rem]">
              Empowering Learning with AI –<br /> For Students, Teachers &
              Institutions
            </h3>
            <p className="text-sm font-extralight mb-2">
              YoLearn.ai is an AI-powered learning platform designed to enhance{" "}
              <br />
              education for students, teachers, and institutions across the
              globe.
              <br />
              From personalized AI tutors to school-wide curriculum tools –
              YoLearn
              <br />
              makes education smarter and more accessible.
            </p>
            <p className="text-sm font-extralight">
              ✅ ISO Certified &nbsp;&nbsp; 📘 NEP-Aligned &nbsp;&nbsp; 🛡️ Data
              Privacy Compliant
            </p>
          </div>
        </div>

        {/* bottom section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-7 mb-8">
          <div>
            <h3 className="text-base mb-4">Sitemap</h3>
            <p className="text-sm font-light mb-2">Tools</p>
            <p className="text-sm font-light mb-2">Studios</p>
            <p className="text-sm font-light mb-2">Assistants</p>
          </div>
          <div>
            <h3 className="text-base mb-4">Company</h3>
            <p className="text-sm font-light mb-2">About</p>
            <p className="text-sm font-light mb-2">Career</p>
            <p className="text-sm font-light mb-2">Contact</p>
          </div>
          <div>
            <h3 className="text-base mb-4">Legal</h3>
            <p className="text-sm font-light mb-2">Terms & conditions</p>
            <p className="text-sm font-light mb-2">Privacy Policy</p>
            <p className="text-sm font-light mb-2">Data Policy</p>
          </div>
          <div>
            <h3 className="text-base mb-4">Socials</h3>
            <p className="text-sm font-light mb-2">X (Twitter)</p>
            <p className="text-sm font-light mb-2">LinkedIn</p>
            <p className="text-sm font-light mb-2">YouTube</p>
            <p className="text-sm font-light mb-2">WhatsApp Channel</p>
          </div>
          <div>
            <p className="text-sm font-light mb-4">For Students</p>
            <p className="text-sm font-light mb-2">For Teachers</p>
            <p className="text-sm font-light mb-2">For Schools</p>
            <p className="text-sm font-light mb-2">For Organizations</p>
            <p className="text-sm font-light mb-2">Resources</p>
            <p className="text-sm font-light mb-2">Pricing</p>
          </div>
        </div>

        {/* last section */}
        <div className="pt-5">
          <p className="text-sm font-light mb-6">
            All educational content, AI tutors, and institutional tools are
            intended for learners of appropriate age groups and verified
            educator use. YoLearn.ai follows national and international
            education safety standard.
          </p>
          <div className="flex flex-col lg:flex-row justify-between mt-4 gap-6">
            <p className="font-medium text-sm">
              © 2025 AI.YoLearn Private Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-5 text-sm font-medium mt-2 lg:mt-0">
              <p>Terms of Use</p>
              <p>Cookie Policy</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
