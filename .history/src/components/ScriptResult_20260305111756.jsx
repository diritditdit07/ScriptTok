export default function ScriptResult({ script }) {

  if (!script) return null;

  function copyScript() {
    navigator.clipboard.writeText(script);
    alert("Script copied!");
  }

  return (
    <div className="mt-8">

      <div className="flex justify-between items-center mb-3">

        <h2 className="font-semibold text-lg">
          Generated Script
        </h2>

        <button
          onClick={copyScript}
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded-lg"
        >
          Copy
        </button>

      </div>

      <div className="bg-gray-100 p-5 rounded-xl whitespace-pre-wrap text-gray-800 leading-relaxed">
        {script}
      </div>

    </div>
  );
}