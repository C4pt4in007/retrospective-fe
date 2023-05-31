import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRoute from "./approute/Route";

function App() {
  return (
    <div data-testid="routes-div">
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
