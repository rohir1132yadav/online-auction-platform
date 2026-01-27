import { AdminLayout } from "../layout/AdminLayout";
import { AdminDashboard } from "../Pages/Admin/AdminDashboard";
import { UsersList } from "../Pages/Admin/UsersList";

export const adminRouter = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <UsersList />,
      },
    ],
  },
];