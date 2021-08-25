

export default function Buttons({text, children, padding=" p-2 md:p-4", click, z}) {
  return (
    <button className={`bg-white ${padding} rounded-xl shadow-md bg-primary text-white cursor-pointer ${z}`}  onClick={click}>
        {children}
      <p className="text-sm md:text-lg font-semibold">{text}</p>
    </button>
  );
}
