import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-slate-800 flex justify-between">
      <Link href="/">
        <a className="font-bold font-mono text-xs text-gray-300 pt-4 pl-3">
          sign in
        </a>
      </Link>
      <Link href="/">
        <a className="font-bold font-mono text-xs text-gray-300 pt-4 ">
          Prime/Store
        </a>
      </Link>
      <Link href="/">
        <a className="font-bold font-mono text-xs text-gray-300 pt-4 pr-3">
          CART
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
