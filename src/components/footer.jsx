import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm py-6 px-4 mt-10 text-center relative bottom-0">
      <p>
        © {new Date().getFullYear()} Open Lottie Previewer. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <Link aria-label="Privacy Policy" href="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link aria-label="Contact" href="/contact" className="hover:underline">Contact</Link>
      </div>
    </footer>
  );
}