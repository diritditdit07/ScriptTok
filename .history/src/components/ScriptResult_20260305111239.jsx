export default function ScriptResult({ script }) {

  if (!script) return null;

  function copyScript() {
    navigator.clipboard.writeText(script);
    alert("Script copied!");
  }

  return (
    <div>

      <h2>Generated Script</h2>

      <pre>{script}</pre>

      <button onClick={copyScript}>
        Copy Script
      </button>

    </div>
  );
}