import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Home,
  About,
  Tips,
  NotFound,
  Profile,
  Calendar,
} from "@/pages";
import { RootLayout, TipsLayout } from "@/layout";
import { useUserAuth } from "@/context/UserAuthContext";
import TipsDetails from "@/components/tips/TipsDetails";
import ProtectedRoute from "@/components/auth/ProtectedRoutes";
import Error from "@/components/tips/Error";
import AdminRoute from "../components/auth/AdminRoute";
import Admin from "@/pages/admin/Admin";

import HandleTips from "@/components/admin/handle-tips/HandleTips";
import HandleFaq from "@/components/admin/faq/HandleFaq";

const AppRouter = () => {
  const { user } = useUserAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="tips" element={<Tips />} /> */}
        <Route path="about" element={<About />} />
        <Route path="tips" element={<TipsLayout />} errorElement={<Error />}>
          <Route index element={<Tips />} /> {/** loader={tipsLoader}  */}
          <Route
            path=":id"
            element={<TipsDetails />}
            // loader={tipDetailsLoader}
          />
        </Route>
        {/* Protected Routes for auth users */}
        <Route element={<ProtectedRoute isAuthUser={!!user} />}>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/calendar/:id" element={<Calendar />} />
        </Route>
        {/* Admin only */}
        <Route element={<AdminRoute />}>
          <Route path="admin" element={<Admin />} />
          <Route path="handleTips" element={<HandleTips />} />
          <Route path="handleFaq" element={<HandleFaq />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
