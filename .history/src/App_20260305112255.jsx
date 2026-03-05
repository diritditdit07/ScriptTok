import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ScriptResult from "./components/ScriptResult";
import HookList from "./components/HookList";

import { generateScript } from "./utils/generator";
import { generateHooks } from "./utils/hookGenerator";

function App() {

  const [script, setScript] = useState("");
  const [hooks, setHooks] = useState([]);

  function handleGenerate(data) {

    // generate script
    const resultScript = generateScript(data);
    setScript(resultScript);

    // generate hook ideas
    const resultHooks = generateHooks(data.product);
    setHooks(resultHooks);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex justify-center items-start p-6">

      <div className="w-full max-w-3xl">

        {/* Header */}
        <header className="mb-8 text-center">

          <h1 className="text-4xl font-bold">
            ScriptTok 🚀
          </h1>

          <p className="text-gray-500 mt-2">
            TikTok Affiliate Script Generator
          </p>

        </header>

        {/* Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6">

          {/* Form */}
          <ProductForm onGenerate={handleGenerate} />

          {/* Hook Ideas */}
          <HookList hooks={hooks} />

          {/* Script Result */}
          <ScriptResult script={script} />

        </div>

      </div>

    </div>
  );
}

export default App;