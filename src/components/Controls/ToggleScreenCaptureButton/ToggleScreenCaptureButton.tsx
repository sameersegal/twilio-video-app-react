import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import ImageCapture from '@material-ui/icons/AddAPhoto';
import StopScreenShare from '@material-ui/icons/AddAPhotoOutlined';
import Tooltip from '@material-ui/core/Tooltip';

import useImageCaptureToggle from '../../../hooks/useImageCaptureToggle/useImageCaptureToggle';
import useScreenShareParticipant from '../../../hooks/useScreenShareParticipant/useScreenShareParticipant';
import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';

export const SCREEN_CAPTURE_TEXT = 'Capture Photo';
export const STOP_SCREEN_CAPTURE_TEXT = 'Stop Capturing Photo';
export const CAPTURE_IN_PROGRESS_TEXT = 'Cannot capture photo when another user is sharing';
export const CAPTURE_NOT_SUPPORTED_TEXT = 'Capture photo is not supported with this browser';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
      '&[disabled]': {
        color: 'rgba(225, 225, 225, 0.8)',
        backgroundColor: 'rgba(175, 175, 175, 0.6);',
      },
    },
  })
);

export default function ToggleScreenShareButton(props: { disabled?: boolean }) {
  const classes = useStyles();
  const [captureImage] = useImageCaptureToggle();
  const screenShareParticipant = useScreenShareParticipant();
  const { room } = useVideoContext();
  const disableScreenShareButton = screenShareParticipant && screenShareParticipant !== room.localParticipant;
  const isScreenShareSupported = navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia;
  const isDisabled = props.disabled || disableScreenShareButton || !isScreenShareSupported;

  let tooltipMessage = SCREEN_CAPTURE_TEXT;

  return (
    <Tooltip
      title={tooltipMessage}
      placement="top"
      PopperProps={{ disablePortal: true }}
      style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
    >
      <div>
        {/* The div element is needed because a disabled button will not emit hover events and we want to display
          a tooltip when screen sharing is disabled */}
        <Fab className={classes.fab} onClick={captureImage} disabled={isDisabled}>
          <ImageCapture />
        </Fab>
      </div>
    </Tooltip>
  );
}
