import Authentication from "../pages/authentication";
import Home from "../pages/home";

export default function App() {
  const authenticated = true;
  if (authenticated) return <Home />;
  else return <Authentication />;
}
