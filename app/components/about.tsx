"use client";
import Image from "next/image";

console.log("ЭЭЭЭ бля");

const AboutMe: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-[#3F4F44] p-8 rounded-xl shadow-md shadow-[#3F4F44] flex flex-col items-center ">
        <Image
          src="https://avatars.githubusercontent.com/u/40675616?v=4"
          alt="Картинка прикола"
          width={500}
          height={300}
          className="rounded-xl mb-4 "
        />
        <h1 className="text-white"> ну это прикол тут будет </h1>
      </div>
    </div>
  );
};

export default AboutMe;
