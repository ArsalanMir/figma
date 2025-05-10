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
      <div className="absolute top-0 right-0 mt-2 mr-2 text-6xl z-10 pointer-events-none">
        🫧
      </div>

      <div className="absolute bottom-0 left-0 mb-2 ml-2 text-4xl z-10 pointer-events-none">
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
            <div className="flex mt-2 space-x-2 text-white text-[1.2rem]">
              <a href="#"><FaXTwitter size={15} /></a>
              <a href="#"><FaLinkedin size={15} /></a>
              <a href="#"><FaYoutube size={15} /></a>
              <a href="#"><FaTelegram size={15} /></a>
              <a href="#"><FaWhatsapp size={15} /></a>
              <a href="#"><FaFacebook size={15} /></a>
              <a href="#"><FaInstagram size={15} /></a>
              <a href="#"><FaPinterest size={15} /></a>
            </div>
          </div>

          <div className="flex-1 min-w-[300px] ml-[50px] mt-5 md:mt-0">
            <h3 className="mb-3 text-[1.2rem]">
              Empowering Learning with AI –<br /> For Students, Teachers & Institutions
            </h3>
            <p className="text-sm font-extralight mb-2">
              YoLearn.ai is an AI-powered learning platform designed to enhance
              education for students, teachers, and institutions across the globe.
              From personalized AI tutors to school-wide curriculum tools – YoLearn
              makes education smarter and more accessible.
            </p>
            <p className="text-sm font-extralight">
              ✅ ISO Certified &nbsp;&nbsp; 📘 NEP-Aligned &nbsp;&nbsp; 🛡️ Data Privacy Compliant
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-8">
          <div>
            <h3 className="text-base mb-2">Sitemap</h3>
            <p className="text-sm font-light">Tools</p>
            <p className="text-sm font-light">Studios</p>
            <p className="text-sm font-light">Assistants</p>
          </div>
          <div>
            <h3 className="text-base mb-2">Company</h3>
            <p className="text-sm font-light">About</p>
            <p className="text-sm font-light">Career</p>
            <p className="text-sm font-light">Contact</p>
          </div>
          <div>
            <h3 className="text-base mb-2">Legal</h3>
            <p className="text-sm font-light">Terms & conditions</p>
            <p className="text-sm font-light">Privacy Policy</p>
            <p className="text-sm font-light">Data Policy</p>
          </div>
          <div>
            <h3 className="text-base mb-2">Socials</h3>
            <p className="text-sm font-light">X (Twitter)</p>
            <p className="text-sm font-light">LinkedIn</p>
            <p className="text-sm font-light">YouTube</p>
            <p className="text-sm font-light">WhatsApp Channel</p>
          </div>
          <div className="mt-4">
            <p className="text-sm font-light">For Students</p>
            <p className="text-sm font-light">For Teachers</p>
            <p className="text-sm font-light">For Schools</p>
            <p className="text-sm font-light">For Organizations</p>
            <p className="text-sm font-light">Resources</p>
            <p className="text-sm font-light">Pricing</p>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-sm font-light">
            All educational content, AI tutors, and institutional tools are intended
            for learners of appropriate age groups and verified educator use.
            YoLearn.ai follows national and international education safety standard.
          </p>
          <div className="flex flex-col lg:flex-row justify-between mt-4">
            <p className="font-medium text-sm">© 2025 AI.YoLearn Private Limited. All rights reserved.</p>
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
