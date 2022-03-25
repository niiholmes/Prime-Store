import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="flex mt-4">
      <Link href="#">
        <a>
          <button className="bg-gray-200 rounded-2xl mr-4 p-2 text-sm">
            Order Status
          </button>
        </a>
      </Link>
      <Link href="#">
        <a>
          <button className="bg-gray-200 rounded-2xl mr-4 p-2 text-sm">
            Shopping Help
          </button>
        </a>
      </Link>
    </div>
  );
};

export default QuickLinks;
