import { useRef, useState } from "react";
import { Spinner } from "./components/spinner/spinner.tsx";
import { getRandomNumber } from "./helpers/getRandomNumber.ts";
import { Pokemon } from "./types/pokemon.ts";
import "./App.css";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const TIMEOUT_IN_SECONDS = 2;
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Pokemon | null>(null);
  const controllerRef = useRef<AbortController>();
  const timeoutRef = useRef<number>();

  const onClick = async () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    const randomId = getRandomNumber(151);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/${randomId}`, { signal });
      const responseData = await response.json();
      setData(responseData);

      await new Promise(
        (resolve) =>
          (timeoutRef.current = setTimeout(resolve, TIMEOUT_IN_SECONDS * 1000)),
      );

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pokemon-container">
      <button
        className={`pokemon-container__fetch-button ${isLoading ? "pokemon-container__fetch-button--loading" : ""}`}
        onClick={onClick}
      >
        {isLoading ? <Spinner /> : <span>Fetch Data</span>}
      </button>
      <div className="pokemon-container__data-container">
        <p>
          {data &&
            !isLoading &&
            `id: ${data.id} | name: ${data.name} | weight: ${data.weight} | height: ${data.height}`}
        </p>
      </div>
    </div>
  );
}

export default App;
