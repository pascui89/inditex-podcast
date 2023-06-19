import * as React from 'react';
import Box from '@mui/material/Box';
import Alert, { AlertColor } from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

interface IProp {
  severity: AlertColor;
  text: string;
}

/**
 * Component for displaying a transition alert message.
 *
 * @param {AlertColor} severity - The severity color of the alert.
 * @param {string} text - The text content of the alert.
 */
export default function TransitionAlerts(props: IProp) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity={props.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, enter: { duration: 0.5 } }}
        >
          {props.text}
        </Alert>
      </Collapse>
    </Box>
  );
}
