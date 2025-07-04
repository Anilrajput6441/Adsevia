// components/Footer.tsx

import { Mail, Instagram, Linkedin, Twitter } from "lucide-react"; // ✅ Lucide icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1f1f1f] via-[#1c1c2b] to-[#000] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 grid-cols-2 gap-8 text-sm">
        {/* Branding */}
        <div className="md:col-span-1 col-span-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Adsevia
          </h2>
          <p className="mt-4 text-gray-400">
            The all-in-one AI ad platform for creating, analyzing, and scaling
            your marketing with speed.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="mailto:contact@adsevia.com" aria-label="Email">
              <Mail className="hover:text-orange-400 h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="hover:text-blue-400 h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="hover:text-blue-600 h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="hover:text-pink-500 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Generate */}
        <div>
          <h3 className="font-semibold text-white mb-3"> Generate</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Generate Creatives</li>
            <li>AI Photoshoots</li>
            <li>Text & Headlines</li>
            <li>Stock Images</li>
          </ul>
        </div>

        {/* Analyse */}
        <div>
          <h3 className="font-semibold text-white mb-3">Analyse</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Creative Insight</li>
            <li>Competitor Insight</li>
          </ul>
        </div>

        {/* Automate */}
        <div>
          <h3 className="font-semibold text-white mb-3">Automate</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Custom Templates</li>
            <li>Creative Scoring AI</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white mb-3"> Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Blog</li>
            <li>Affiliate</li>
            <li>Agency Program</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-8" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0 px-4">
        <p>© {new Date().getFullYear()} Adsevia. All rights reserved.</p>
        <div className="space-x-6">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Enterprise Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
