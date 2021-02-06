import { useStore } from '../../store';

import './index.scss';

export default function YoutubeVideo() {
  const [state] = useStore();
  const { videoUrl } = state;

  return (
    <figure className="c-video">
      <iframe
        className="c-video__player"
        title="Youtube video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        src={`${videoUrl}?autoplay=1`}
        allowFullScreen
      >
      </iframe>
    </figure>
  );
}
