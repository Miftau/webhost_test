'use client';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-10 pb-6 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo & Social */}
        <div className="md:col-span-1">
          <Image src="/images/logo.png" alt="Logo" width={180} height={60} />
          <p className="mt-4 text-sm">
            Stay up to date with our latest news and special offers by following us on our
            various social media channels.
          </p>

          <div className="flex gap-3 mt-4">
            <Image src="/images/facebook.png" alt="Facebook" width={32} height={32} />
            <Image src="/images/twitter.png" alt="Twitter" width={32} height={32} />
            <Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} />
            <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/media">Media & News Center</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/hosting">Hosting</Link></li>
            <li><Link href="/domain">Domain</Link></li>
            <li><Link href="/vps">VPS</Link></li>
            <li><Link href="/support">Server Technical Support</Link></li>
            <li><Link href="/whois">Whois</Link></li>
          </ul>
        </div>

        {/* Technology */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Technology</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/speed">Speed</Link></li>
            <li><Link href="/security">Security</Link></li>
            <li><Link href="/control-panel">Control Panel</Link></li>
            <li><Link href="/backups">Backups</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Contact Us</h3>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 text-white rounded-lg px-4 py-2 flex items-center gap-2">
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} />
              <span>+966551234567</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Image src="/images/visa.png" alt="Visa" width={60} height={40} />
            <Image src="/images/mastercard.png" alt="Mastercard" width={60} height={40} />
            <Image src="/images/mada.png" alt="Mada" width={60} height={40} />
            <Image src="/images/vodafone.png" alt="Vodafone" width={60} height={40} />
            <Image src="/images/cib.png" alt="CIB" width={60} height={40} />
            <Image src="/images/paypal.png" alt="PayPal" width={60} height={40} />
            <Image src="/images/cpanel.png" alt="cPanel" width={120} height={50} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-4">
        <div className="flex items-center gap-2">
          <Image src="/images/global.png" alt="Global" width={20} height={20} />
          <span>Global</span>
        </div>
        <p className="mt-2 md:mt-0">@All rights reserved to Nemours Al-Jaria Company</p>
        <Link href="/privacy" className="mt-2 md:mt-0 underline">
          Privacy Policy and User Agreement
        </Link>
      </div>
    </footer>
  );
}
