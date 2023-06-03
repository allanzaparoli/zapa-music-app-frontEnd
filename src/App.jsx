import { Router } from 'routes';
import { Player } from 'components';
import { useSelector } from 'react-redux';
import 'styles/global.css';

export function App() {
  const { currentVideoId } = useSelector((state) => state);

  return (
    <>
      <Router />
      <Player
        videoDetails={currentVideoId}
        width={0}
        height={0}
      />
    </>
  );
}
