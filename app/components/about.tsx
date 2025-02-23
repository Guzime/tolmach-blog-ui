import Image from "next/image";

console.log("ЭЭЭЭ бля");

const AboutMe: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-xl  border border-customBorder flex flex-col items-center ">
        <Image
          src="https://avatars.githubusercontent.com/u/40675616?v=4"
          alt="Картинка прикола"
          width={200}
          height={200}
          className="rounded-full mb-4 "
        />
        <h1 className="text-lg text-black font-sans"> Tolmachev Nikita </h1>
        <div className="flex">
        <img src="location.svg" alt="icon" />
        <p className="font-sans text-[#9198A1]">Russia, Moscow</p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutMe;
