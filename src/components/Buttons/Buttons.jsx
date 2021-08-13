

export default function Buttons({text, children, padding="p-4"}) {
  return (
    <div className={`bg-white ${padding} rounded-xl shadow-md bg-primary text-white`}>
        {children}
      <p className="font-semibold">{text}</p>
    </div>
  );
}
