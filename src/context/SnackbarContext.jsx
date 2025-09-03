import { createContext, useContext, useState } from "react";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

const SnackbarContext = createContext({});

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showHideSnackbar(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }

  return (
    <SnackbarContext.Provider value={{ showHideSnackbar }}>
      {/* <Button onClick={showHideToast}>Grow Transition</Button> */}
      <Snackbar
        open={open}
        message={message}
        sx={{
          "& .MuiSnackbarContent-root": { backgroundColor: "primary.main" },
        }}
      />
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
