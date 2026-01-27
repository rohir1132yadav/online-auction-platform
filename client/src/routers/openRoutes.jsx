import Error from "../Error";
import { OpenLayout } from "../layout/OpenLayout";
import {About} from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Landing } from "../Pages/Landing";
import AcceptableUsePolicy from "../Pages/legal/AcceptableUsePolicy";
import CodeOfConduct from "../Pages/legal/CodeOfConduct";
import DMCAPolicy from "../Pages/legal/DMCAPolicy";
import Legal from "../Pages/legal/Legal";
import PrivacyPolicy from "../Pages/legal/PrivacyPolicy";
import TermsOfService from "../Pages/legal/TermsOfService";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export const openRoutes = [
  {
    path: "/",
    element: <OpenLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "Legal",
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Legal />,
            errorElement: <Error />,
          },
          {
            path: "terms-of-service",
            element: <TermsOfService />,
            errorElement: <Error />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
            errorElement: <Error />,
          },
          {
            path: "dmca",
            element: <DMCAPolicy />,
            errorElement: <Error />,
          },
          {
            path: "code-of-conduct",
            element: <CodeOfConduct />,
            errorElement: <Error />,
          },
          {
            path: "acceptable-use-policy",
            element: <AcceptableUsePolicy />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
];
