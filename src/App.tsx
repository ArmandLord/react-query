import "./App.css";
import { UseRandomNumber } from "./hooks/UseRandomNumber";

export const App = () => {
  const { query } = UseRandomNumber();

  return (
    <div className="App App-header">
      <h2>
        Número Aleatorio: {query.isError && "Errorrrr!"}
        {!query.isError && query.isFetching ? "Cargando..." : query.data}
      </h2>
      <button onClick={() => query.refetch()}>De nuevo</button>
    </div>
  );
};
