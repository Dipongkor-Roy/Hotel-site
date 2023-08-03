import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";

import { router } from "./Components/Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
