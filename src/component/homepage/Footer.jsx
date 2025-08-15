import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4  items-start">
        {/* Logo + Mission */}
        <div className="flex items-start gap-4 flex-2">
          <Image
            src="https://modern-islamic-matrimony-frontend.vercel.app/images/wife4life.png" // Replace with actual image path
            alt="Do it the Halal way"
            width={200}
            height={300}
            className="object-contain"
          />
          <div>
            <h3 className="flex items-center gap-2 font-bold text-lg text-red-500">
              ❤️ WIFE4LIFE
            </h3>
            <p className="text-md mt-2 text-gray-300">
              Connecting Muslim hearts worldwide with dignity and respect.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mx-auto">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-md text-gray-300">
            <li><Link href="#">How It Works</Link></li>
            <li><Link href="#">Success Stories</Link></li>
            <li><Link href="#">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-md text-gray-300">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-md text-gray-300 mb-2">
            wife4life@mail.co.uk
          </p>
          <address className="not-italic text-md text-gray-300">
            <strong className="block">Address:</strong>
            JPJ7+7QM, Al-Thamiri Street<br />
            Ad-Dirah, Riyadh<br />
            Kingdom of Saudi Arabia (KSA)
          </address>
        </div>
      </div>

      <div className="text-center text-md text-gray-400 mt-12 border-t border-gray-700 pt-6">
        © 2024 WIFE4LIFE. All rights reserved.
      </div>
    </footer>
  );
}
