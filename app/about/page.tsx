import AboutMe from "../components/about";
import NavBar from "../components/navbar";
import StackMe from "../components/stack";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center gap-6">
        <AboutMe />
        <StackMe />
      </div>
    </div>
  );
}
