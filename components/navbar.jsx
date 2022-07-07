import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { signOut, useSession } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import Cookies from 'js-cookie';

const Navbar = () => {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

const logoutClickHandler = () => {
  Cookies.remove('cart');
  dispatch({type: 'CART_RESET' })
  signOut({callbackUrl: '/login'});
}

  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="w-full h-12 font-mono text-xs bg-slate-800 flex justify-between pt-4 pl-2 text-gray-300">
        {status === 'loading' ? (
          'Loading'
        ) : session?.user ? (
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="text-blue-500">
              {session.user.name}
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-56 origin-top-left mt-4 bg-white shadow-lg">
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/profile">
                  Profile
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/profile">
                  Order History
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/login">
                  <a
                    className="dropdown-link"
                    href="#"
                    onClick={logoutClickHandler}
                  >
                    Logout
                  </a>
                </DropdownLink>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <Link href="/login">
            <a className="font-bold font-mono text-xs text-gray-300 ">
              sign in
            </a>
          </Link>
        )}

        <Link href="/">
          <a className="font-bold font-mono text-xs text-gray-300  ">
            Prime/Store
          </a>
        </Link>
        <Link href="/cart">
          <a className="font-bold font-mono text-xs text-gray-300  pr-3">
            BAG
            {cartItemsCount > 0 && (
              <span className="ml-1 rounded-full bg-red-800 px-2 py-1 text-xs font-bold text-white">
                {cartItemsCount}
              </span>
            )}
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
