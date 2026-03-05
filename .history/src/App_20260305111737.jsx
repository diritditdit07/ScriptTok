import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ScriptResult from "./components/ScriptResult";
import { generateScript } from "./utils/generator";

function App() {

  const [script, setScript] = useState("");

  function handleGenerate(data) {
    const result = generateScript(data);
    setScript(result);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex justify-center items-start p-6">

      <div className="w-full max-w-3xl">

        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">
            ScriptTok 🚀
          </h1>

          <p className="text-gray-500 mt-2">
            TikTok Affiliate Script Generator
          </p>
        </header>

        <div className="bg-white shadow-xl rounded-2xl p-6">

          <ProductForm onGenerate={handleGenerate} />

          <ScriptResult script={script} />

        </div>

      </div>

    </div>
  );
}

export default App;