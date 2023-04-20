import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReactSlider from "react-slider";

export default function Home() {
  const [currentValue, setCurrentValue] = useState(0);
  /*   const [password, setPassword] = useState("");
  const [upperCaseSelected, setUpperCaseSelected] = useState(false);
  const [lowerCaseSelected, setLowerCaseSelected] = useState(false);
  const [numbersSelected, setNumbersSelected] = useState(false);
  const [symbolsSelected, setSymbolsSelected] = useState(false);

  function handleChecked(event, option) {
    switch (option) {
      case "upperCase":
        setUpperCaseSelected(event.target.checked);
        break;
      case "lowerCase":
        setLowerCaseSelected(event.target.checked);
        break;
      case "numbers":
        setNumbersSelected(event.target.checked);
        break;
      case "symbols":
        setSymbolsSelected(event.target.checked);
        break;

      default:
        break;
    }
  }

  function generatePassword() {
    if (upperCaseSelected) {
      setPassword(Math.random(200));
    } else {
      return;
    }
  }

  const CHARACTER_SETS = {
    uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", 26],
    lowercase: ["abcdefghijklmnopqrstuvwxyz", 26],
    numbers: ["1234567890", 10],
    symbols: ["!@#$%^&*()", 10],
  }; */

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center py-10 px-12 mt-14">
      <h1>Password Generator</h1>
      <div className="card flex justify-between w-full bg-zinc-700 px-3 py-2">
        <h2>PASSWORD</h2>
        <ContentCopyIcon />
      </div>
      <div className="card flex flex-col w-full gap-6  px-4 py-6">
        <div>
          <div className="flex flex-row justify-between">
            <h2>Character Length</h2>
            <h2>{currentValue}</h2>
          </div>
          <div className="m-auto py-2">
            <ReactSlider
              className="customSlider"
              thumbClassName="customSlider-thumb"
              trackClassName="customSlider-track"
              markClassName="customSlider-mark"
              min={0}
              max={16}
              value={currentValue}
              onChange={(value) => setCurrentValue(value)}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="upperCase"
              value="upperCase"
              /*               onChange={(e) => handleChecked(e, "upperCase")}
               */
            />
            <p className="text-md">Include Uppercase Letters</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="lowercase"
              value="lowercase"
            />
            <p>Include Lowercase Letters</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="numbers"
              value="numbers"
            />
            <p>Include Numbers</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="symbols"
              value="symbols"
            />
            <p>Include Symbols</p>
          </label>
        </div>
        <div className="bg-slate-600 p-3">
          <h2>STRENGTH</h2>
          <p></p>
        </div>
        <button
          /*           onClick={generatePassword}
           */ className="border-2 text-sm text-center py-4 border-main-color text-main-color hover:text-card-color hover:bg-main-color transition-colors duration-300"
        >
          GENERATE
        </button>
      </div>
    </main>
  );
}
