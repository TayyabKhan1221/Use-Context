import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserContextProvider from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";
import { CartContext } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <StrictMode>
      <ThemeContext>
        <CartContext>
          <App />
        </CartContext>
      </ThemeContext>
    </StrictMode>
  </UserContextProvider>
);
