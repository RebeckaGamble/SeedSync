import "./index.css";
import { ThemeProvider } from "./components/navbar/ThemeProvider";
import { DialogProvider } from "./context/DialogContext";
import { UserAuthProvider } from "./context/UserAuthContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <UserAuthProvider>
        <DialogProvider>
          <AppRouter />
        </DialogProvider>
      </UserAuthProvider>
    </ThemeProvider>
  );
}

export default App;
