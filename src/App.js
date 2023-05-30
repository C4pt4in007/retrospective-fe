import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRoute from "./approute/Route";

function App() {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
