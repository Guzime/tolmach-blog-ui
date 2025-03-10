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
            <a href="mailto:forblachok@yandex.ru" className="font-sans font-light text-[#9198A1] hover:opacity-60 transform transition duration-200">Mail</a>
          </div>
          <div className="flex gap-1">
            <Image
              width={5}
              height={5}
              src="link.svg"
              alt="icon"
              className="w-5 h-5 object-contain mt-0.5"
            />
            <a 
            href="https://t.me/tolmachevski" 
            target="_blank"
            rel="noopener noreferrer" 
            className="font-sans font-light text-[#9198A1] hover:opacity-60 transform transition duration-200">Telegram</a>
          </div>
          <div className="flex gap-1">
            <Image
              width={5}
              height={5}
              src="link.svg"
              alt="icon"
              className="w-5 h-5 object-contain mt-0.5"
            />
             <a 
            href="https://github.com/Guzime" 
            target="_blank"
            rel="noopener noreferrer" 
            className="font-sans font-light text-[#9198A1] hover:opacity-60 transform transition duration-200">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
