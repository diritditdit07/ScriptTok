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
    <div style={{padding:"20px"}}>

      <h1 className="text-4xl text-red-500">ScriptTok</h1>
      <p>TikTok Affiliate Script Generator</p>

      <ProductForm onGenerate={handleGenerate} />

      <ScriptResult script={script} />

    </div>
  );
}

export default App;