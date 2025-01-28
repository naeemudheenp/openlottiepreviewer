'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

export default function LottiePreviewer() {
  const [lottieFile, setLottieFile] = useState(null);
  const [lottieData, setLottieData] = useState(null);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && (file.type === "application/json" || file.name.endsWith(".lottie"))) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          if (json.assets && json.layers) {
            setLottieData(json);
            setError(null);
          } else {
            throw new Error("Invalid Lottie structure.");
          }
        } catch (err) {
          setError("Invalid Lottie JSON or .lottie file. Please ensure the file is valid.");
          setLottieData(null);
        }
      };
      reader.readAsText(file);
      setLottieFile(file);
    } else {
      setError("Please upload a valid .json or .lottie file.");
      setLottieData(null);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-xl w-full shadow-md rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-white"
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">openLottie Previewer</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
        <input
          type="file"
          accept=".json,.lottie"
          onChange={handleFileUpload}
          className={`w-full border rounded-md p-2 mb-4 ${darkMode ? "border-gray-700 bg-gray-700 text-white" : "border-gray-300"
            }`}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {lottieData ? (
          <div className="mt-4">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: lottieData,
              }}
              height={400}
              width={400}
            />
            <p className="text-gray-500 text-sm mt-2 text-center">
              {lottieFile?.name}
            </p>
          </div>
        ) : (
          <p className="text-gray-500 text-sm text-center">
            Upload a Lottie .json or .lottie file to preview it.
          </p>
        )}
        <button
          onClick={() => {
            setLottieData(null);
            setLottieFile(null);
            setError(null);
          }}
          className="w-full bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600"
        >
          Reset
        </button>
      </motion.div>
    </div>
  );
}

