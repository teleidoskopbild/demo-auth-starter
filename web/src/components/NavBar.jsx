import "./NavBar.css";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <SignedIn>
          {" "}
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </SignedIn>

        <div>
          {/* <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li> */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </ul>
    </nav>
  );
}
