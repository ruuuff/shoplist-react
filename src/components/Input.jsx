export default function Input({
  id,
  label,
  type = "text",
  decimal = false,
  reference,
  placeholder,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        ref={reference}
        placeholder={placeholder}
        {...(type === "number" && { min: "1" })}
        {...(decimal && {
          step: ".01",
          pattern: "^d*(.d{0,2})?$",
          min: "0.01",
        })}
        required
        className="w-full border-2 border-emerald-300 rounded-md p-1 outline-none focus:border-emerald-700"
      />
    </div>
  );
}
