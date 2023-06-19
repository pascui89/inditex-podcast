import { Route, Routes } from 'react-router-dom';
import { DetailView, EpisodeView, ErrorPage, MainView } from '../../containers';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/podcast/:podcastId" element={<DetailView />} />
      <Route
        path="/podcast/:podcastId/episode/:episodeId"
        element={<EpisodeView />}
      />
      <Route element={<ErrorPage />} />
    </Routes>
  );
}
