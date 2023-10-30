import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Footer from "./Footer.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider className="bg-background text-foreground dark flex flex-col justify-between">
      <Nav />
      <Header />
      <App />
      <Footer />
    </NextUIProvider>
  </React.StrictMode>,
);
