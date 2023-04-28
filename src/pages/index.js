import { useEffect, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReactSlider from "react-slider";

export default function Home() {
  const [charLength, setCharLength] = useState(8);
  const [password, setPassword] = useState("");
  const [selections, setSelections] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [includedSets, setIncludedSets] = useState("");

  const CHARACTER_SETS = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: "!@#$%^&*()",
  };

  const generatePassword = () => {
    if (
      !selections.uppercase &&
      !selections.lowercase &&
      !selections.numbers &&
      !selections.symbols
    ) {
      return <h1>Please select at least 1 option.</h1>;
    } else {
      let result = " ";
      const charactersLength = includedSets.length;
      console.log(includedSets.length);
      for (let i = 0; i < charLength; i++) {
        result += includedSets.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return setPassword(result);
    }
  };

  const handleClick = (e) => {
    const { name } = e.target;
    console.log(name);
    setSelections((prevState) => ({
      ...prevState,
      [name]: e.target.checked,
    }));
  };

  const addIncludedSet = () => {
    let INCLUDED_SETS = [];
    if (selections.uppercase) {
      INCLUDED_SETS += CHARACTER_SETS.uppercase;
    }
    if (selections.lowercase) {
      INCLUDED_SETS += CHARACTER_SETS.lowercase;
    }
    if (selections.numbers) {
      INCLUDED_SETS += CHARACTER_SETS.numbers;
    }
    if (selections.symbols) {
      INCLUDED_SETS += CHARACTER_SETS.symbols;
    }
    setIncludedSets(INCLUDED_SETS);
    console.log(includedSets);
  };

  useEffect(() => {
    addIncludedSet();
    console.log(selections);
  }, [selections]);

  useEffect(() => {
    generatePassword();
  }, [charLength]);

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center py-10 px-12 mt-14">
      <h1>Password Generator</h1>
      <div className="card flex justify-between w-full bg-zinc-700 px-3 py-2">
        <h2>{password}</h2>
        <ContentCopyIcon
          className="copy-icon"
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
        />
        ``
      </div>
      <div className="card flex flex-col w-full gap-6  px-4 py-6">
        <div>
          <div className="flex flex-row justify-between">
            <h2>Password Length</h2>
            <h2>{charLength}</h2>
          </div>
          <div className="m-auto py-2">
            <ReactSlider
              className="customSlider"
              thumbClassName="customSlider-thumb"
              trackClassName="customSlider-track"
              markClassName="customSlider-mark"
              min={0}
              max={20}
              value={charLength}
              onChange={(value) => setCharLength(value)}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          {!selections.uppercase &&
          !selections.lowercase &&
          !selections.numbers &&
          !selections.symbols ? (
            <h2 className="text-red-600">Please select at least 1 option.</h2>
          ) : null}
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="uppercase"
              value={selections.uppercase}
              onChange={handleClick}
            />
            <p className="text-md">Include uppercase Letters</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="lowercase"
              value={selections.lowercase}
              onChange={handleClick}
            />
            <p>Include Lowercase Letters</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="numbers"
              value={selections.numbers}
              onChange={handleClick}
            />
            <p>Include Numbers</p>
          </label>
          <label className="flex gap-4 items-center">
            <input
              className="customCheckbox w-4 h-4 appearance-none checked:bg-main-color border rounded-sm border-main-color transition-colors duration-300"
              type="checkbox"
              name="symbols"
              value={selections.symbols}
              onChange={handleClick}
            />
            <p>Include Symbols</p>
          </label>
        </div>
        <div className="strength-container p-3">
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
