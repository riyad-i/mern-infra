import "./App.css";
import { useState } from "react";
import NewOrderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <NewOrderPage /> : <AuthPage />}
    </div>
  )
}

export default App;
