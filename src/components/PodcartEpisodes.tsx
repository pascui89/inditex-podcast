import { Fragment, useEffect } from 'react';
import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Episode, PodcastDetail } from '../models';
import { millisecondsToMinutesSeconds, toDateFormat } from '../utils';
import { StyledCardContentPaddingNone, StyledCardOverflowAuto, StyledTableCell, StyledTableRow } from './styled';

interface IProp {
  loading: boolean;
  podCastDetail: PodcastDetail | null;
}

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
        <Table className='w-full' aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading &&
              Array.from({ length: 10 }, (_, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell
                    component="th"
                    data-testid="skeleton"
                    scope="row"
                    colSpan={3}
                  >
                    <Skeleton
                      key={`skeleton-${index}`}
                      variant="rectangular"
                      width="100%"
                      height={53}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {!loading &&
              podCastDetail?.results.map(
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
    <StyledCardOverflowAuto>
      <StyledCardContentPaddingNone>
        <StyledCardContentPaddingNone>
          {renderGridTable}
        </StyledCardContentPaddingNone>
      </StyledCardContentPaddingNone>
    </StyledCardOverflowAuto>
  );
}
