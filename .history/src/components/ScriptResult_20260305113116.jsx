export default function ScriptResult({ script }) {

  if (!script) return null;

  function copyScript() {

    const fullScript = `
HOOK:
${script.hook}

RELATABLE:
${script.relatable}

SCENE 1:
${script.scene1}

SCENE 2:
${script.scene2}

SCENE 3:
${script.scene3}

PRICE:
${script.price}

CTA:
${script.cta}
`;

    navigator.clipboard.writeText(fullScript);
    alert("Script copied!");
  }

  return (

    <div className="mt-8 space-y-4">

      <div className="flex justify-between items-center">

        <h2 className="text-lg font-semibold">
          Video Script 🎬
        </h2>

        <button
          onClick={copyScript}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
        >
          Copy Script
        </button>

      </div>

      <ScriptCard title="Hook" content={script.hook} />

      <ScriptCard title="Relatable Moment" content={script.relatable} />

      <ScriptCard title="Scene 1" content={script.scene1} />

      <ScriptCard title="Scene 2" content={script.scene2} />

      <ScriptCard title="Scene 3" content={script.scene3} />

      <ScriptCard title="Price Moment" content={script.price} />

      <ScriptCard title="Call To Action" content={script.cta} />

    </div>

  );
}

function ScriptCard({ title, content }) {

  return (

    <div className="bg-gray-100 p-4 rounded-xl">

      <div className="text-sm text-gray-500 mb-1">
        {title}
      </div>

      <div className="text-gray-800">
        {content}
      </div>

    </div>

  );
}