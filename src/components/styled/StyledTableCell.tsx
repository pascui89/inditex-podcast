import {
    TableCell,
    styled,
    tableCellClasses,
  } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      '&:hover': {
        textDecoration: 'underline',
      }
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      '&:hover': {
        textDecoration: 'underline',
      }  
    },
  }));