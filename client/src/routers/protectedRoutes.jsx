import Error from "../Error";
import { ViewAuction } from "../Pages/ViewAuction";
import { MainLayout } from "../layout/MainLayout";
import { AuctionList } from "../Pages/Auction";
import { CreateAuction } from "../Pages/CreateAuction";
import { MyAuction } from "../Pages/MyAuction";
import Profile from "../Pages/Profile";
import Privacy from "../Pages/Privacy";

export const protectedRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "auction",
        element: <AuctionList />,
        errorElement: <Error />,
      },
      {
        path: "myauction",
        element: <MyAuction />,
        errorElement: <Error />,
      },
      {
        path: "create",
        element: <CreateAuction />,
        errorElement: <Error />,
      },
      {
        path: "auction/:id",
        element: <ViewAuction />,
        errorElement: <Error />,
      },

      {
        path: "profile",
        element: <Profile />,
        errorElement: <Error />,
      },
      {
        path: "privacy",
        element: <Privacy />,
        errorElement: <Error />,
      },
    ],
  },
];
