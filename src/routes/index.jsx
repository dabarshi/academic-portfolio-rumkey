import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Research from "../pages/Research";
import Publications from "../pages/Publications";
import Media from "../pages/Media";
import Blog from "../pages/Blog";
import Events from "../pages/Events";
import Contact from "../pages/Contact";

// Function to check authentication with the backend

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/research",
        element: <Research />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      //   {
      //     path: "/menu",
      //     element: <OurMenu />,
      //   },
      //   {
      //     path: "/about",
      //     element: <About />,
      //   },
      //   {
      //     path: "/book",
      //     element: <Book />,
      //   },
      //   {
      //     path: "/contact",
      //     element: <Contact />,
      //   },
      //   {
      //     path: "/login",
      //     element: <LoginPage />,
      //   },
      //   {
      //     path: "/register",
      //     element: <RegisterPage />,
      //   },
      //   {
      //     path: "/admin",
      //     element: <ProtectedRoute element={<AdminDashboard />} />, // Protect the AdminDashboard route
      //   },
    ],
  },
]);
