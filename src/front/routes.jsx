// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Budget } from "./pages/Budget";
import { Home } from "./pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Homepage */}
      <Route index element={<Home />} />

      {/* Auth Routes */}
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="budget" element={<Budget />} />

    </Route>
  )
);