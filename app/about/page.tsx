import AboutMe from "../components/about";
import ExperienceMe from "../components/experience";
import NavBar from "../components/navbar";
import StackMe from "../components/stack";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center gap-3">
        <AboutMe />
        <StackMe />
      </div>
      <ExperienceMe />
    </div>
  );
}
