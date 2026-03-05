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

    const resultScript = generateScript(data);
    setScript(resultScript);

    const resultHooks = generateHooks(data.product);
    setHooks(resultHooks);
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center p-6">

      <div className="w-full max-w-3xl">

        <header className="text-center text-white mb-8">

          <h1 className="text-4xl font-bold">
            ScriptTok 🚀
          </h1>

          <p className="opacity-80">
            TikTok Affiliate Script Generator
          </p>

        </header>

        <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-8">

          <ProductForm onGenerate={handleGenerate} />

          <HookList hooks={hooks} />

          <ScriptResult script={script} />

        </div>

      </div>

    </div>
  );
}

export default App;