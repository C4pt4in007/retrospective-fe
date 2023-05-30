import { loader } from "../components/GetAllRetrospective";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import GetAllRetrospective from "../components/GetAllRetrospective";
import Error from "../components/Error";
import CreateRetrospective from "../components/CreateRetrospectives";
import GetRetrospectiveByDate from "../components/GetRetrospectiveByDate";
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    id: "root",
    children: [
      {
        index: true,
        element: <GetAllRetrospective />,
        loader: loader,
      },
      {
        path: "getretrospectivesbydate",
        element: <GetRetrospectiveByDate />,
      },
      {
        path: "createretrospective",
        element: <CreateRetrospective />,
      },
    ],
  },
]);
export default appRoute;
