const ExperienceItem: React.FC<{
  year: string;
  company: string;
  title: string;
  descriprion: string;
}> = ({ year, company, title, descriprion }) => {
  return (
    <div className="flex justify-center gap-6 mt-6">
      <div>
        <div className="flex gap-1 flex-row p-0.5">
          <img
            src="calendar.svg"
            alt="icon"
            className="w-5 h-5 object-contain"
          />
          <p className="font-sans font-light text-[#9198A1] w-[130]">{year}</p>
        </div>
        <div className="flex gap-1 flex-row p-0.5">
          <img src="work.svg" alt="icon" className="w-5 h-5 object-contain" />
          <p className="font-sans font-light text-[#9198A1] w-[110]">{company}</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-sans text-black">{title}</h1>
        <p className="font-sans font-light text-[#9198A1]">{descriprion}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
