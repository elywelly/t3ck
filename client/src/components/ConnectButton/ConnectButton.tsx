import { Alert, Box, Button, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";

export default function ConnectButton() {
  const { connectors, connect, error } = useConnect();
  const { isConnected } = useAccount();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (error) setOpen(true);
  }, [error]);

  const errorMessage = error?.message.replace("Connector", "Wallet");
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={{ margin: { xs: "10px", md: "0" } }}>
      {connectors.map((connector) => (
        <Button
          variant="contained"
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {isConnected ? connector.name : "Connect Wallet"}
        </Button>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {errorMessage}.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
