import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";
import MyNavBar from "../components/nav_bar/nav_bar";
import { University } from "../utils/interfaces";

const universities: University[] = [
  {
    name: "Harvard University",
    location: "Cambridge, Massachusetts",
    image: "https://via.placeholder.com/300x200",
    description:
      "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the oldest institution of higher learning in the United States and among the most prestigious in the world.",
  },
  {
    name: "Stanford University",
    location: "Stanford, California",
    image: "https://via.placeholder.com/300x200",
    description:
      "Stanford University is a private research university in Stanford, California. Stanford is known for its academic strength, wealth, and proximity to Silicon Valley, and ranked as one of the world's top universities.",
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, Massachusetts",
    image: "https://via.placeholder.com/300x200",
    description:
      "The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. The Institute is a land-grant, sea-grant, and space-grant university, with an urban campus that extends more than a mile alongside the Charles River.",
  },
];

export default function HomaPage() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <MyNavBar />
      <main className="content">
        <h1>Top Universities</h1>
        <div className="universities">
          {universities.map((university) => (
            <div
              key={university.name}
              className="university"
              onClick={() => {
                navigate(`${university.name}`, {
                  state: {
                    title: university.name,
                    location: university.location,
                    image: university.image,
                    description: university.description
                  },
                });
              }}>
              <h2>{university.name}</h2>
              <p>{university.location}</p>
              <img src={university.image} alt={university.name} />
              <p>{university.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
