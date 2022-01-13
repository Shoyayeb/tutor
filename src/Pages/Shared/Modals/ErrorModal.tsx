import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";
import useAuth from '../../../Hooks/useAuth';
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ErrorModal = (props:any) => {
  const {setError} = useAuth();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setError("");
  };
  console.log(props.error);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "red" }}
          >
            {props.error}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ErrorModal;
