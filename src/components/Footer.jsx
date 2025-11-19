import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-neutral border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Warm - Paws logo" className="w-12" />
            <h2 className="text-2xl font-heading font-bold text-secondary">
              Warm - Paws
            </h2>
          </Link>
          <p className="text-sm text-neutral/70 font-body">
            A cozy winter companion platform designed to keep your pets warm,
            safe, and happy.
          </p>

          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-heading font-semibold text-secondary mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2 font-body text-sm text-neutral/80">
            <li>📍 123 Cozy Street, Winter Town, Petland</li>
            <li>📞 +1 (800) 555-0199</li>
            <li>✉️ support@petcomfort.com</li>
            <li>🕓 Mon – Sun: 8AM – 8PM</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-heading font-semibold text-secondary mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 font-body text-sm text-neutral/80">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-base-300 text-center py-4 text-sm text-neutral/60 font-body bg-base-200">
        © {new Date().getFullYear()} Pet Comfort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
