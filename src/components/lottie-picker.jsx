'use client';
import { useState } from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const LottieReactPlayer = dynamic(() => import("lottie-react"), { ssr: false });
const ReactLottiePlayer = dynamic(() => import("react-lottie-player"), { ssr: false });
import dynamic from "next/dynamic";
import Link from "next/link";
export default function LottiePicker() {
  const [lottieFile, setLottieFile] = useState(null);
  const [lottieData, setLottieData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState("default");
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

  const renderLottiePlayer = () => {
    switch (selectedPlayer) {
      case "lottie-react":
        return (
          <LottieReactPlayer
            animationData={lottieData}
            loop
            autoplay
            style={{ width: 400, height: 400 }}
          />
        );
      case "react-lottie-player":
        return (
          <ReactLottiePlayer
            animationData={lottieData}
            loop
            play
            style={{ width: 400, height: 400 }}
          />
        );
      default:
        return (
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: lottieData,
            }}
            height={400}
            width={400}
          />
        );
    }
  };
  return (
    <div

      className={`max-w-xl w-full shadow-md rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-white"} ${darkMode ? "text-white" : "text-black"}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className={`text-2xl font-semibold flex gap-1 justify-center items-center ${darkMode ? "text-white" : "text-black"}`}>
          Online Lottie Previewer
          <Link aria-label="Github" href="https://github.com/naeemudheenp/openlottiepreviewer">
            <FaGithub />
          </Link>
        </h1>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer bg-black text-white rounded-full p-2 transition-all hover:scale-110"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </div>
      </div>
      <input
        type="file"
        accept=".json,.lottie"
        onChange={handleFileUpload}
        className={`w-full border rounded-md p-2 mb-4 ${darkMode ? "border-gray-700 bg-gray-700 text-white" : "border-gray-300"}`}
      />
      <select
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
        className={`w-full border rounded-md p-2 mb-4 ${darkMode ? "border-gray-700 bg-gray-700 text-white" : "border-gray-300"}`}
      >
        <option value="default">Default Player (react-lottie)</option>
        <option value="lottie-react">Lottie React</option>
        <option value="react-lottie-player">React Lottie Player</option>
      </select>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {lottieData ? (
        <div className="mt-4">
          {renderLottiePlayer()}
          <p className="text-gray-500 text-sm mt-2 text-center">
            {lottieFile?.name}
          </p>
        </div>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          Upload a Lottie .json file to preview it.
        </p>
      )}
      <button
        aria-label="Toggle dark mode"
        onClick={() => {
          setLottieData(null);
          setLottieFile(null);
          setError(null);
        }}
        className="w-full hover:text-black bg-black transition-all text-white rounded-md p-2 mt-4 hover:bg-white border border-white hover:border-black"
      >
        Reset
      </button>
    </div>
  );
}