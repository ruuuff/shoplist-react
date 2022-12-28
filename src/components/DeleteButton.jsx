export default function DeleteButton({ onClick }) {
  return (
    <button
      title="Deletar item"
      onClick={onClick}
      className="bg-red-400 hover:bg-red-600 text-white relative flex items-center p-2 rounded-md w-7 h-7 active:scale-95"
    >
      <div className="bg-current w-5 h-1 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[45deg]"></div>
      <div className="bg-current w-5 h-1 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-45deg]"></div>
    </button>
  );
}
