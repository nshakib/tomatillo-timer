// components/YouTubePlayer.jsx
import { useEffect, useRef } from 'react';

const YouTubePlayer = ({ videoId, isPlaying }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const loadPlayer = () => {
      if (!window.YT) {
        // Load the YouTube IFrame API if not already loaded
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        createPlayer();
      }

      // Wait for API to load
      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    };

    const createPlayer = () => {
      playerRef.current = new window.YT.Player(`player-${videoId}`, {
        videoId,
        events: {
          onReady: () => {
            if (isPlaying) {
              playerRef.current.playVideo();
            } else {
              playerRef.current.pauseVideo();
            }
          }
        },
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          modestbranding: 1
        }
      });
    };

    loadPlayer();

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  useEffect(() => {
    if (playerRef.current && playerRef.current.playVideo) {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  }, [isPlaying]);

  return <div id={`player-${videoId}`} className="w-full h-62 rounded  overflow-hidden" />;
};

export default YouTubePlayer;
