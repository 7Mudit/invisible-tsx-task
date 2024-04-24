import "./App.css";
import CardHolder from "./components/CardHolder";
import { Project } from "./interfaces/Project";

const projects: Project[] = [
  {
    title: "Project 1",
    description:
      "This is a description of project 1. It's a really cool project that you should check out!",
    images: ["https://via.placeholder.com/150"], // Replace with a real image URL
    link: "https://www.example.com/project-1", // Optional link to the project
  },
  {
    title: "Project 2",
    description:
      "This is a description of project 2. It's another awesome project you don't want to miss!",
    images: ["https://via.placeholder.com/150"], // Replace with a real image URL
  },
  {
    title: "Project 3",
    description:
      "This is a description of project 3. You get the idea by now - it's fantastic!",
    images: ["https://via.placeholder.com/150"], // Replace with a real image URL
  },
  // Add more projects here following the same format
];
function App() {
  return (
    <div className="text-right">
      <CardHolder projects={projects} />
    </div>
  );
}

export default App;
