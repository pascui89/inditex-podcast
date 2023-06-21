import {
    CardContent,
    styled,
  } from '@mui/material';

export const StyledCardContent = styled(CardContent)`
    max-width: 100%;
    border-top: 0.1em solid rgba(0, 0, 0, 0.14);
    padding: 0.5em;
    margin-top: 4px;
`;

export const StyledCardContentPaddingNone = styled(CardContent)`
    padding: 0;
    padding-bottom: 0 !important;
`;