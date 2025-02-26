const ExperienceMe: React.FC = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white p-8 rounded-xl  border border-customBorder flex flex-col items-center ">
        <h1 className="text-lg font-sans text-black">Experience</h1>
        <div className="flex justify-center gap-6">
          <div className="flex gap-1 flex-row p-0.5">
            <img
              src="calendar.svg"
              alt="icon"
              className="w-5 h-5 object-contain"
            />
            <p className="font-sans text-[#9198A1]">2021-2024</p>
          </div>
          <div>
          <h1 className="text-lg font-sans text-black">Team Lead & Developer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceMe;
