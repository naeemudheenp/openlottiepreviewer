import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center z-20 relative">
      <Link href="/">
        <span className="text-xl font-bold text-gray-800">Open Lottie Previewer</span>
      </Link>
      <nav className="space-x-4 text-gray-600 text-sm">
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        <Link href="/privacy" className="hover:text-blue-600">Privacy</Link>
      </nav>
    </header>
  );
}
