import {
    Typography,
    styled,
  } from '@mui/material';

export const StyledTypography = styled(Typography)`
    display: flex;
    font-family: monospace;
    font-weight: 700;
    letter-spacing: 0.3rem;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    margin-left: 16px;

    &:hover {
    color: #ff0000; /* Cambia el color de resaltado al pasar el ratón */
    }

    &::selection {
    background-color: #ff0000; /* Cambia el color de fondo de la selección */
    color: #ffffff; /* Cambia el color del texto de la selección */
}`;