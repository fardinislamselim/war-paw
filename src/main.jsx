import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider.jsx";
import Loading from "./components/Loading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode className="bg-base-100">
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      ></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
