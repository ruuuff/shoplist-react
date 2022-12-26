export default function Input({
  id,
  label,
  type = "text",
  reference,
  placeholder,
  pr,
  pl,
}) {
  return (
    <div className={`flex flex-col ${pr ? "pr-2" : ""} ${pl ? "pl-2" : ""}`}>
      <label htmlFor={id} className="mb-1 font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        ref={reference}
        placeholder={placeholder}
        required
        className="border-2 border-emerald-300 rounded-md p-1 outline-none focus:border-emerald-700"
      />
    </div>
  );
}
