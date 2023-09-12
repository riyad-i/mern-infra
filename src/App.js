import "./App.css";
import { useState } from "react";
import NewOrderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { getUser } from "./utilities/users-service";



function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
        <NavBar/>
        <Routes>
          <Route path='orders/new' element={<NewOrderPage/>}/>
          <Route path='orders' element={<OrderHistoryPage/>}/>
        </Routes>
        </>
      ) : <AuthPage />}
    </main>
  )
}

export default App;
