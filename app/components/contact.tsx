import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="flex mt-3">
      <div className="flex flex-col w-full">
        <div className="flex flex-col bg-white rounded-xl  border border-customBorder p-4">
          <div className="flex gap-1">
            <Image
              width={5}
              height={5}
              src="link.svg"
              alt="icon"
              className="w-5 h-5 object-contain mt-0.5"
            />
            <p className="font-sans font-light text-[#9198A1]">Mail</p>
          </div>
          <div className="flex gap-1">
            <Image
              width={5}
              height={5}
              src="link.svg"
              alt="icon"
              className="w-5 h-5 object-contain mt-0.5"
            />
            <p className="font-sans font-light text-[#9198A1]">Telegram</p>
          </div>
          <div className="flex gap-1">
            <Image
              width={5}
              height={5}
              src="link.svg"
              alt="icon"
              className="w-5 h-5 object-contain mt-0.5"
            />
            <p className="font-sans font-light text-[#9198A1]">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
