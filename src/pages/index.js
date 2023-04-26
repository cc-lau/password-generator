import { useEffect, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReactSlider from "react-slider";

export default function Home() {
  const [charLength, setCharLength] = useState(0);
  const [password, setPassword] = useState("");
  const [upperCaseSelected, setUpperCaseSelected] = useState(false);
  const [lowerCaseSelected, setLowerCaseSelected] = useState(false);
  const [numbersSelected, setNumbersSelected] = useState(false);
  const [symbolsSelected, setSymbolsSelected] = useState(false);
  const [includedSets, setIncludedSets] = useState([]);
  const CHARACTER_SETS = {
    uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    lowercase: ["abcdefghijklmnopqrstuvwxyz"],
    numbers: ["1234567890"],
    symbols: ["!@#$%^&*()"],
  };

  function handleChecked(event, option) {
    switch (option) {
      case "uppercase":
        setUpperCaseSelected(event.target.checked);
        addIncludedSet(CHARACTER_SETS.uppercase, upperCaseSelected);
        break;
      case "lowercase":
        setLowerCaseSelected(event.target.checked);
        addIncludedSet(CHARACTER_SETS.lowercase, lowerCaseSelected);
        break;
      case "numbers":
        setNumbersSelected(event.target.checked);
        addIncludedSet(CHARACTER_SETS.numbers, numbersSelected);
        break;
      case "symbols":
        setSymbolsSelected(event.target.checked, symbolsSelected);
        addIncludedSet(CHARACTER_SETS.symbols);
        break;

      default:
        break;
    }
  }

  const generatePassword = () => {
    let result = " ";
    console.log(includedSets);
    let SELECTED_CHARS = includedSets;
    console.log(SELECTED_CHARS);
    let FLATTENED_CHARS = SELECTED_CHARS.flat();
    let JOINED_CHARS = FLATTENED_CHARS.join("");
    console.log(JOINED_CHARS);
    const charactersLength = JOINED_CHARS.length;
    console.log(JOINED_CHARS.length);
    for (let i = 0; i < 26; i++) {
      result += JOINED_CHARS.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return setPassword(result);
  };

  const addIncludedSet = (charSet) => {
    setIncludedSets((prevSet) => [...prevSet, charSet]);
    console.log(includedSets);
  };

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center py-10 px-12 mt-14">
      <h1>Password Generator</h1>
      <div className="card flex justify-between w-full bg-zinc-700 px-3 py-2">
        <h2>{password}</h2>
        <ContentCopyIcon />
      </div>
      <div className="card flex flex-col w-full gap-6  px-4 py-6">
        <div>
          <div className="flex flex-row justify-between">
            <h2>Character Length</h2>
            <h2>{charLength}</h2>
          </div>
          <div className="m-auto py-2">
            <ReactSlider
              className="customSlider"
              thumbClassName="customSlider-thumb"
              trackClassName="customSlider-track"
              markClassName="customSlider-mark"
              min={0}
              max={16}
              value={charLength}
              onChange={(value) => setCharLength(value)}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="uppercase"
              value="uppercase"
              onChange={(e) => handleChecked(e, "uppercase")}
            />
            <p className="text-md">Include uppercase Letters</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="lowercase"
              value="lowercase"
              onChange={(e) => handleChecked(e, "lowercase")}
            />
            <p>Include Lowercase Letters</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="numbers"
              value="numbers"
              onChange={(e) => handleChecked(e, "numbers")}
            />
            <p>Include Numbers</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="symbols"
              value="symbols"
              onChange={(e) => handleChecked(e, "symbols")}
            />
            <p>Include Symbols</p>
          </label>
        </div>
        <div className="bg-slate-600 p-3">
          <h2>STRENGTH</h2>
          <p></p>
        </div>
        <button
          onClick={generatePassword}
          className="border-2 text-sm text-center py-4 border-main-color text-main-color hover:text-card-color hover:bg-main-color transition-colors duration-300"
        >
          GENERATE
        </button>
      </div>
    </main>
  );
}
