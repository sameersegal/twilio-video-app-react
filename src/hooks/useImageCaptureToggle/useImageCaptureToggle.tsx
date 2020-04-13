import { useCallback, useRef } from 'react';
import useVideoContext from '../useVideoContext/useVideoContext';
import requestOcr from '../../ocr/ocr';

export default function useImageCaptureToggle() {
  const { room, onError } = useVideoContext();
  //const canvas = useRef(document.createElement('canvas'));
  const captureImage = useCallback(() => {
    const canvas = document.getElementById('imageCapturePreview') as HTMLCanvasElement;
    const ocrResponse = document.getElementById('ocrResponse') as HTMLHeadingElement;
    var context = canvas.getContext('2d');
    if (context == null) {
      return;
    }
    var video = document.getElementById('local') as HTMLVideoElement;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    canvas.toBlob(blob => {
      if (blob == null) {
        return;
      }
      const file = new File([blob], 'kyc_image', { type: 'image/png' });
      var ocrformData: FormData = new FormData();
      ocrformData.append('pan', file);
      requestOcr(ocrformData).then(ocrData => {
        ocrResponse.innerText = ocrData;
      });
    }, 'image/png');
  }, []);

  return [captureImage] as const;
}
