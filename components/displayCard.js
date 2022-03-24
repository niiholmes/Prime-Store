import Link from "next/link";

const DisplayCard = ({title, brief}) => {
  return (
    <div>
      <Link href="#">
        <a>
          <div className="bg-gray-800 w-10/12 h-96 hover:shadow-2xlg rounded-lg mt-10 liftOffAnimation">
            <h4>{title}</h4>
            <h4>{brief}</h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default DisplayCard;
