import React from "react";
import { Helmet } from "react-helmet-async";

import { Box } from "@mui/material";

import Account from "../../sections/user/Account";

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Teams | sapthapadhi </title>
      </Helmet>
      <>
        <Box sx={{ height: "65vh", width: "100%" }}>
          <Account />
        </Box>
      </>
    </>
  );
}
