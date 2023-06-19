import { Fragment, useEffect } from 'react';
import {
  Card,
  CardContent,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Episode, PodcastDetail } from '../models';
import { millisecondsToMinutesSeconds, toDateFormat } from '../utils';

interface IProp {
  loading: boolean;
  podCastDetail: PodcastDetail | null;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

/**
 * Component for displaying a list of podcast cards.
 *
 * @param {boolean} loading - Indicates if the component is in a loading state.
 * @param {PodcastDetail | null} podCastDetail - The detailed information about the podcast.
 */
export default function PodcartEpisodes(props: IProp) {
  const { podcastId } = useParams();
  const { podCastDetail, loading } = props;

  useEffect(() => {}, []);

  const renderGridTable = (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {podCastDetail?.results.map(
              (podCastDetail: Episode, index: number) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    <Link
                      to={`/podcast/${podcastId}/episode/${podCastDetail.trackId}`}
                    >
                      {podCastDetail.trackName}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {toDateFormat(podCastDetail.releaseDate)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {millisecondsToMinutesSeconds(
                      podCastDetail.trackTimeMillis
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );

  return (
    <Card
      id="podcardEpisodes"
      style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 300px)' }}
    >
      <CardContent sx={{ textAlign: 'left' }} style={{ margin: 0, padding: 0 }}>
        <CardContent style={{ margin: 0, padding: 0 }}>
          {loading && (
            <Skeleton variant="rectangular" width="100%" height={600} />
          )}
          {!loading && renderGridTable}
        </CardContent>
      </CardContent>
    </Card>
  );
}
