export default function HookList({ hooks }) {

  if (!hooks || hooks.length === 0) return null;

  return (

    <div className="mt-8">

      <h2 className="text-white font-semibold mb-3">
        Hook Ideas 🔥
      </h2>

      <div className="space-y-2">

        {hooks.map((hook, index) => (

          <div
            key={index}
            className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-lg text-white"
          >
            {hook}
          </div>

        ))}

      </div>

    </div>

  );
}