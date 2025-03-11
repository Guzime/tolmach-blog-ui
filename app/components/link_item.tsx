import Image from "next/image";

const LinkItem: React.FC<{
  url: string;
  resource: string;
}> = ({ url, resource }) => {
  return (
    <div className="flex gap-1">
      <Image
        width={5}
        height={5}
        src="link.svg"
        alt="icon"
        className="w-5 h-5 object-contain mt-0.5"
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans font-light text-[#9198A1] hover:opacity-60 transform transition duration-200"
      >
        {resource}
      </a>
    </div>
  );
};

export default LinkItem;
