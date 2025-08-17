import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Mission */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Image
            src="https://modern-islamic-matrimony-frontend.vercel.app/images/wife4life.png"
            alt="Do it the Halal way"
            width={150}
            height={200}
            className="object-contain"
          />
          <div>
            <h3 className="flex items-center gap-2 font-bold text-lg text-red-500">
              ❤️ Marrying Muslims
            </h3>
            <p className="text-sm mt-2 text-gray-300 leading-relaxed max-w-sm">
              Connecting Muslim hearts worldwide with dignity and respect.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">How It Works</Link></li>
            <li><Link href="#">Success Stories</Link></li>
            <li><Link href="#">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <p className="text-sm text-gray-300 mb-2">
            Marrying Muslims@mail.co.uk
          </p>
          <address className="not-italic text-sm text-gray-300 leading-relaxed">
            <strong className="block">Address:</strong>
            JPJ7+7QM, Al-Thamiri Street<br />
            Ad-Dirah, Riyadh<br />
            Kingdom of Saudi Arabia (KSA)
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Marrying Muslims. All rights reserved.
      </div>
    </footer>
  );
}
