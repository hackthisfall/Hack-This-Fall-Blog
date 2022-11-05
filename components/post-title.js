export default function PostTitle({ children }) {
  return (
    <h1 className="text-2xl md:text-2xl lg:text-2xl font-poppins font-semibold tracking-tighter leading-tight md:leading-none text-center md:text-left">
      {children}
    </h1>
  );
}
