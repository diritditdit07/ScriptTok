export default function HookList({ hooks }) {

  if (!hooks || hooks.length === 0) return null;

  return (

    <div className="mt-6">

      <h2 className="font-semibold mb-3">
        Hook Ideas 🔥
      </h2>

      <div className="space-y-2">

        {hooks.map((hook, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 rounded-lg"
          >
            {hook}
          </div>
        ))}

      </div>

    </div>

  );
}