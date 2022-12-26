export default function SubmitButton({ label }) {
  return (
    <button
      type="submit"
      title={label}
      className="bg-emerald-600 text-white flex items-center px-4 py-2 rounded-xl"
    >
      <span className="mr-2">{label}</span>
      <div className="relative inline-block w-6 h-6">
        <div className="bg-current w-5 h-1 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[90deg]"></div>
        <div className="bg-current w-5 h-1 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]"></div>
      </div>
    </button>
  );
}
