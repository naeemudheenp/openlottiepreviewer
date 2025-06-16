import Link from "next/link";
export default function Contact() {
  return (
    <main className="px-4 py-10 md:px-8 lg:px-16 max-w-2xl mx-auto text-gray-700">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">Contact Us</h1>

      <p className="text-base md:text-lg mb-4 text-center">
        If you have questions, feedback create issue on github
      </p>

      <div className="text-center mb-6">
        <p className="text-base md:text-lg">
          <Link
            aria-label="Github"
            href="https://github.com/naeemudheenp/openlottiepreviewer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/naeemudheenp/openlottiepreviewer
          </Link>
        </p>
      </div>

      <p className="text-base md:text-lg text-center">
        We're open to collaborations, suggestions, and improvements to make this tool even better.
      </p>
    </main>
  );
}
