import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home";
import { Landlords } from "./pages/landlords/landlords";
import { Layout } from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/landloards",
    element: (
      <Layout>
        <Landlords />
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
