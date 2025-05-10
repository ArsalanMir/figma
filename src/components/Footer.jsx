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
    textShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
    filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))'
  }}
>
  🫧
</div>

{/* Bottom Left Bubble */}
<div 
  className="absolute bottom-0 left-0 mb-2 ml-2 text-4xl z-10 pointer-events-none"
  style={{
    opacity: 0.7,
    textShadow: '0 0 6px rgba(255, 255, 255, 0.2)',
    filter: 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.15))'
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
             {/* main section */}
          <div className="flex-1 min-w-[300px] mt-5 md:mt-0 lg:ml-auto lg:max-w-xl">
            <h3 className="mb-3 text-[1.2rem]">
              Empowering Learning with AI –<br /> For Students, Teachers & Institutions
            </h3>
            <p className="text-sm font-extralight mb-2">
              YoLearn.ai is an AI-powered learning platform designed to enhance <br/>
              education for students, teachers, and institutions across the globe.<br/>
              From personalized AI tutors to school-wide curriculum tools – YoLearn<br/>
              makes education smarter and more accessible.
            </p>
            <p className="text-sm font-extralight">
              ✅ ISO Certified &nbsp;&nbsp; 📘 NEP-Aligned &nbsp;&nbsp; 🛡️ Data Privacy Compliant
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
          <div >
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
            All educational content, AI tutors, and institutional tools are intended
            for learners of appropriate age groups and verified educator use.
            YoLearn.ai follows national and international education safety standard.
          </p>
          <div className="flex flex-col lg:flex-row justify-between mt-4 gap-6">
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
