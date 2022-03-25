import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 mb-7 ml-5 mr-5">
      <Link href="#">
        <a>
          <h6 className="border-y-2 footnote text-left text-xs text-gray-400">
            Prime Store Online
          </h6>
        </a>
      </Link>
      <Link href="#">
        <a>
          <h6 className=" border-b-2 footnote text-left text-xs text-gray-400">
            Shop and Learn
          </h6>
        </a>
      </Link>
      <Link href="#">
        <a>
          <h6 className=" border-b-2 footnote text-left text-xs text-gray-400">
            About Prime Store
          </h6>
        </a>
      </Link>
      <Link href="">
        <a>
          <h6 className=" border-b-2 footnote text-left text-xs text-gray-400">
            Copyright © 2022 Prime Store Inc. All rights reserved.
          </h6>
        </a>
      </Link>
      <div className="flex">
        <Link href="#">
          <a>
            <h6 className=" footnote text-left text-xs text-gray-400 pr-1 ">
              Privacy Policy |
            </h6>
          </a>
        </Link>
        <Link href="#">
          <a>
            <h6 className=" footnote text-left text-xs text-gray-400 pr-1">
              Terms of Use |
            </h6>
          </a>
        </Link>
        <Link href="#">
          <a>
            <h6 className=" footnote text-left text-xs text-gray-400 pr-1">
              Sales and Refunds |
            </h6>
          </a>
        </Link>
        <Link href="#">
          <a>
            <h6 className=" footnote text-left text-xs text-gray-400 pr-1">
              Legal |
            </h6>
          </a>
        </Link>
        <Link href="#">
          <a>
            <h6 className=" footnote text-left text-xs text-gray-400">
              Site Map
            </h6>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
