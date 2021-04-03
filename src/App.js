import "./App.css";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [state, dispatch] = useStateValue();
  // const [{user}, dispatch] = useStateValue();
  // const [user, setUser] = useState("");

  return (
    <div className="app">
      <h1>React Context API</h1>
      <h2>{state.user ? `Hola señor ${state.user}` : "No user logged in"}</h2>

      <Login />
    </div>
  );
}

export default App;
