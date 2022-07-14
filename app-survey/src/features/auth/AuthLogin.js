import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import jwt from "jwt-decode";

import { useAuth } from "./use-auth";

export const AuthLogin = () => {
  const { login } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem("at");
    token !== null && login(token);
  }, []);

  const [t,setT]=useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiZm9ybSJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJmb3JtIiwieC1oYXN1cmEtdXNlci1pZCI6Inh4eCIsIngtaGFzdXJhLWZvcm0taWQiOiJ4eHgifX0.uPC5oicDRxiqV7o8CbQH7lI3mzFilrwW4Ofz9SWfN8o");
  console.log(t);

  const handleChange = (event ) => {
    setT(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      const decodeToken = jwt(t);
  console.log(decodeToken);
    }, 1000);
    return () => clearTimeout(timer);
  }, [t]);

  


  return (
    <Paper
      component="form"
      onSubmit={(evt) => {
        evt.preventDefault();
        login(evt.target[0].value);
      }}
      sx={{
        p: 5,
        minWidth: 600,
        minHeight: 300,
        backgroundColor: "rgba(196, 253, 241, 1)",
        mt: 20
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4">Survey App</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          type="text"
          size="small"
          name="token"
          placeholder="Invitation token"
          fullWidth
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button type="submit" variant="contained" fullWidth color="primary">
          Login
        </Button>
      </Box>
      <Divider />
      <Button
        onClick={() =>
          login(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiZm9ybSJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJmb3JtIiwieC1oYXN1cmEtc3VydmV5LWlkIjoiMSIsIngtaGFzdXJhLXVzZXItaWQiOiIxIn19.-C1FSlb7-FqVtUeI_lBlrhPAfvP6kUdiy0zosdwUlOo"
          )
        }
        fullWidth
      >
        Login with dev token
      </Button>
    </Paper>
  );
};
