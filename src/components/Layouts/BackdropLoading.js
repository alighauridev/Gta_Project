import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const BackdropLoading = ({ open = false }) => {
  const style = {
    color: "#fff",
    Backdrop: "blur(2px)",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  };
  return (
    <>
      <Backdrop sx={style} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
export default BackdropLoading;
