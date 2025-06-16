

import React from "react";
import LottiePicker from "@/components/lottie-picker";
export default function LottiePreviewer() {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-6`}
    >
      <div className={`flex flex-col items-center justify-center min-h-screen p-6 flex-col md:flex-row`}>
        <section className="intro px-4 py-10 md:px-8 lg:px-16 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:text-left text-center">
            Open Lottie Previewer
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-3 md:text-left text-center">
            Open Lottie Previewer is a free online tool to instantly preview and test your Lottie animation JSON files. Whether you're a designer, developer, or animator, this tool helps you inspect and validate animations quickly across different browsers.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:text-left text-center">How we're different</h2>
            <ul className="list-disc list-inside text-gray-600 text-base md:text-lg space-y-2 md:text-left text-center">
              <li>You can choose your preferred JS player (lottie-react, react-lottie-player, etc.) and test animations accordingly.</li>
              <li>Easily switch between light and dark mode to preview how your animation looks in different themes.</li>
            </ul>
          </div>
        </section>
        <LottiePicker />
      </div>

    </div>
  );
}
