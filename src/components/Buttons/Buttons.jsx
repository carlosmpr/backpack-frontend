

export default function Buttons({text, children, padding="p-4", click}) {
  return (
    <div className={`bg-white ${padding} rounded-xl shadow-md bg-primary text-white cursor-pointer`}  onClick={click}>
        {children}
      <p className="font-semibold">{text}</p>
    </div>
  );
}
