import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Cadastro } from './pages/cadastro';
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    
    <Router>
      <AuthContextProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      </AuthContextProvider>
    </Router>
    
  );
}

export default App;
