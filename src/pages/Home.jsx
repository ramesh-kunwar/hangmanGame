import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useState, useEffect } from "react";

const Home = () => {
  const [word, setWord] = useState("");

  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    setWord(data[randomIndex].wordValue);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  console.log(word);
  return (
    <div>
      <h1 className="text-4xl font-black my-8">Home</h1>
      <Link
        to={"/play"}
        state={{ wordSelected: word }}
        className="text-blue-500"
      >
        <Button text="Single Player" />
      </Link>
      <div className="mt-8">
        <Link to="/start" className="text-blue-500">
          <Button text="Multi Player" styleType="secondary" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
