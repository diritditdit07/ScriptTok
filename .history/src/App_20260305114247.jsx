import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ScriptResult from "./components/ScriptResult";
import HookList from "./components/HookList";

import { generateScript } from "./utils/generator";
import { generateHooks } from "./utils/hookGenerator";
import logo from "./assets/logo.svg";

function App() {

  const [script, setScript] = useState(null);
  const [hooks, setHooks] = useState([]);

  function handleGenerate(data) {

    const resultScript = generateScript(data);
    setScript(resultScript);

    const resultHooks = generateHooks(data.product);
    setHooks(resultHooks);
  }

  return (

    <div className="min-h-screen bg-gray-50 flex justify-center p-6">

      <div className="w-full max-w-2xl">

        <header className="mb-8">

          <h1 className="text-3xl font-semibold">
            ScriptTok
          </h1>

          <p className="text-gray-500">
            TikTok Affiliate Script Generator
          </p>

        </header>

        {/* FORM CARD */}

        <div className="bg-white border border-gray-200 rounded-xl p-6">

          <ProductForm onGenerate={handleGenerate} />

        </div>

        {/* HOOK RESULT */}

        {hooks.length > 0 && (

          <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">

            <HookList hooks={hooks} />

          </div>

        )}

        {/* SCRIPT RESULT */}

        {script && (

          <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">

            <ScriptResult script={script} />

          </div>

        )}

      </div>

    </div>

  );
}

export default App;