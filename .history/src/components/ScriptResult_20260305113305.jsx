function ScriptCard({ title, content }) {

  return (

    <div className="bg-white/20 border border-white/30 backdrop-blur-md p-4 rounded-xl text-white">

      <div className="text-sm opacity-70 mb-1">
        {title}
      </div>

      <div>
        {content}
      </div>

    </div>

  );
}