import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import { About, Home, Contat, User, NotFound } from "./components";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
      path="/" 
      element={<Layout />}
      errorElement = { <NotFound/> }>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contat />}></Route>
        <Route path="user" element= { <User/> }>
          <Route path=":userid" element = { <User/> }></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
