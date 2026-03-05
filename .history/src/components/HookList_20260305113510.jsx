export default function HookList({ hooks }) {

  if (!hooks || hooks.length === 0) return null;

  return (

    <div>

      <h2 className="text-lg font-semibold mb-3">
        Hook Ideas
      </h2>

      <div className="space-y-2">

        {hooks.map((hook, index) => (

          <div
            key={index}
            className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50"
          >
            {hook}
          </div>

        ))}

      </div>

    </div>
  );
}