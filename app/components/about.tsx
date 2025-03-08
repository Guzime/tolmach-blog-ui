import Image from "next/image";
import Contact from "./contact";

const AboutMe: React.FC = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center mt-[70px]">
        <div className="p-4 bg-white rounded-xl  border border-customBorder flex flex-col items-center w-full">
          <Image
            src="https://avatars.githubusercontent.com/u/40675616?v=4"
            alt="Картинка прикола"
            width={300}
            height={300}
            className="rounded-full mb-4 "
          />
          <div className="flex flex-col items-start">
            <h1 className="text-lg text-black font-sans"> Tolmachev Nikita</h1>
            <div className="flex gap-1">
              <Image
                width={5}
                height={5}
                src="badge.svg"
                alt="icon"
                className="w-5 h-5 object-contain"
              />
              <p className="font-sans text-[#9198A1]">Java Developer</p>
            </div>
            <div className="flex gap-1">
              <Image
                width={5}
                height={5}
                src="location.svg"
                alt="icon"
                className="w-5 h-5 object-contain"
              />
              <p className="font-sans  text-[#9198A1]">Russia, Moscow</p>
            </div>
            <div className="flex gap-1">
              <Image
                width={5}
                height={5}
                src="work.svg"
                alt="icon"
                className="w-5 h-5 object-contain"
              />
              <p className="font-sans text-[#9198A1]">Diasoft</p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default AboutMe;
