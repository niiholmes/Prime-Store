 import Link from "next/link"; 
import { useContext } from "react";
import { Store } from "../utils/Store";
 

const Navbar = () => {
  const {state} = useContext(Store);
  const {cart} = state;
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
      <Link href="/cart">
        <a className="font-bold font-mono text-xs text-gray-300 pt-4 pr-3">
          CART
          {cart.cartItems.length > 0 && (
            <span className="ml-1 rounded-full bg-red-800 px-2 py-1 text-xs font-bold text-white">
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </span>
          )}
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
