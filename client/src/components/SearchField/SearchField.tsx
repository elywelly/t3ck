import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { ticketEvent } from "../../common/ticketEvent";

interface TicketEvent {
  name: string;
  image: string;
  description: string;
  cost: number;
  date: string;
  time: string;
  location: string;
  tickets: number;
  category: string;
}

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const SearchField = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly TicketEvent[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...ticketEvent]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Box
      sx={{
        backgroundColor: "#f3f6fa",
        margin: "10px 24px",
        padding: "0 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "300px",
        borderRadius: "5px",
        flexDirection: "column",
      }}
    >
      <Typography
        textAlign="center"
        sx={{ padding: "20px", fontWeight: "bold", color: "#47A1FF" }}
      >
        Leveraging the power of blockchain and NFT technology to offer a secure,
        transparent, and seamless ticketing experience
      </Typography>
      <Autocomplete
        id="autocomplete"
        sx={{ width: { xs: 200, sm: 400, md: 600 } }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for tickets"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
};

export default SearchField;
