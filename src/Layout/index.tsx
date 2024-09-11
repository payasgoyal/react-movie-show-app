import { Box } from "@mui/material";
import { ReactNode } from "react";
import React from "react";
import SideBar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#10141F",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <SideBar />
      <Box
        sx={{
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default Layout;
