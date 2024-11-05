import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/route.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient(); // Create an instance of QueryClient

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
      <AuthProviders>
        <Toaster></Toaster>
        <QueryClientProvider client={queryClient}>
          {" "}
          {/* Pass the queryClient instance */}
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProviders>
    </div>
  </React.StrictMode>
);
