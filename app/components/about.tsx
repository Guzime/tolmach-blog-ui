"use client";

console.log("ЭЭЭЭ бля");

const AboutMe: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-gray-800 p-8 rounded-xl shadow-md shadow-gray-800 flex flex-col items-center ">
        <img
          src="https://avatars.githubusercontent.com/u/40675616?v=4"
          alt="Картинка прикола"
          className="rounded-xl mb-4 w-32 h-32 "
        />
        <h1 className="text-white"> ну это прикол тут будет </h1>
      </div>
    </div>
  );
};

export default AboutMe;
