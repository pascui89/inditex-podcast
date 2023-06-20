import { Route, Routes } from 'react-router-dom';
import { DetailView, EpisodeView, ErrorPage, MainView } from '../../containers';
import ErrorBoundary from '../../components/ErrorBoundary';

export function Router() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/podcast/:podcastId" element={<DetailView />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<EpisodeView />}
        />
        <Route element={<ErrorPage />} />
      </Routes>
    </ErrorBoundary>
  );
}
