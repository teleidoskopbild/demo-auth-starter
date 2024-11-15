import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
// import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
// import { RegisterPage } from "./pages/RegisterPage";
import { RootLayout } from "./pages/RootLayout";
import {
  ClerkProvider,
  SignedIn,
  SignIn,
  SignUp,
  RedirectToSignIn,
  SignedOut,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/register",
      //   element: <RegisterPage />,
      // },
      {
        path: "/profile",
        element: (
          <>
            <SignedIn>
              <ProfilePage />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ),
      },
      {
        path: "/login/*",
        element: (
          <SignIn
            routing="path"
            path="/login"
            signUpUrl="http://localhost:5173/register"
          />
        ),
      },
      {
        path: "/register/*",
        element: (
          <SignUp
            routing="path"
            path="/register"
            signInUrl="http://localhost:5173/login"
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
