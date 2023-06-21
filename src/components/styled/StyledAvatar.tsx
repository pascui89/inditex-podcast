import {
    Avatar,
    styled,
  } from '@mui/material';

export const StyledAvatar = styled(Avatar)`
  width: 90px;
  height: 90px;

  @media (max-width: 768px) {
    display: none;
  }
`;
