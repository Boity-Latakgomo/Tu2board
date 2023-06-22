"use client";
import Authentication from "./authentication/page";
// import Home from "../pages/home";
// import Qa from "../pages/qa";
// import TutorialList from "../pages/tutorialList";
// import Post from "../pages/post";
import { UserProvider } from "./providers/user";
import { CourseProvider } from "./providers/Course";

export default function App() {
  /* const authenticated = false;
  let page: React.JSX.Element;

  if (authenticated) page = <Post />;
  else page = <Authentication />; */

  return (
    <UserProvider>
      <CourseProvider>
        <Authentication />
      </CourseProvider>
    </UserProvider>
  );
}
