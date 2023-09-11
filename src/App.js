import "./App.css";
import { useState } from "react";
import NewOrderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import { Route, Routes } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <Routes>
          <Route path='orders/new' element={<NewOrderPage/>}/>
          <Route path='orders' element={<OrderHistoryPage/>}/>
        </Routes>
      ) : <AuthPage />}
    </div>
  )
}

export default App;
