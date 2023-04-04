import { useEffect, useState } from "react";
import "./App.css";
// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

export const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading((prev) => (prev = true));
    getRandomFromAPI()
      // .then((numero) => {
      //   setNumber(numero);
      // })
      .then(setNumber)
      .catch((err) => {
        console.error(`Este es el error: ${err}`);
        setError((prev) => (prev = true));
      })
      .finally(() => {
        setIsLoading((prev) => (prev = false));
      });
  }, []);

  const getRandomFromAPI = async (): Promise<number> => {
    const res = await fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    );
    const numberString = await res.text();
    // throw new Error("error");
    return +numberString;
  };

  return (
    <div className="App App-header">
      <h2>
        Número Aleatorio: {error && "Errorrrr!"}
        {isLoading ? "Cargando..." : number}
      </h2>
    </div>
  );
};
