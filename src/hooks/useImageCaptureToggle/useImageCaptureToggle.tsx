import { useCallback, useRef } from 'react';
import useVideoContext from '../useVideoContext/useVideoContext';

export default function useImageCaptureToggle() {
  const { room, onError } = useVideoContext();
  const canvas = useRef(document.createElement('canvas'));
  const captureImage = useCallback(() => {
    document.body.append(canvas.current);
    var context = canvas.current.getContext('2d');
    if (context == null) {
      return;
    }
    var video = document.getElementById('local') as HTMLVideoElement;
    canvas.current.width = video.videoWidth;
    canvas.current.height = video.videoHeight;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    return canvas.current.toDataURL('image/png');
  }, [room, onError]);

  return [captureImage] as const;
}
