import { useState, useCallback, useRef } from 'react';
import useVideoContext from '../useVideoContext/useVideoContext';
import { LogLevels, Track, LocalVideoTrack } from 'twilio-video';
import React from 'react';

interface MediaStreamTrackPublishOptions {
  name?: string;
  priority: Track.Priority;
  logLevel: LogLevels;
}

export default function useScreenShareToggle() {
  const { room, getLocalVideoTrack, onError } = useVideoContext();
  const [isSharing, setIsSharing] = useState(false);
  const stopScreenShareRef = useRef<() => void>(null!);
  const canvas = useRef(document.createElement('canvas'));
  const video = useRef(document.createElement('video'));

  const shareScreen = useCallback(() => {
    getLocalVideoTrack().then((track: LocalVideoTrack) => {
      const stream = new MediaStream([track.mediaStreamTrack.clone()]);
      video.current.hidden = true;
      video.current.srcObject = stream;
      canvas.current.width = 200;
      canvas.current.height = 200;
      var context = canvas.current.getContext('2d');
      if (context === null) {
        return;
      }
      context.drawImage(video.current, 0, 0, 200, 200);
      var data = canvas.current.toDataURL('image/png');
      document.body.append(canvas.current);
    });
  }, [room, onError]);

  const toggleScreenShare = useCallback(() => {
    !isSharing ? shareScreen() : stopScreenShareRef.current();
  }, [isSharing, shareScreen, stopScreenShareRef]);

  return [isSharing, toggleScreenShare] as const;
}
