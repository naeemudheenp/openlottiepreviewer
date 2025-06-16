import Link from "next/link";
export default function PrivacyPolicy() {
  return (
    <main className="px-4 py-10 md:px-8 lg:px-16 max-w-3xl mx-auto text-gray-700">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">Privacy Policy</h1>

      <p className="text-base md:text-lg mb-4">
        At <strong>Open Lottie Previewer</strong>, we respect your privacy. We do not store, track, or collect any personal data or uploaded files.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What we collect:</h2>
      <ul className="list-disc list-inside mb-4 text-base md:text-lg space-y-1">
        <li>No cookies or tracking is used.</li>
        <li>No uploaded files are stored on our servers—they remain in your browser.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Third-Party Services:</h2>
      <p className="text-base md:text-lg mb-4">
        We may use Google AdSense to serve ads. These ads may use cookies for personalized targeting. You can learn more about how Google uses this data{' '}
        <Link
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          here
        </Link>.
      </p>


    </main>
  );
}
