import Link from "next/link";

const DisplayCardMini = () => {
  return (
    <div>
      <Link href="#">
        <a>
          <div className="bg-gray-800 w-10/12 h-40 hover:shadow-2xlg rounded-lg mt-10 liftOffAnimation">hello</div>
        </a>
      </Link>
    </div>
  );
};

export default DisplayCardMini;
