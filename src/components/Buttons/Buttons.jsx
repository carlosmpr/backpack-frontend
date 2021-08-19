

export default function Buttons({text, children, padding="p-4", click}) {
  return (
    <button className={`bg-white ${padding} rounded-xl shadow-md bg-primary text-white cursor-pointer z-50`}  onClick={click}>
        {children}
      <p className="font-semibold">{text}</p>
    </button>
  );
}
