import React from 'react';
import { styled } from '@material-ui/core/styles';

import Controls from './components/Controls/Controls';
import LocalVideoPreview from './components/LocalVideoPreview/LocalVideoPreview';
import MenuBar from './components/MenuBar/MenuBar';
import ReconnectingNotification from './components/ReconnectingNotification/ReconnectingNotification';
import Room from './components/Room/Room';

import useRoomState from './hooks/useRoomState/useRoomState';
import { ExtendButtonBase, FabTypeMap } from '@material-ui/core';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const Main = styled('main')({
  height: '100%',
  position: 'relative',
});
export default function App() {
  const roomState = useRoomState();
  //const screenCaptureButton = document.getElementById('imageCapture');
  // window.addEventListener('message', (e)=>{
  //   if(e.data=='captureScreen'){
  //     console.log('it works');
  //     screenCaptureButton?.click();
  //   }
  // });
  return (
    <Container>
      <MenuBar />
      <Main>
        {roomState === 'disconnected' ? <LocalVideoPreview /> : <Room />}
        <Controls />
        <canvas id="imageCapturePreview" height="50%" width="50%"></canvas>
        <h3 id="ocrResponse"></h3>
      </Main>
      <ReconnectingNotification />
    </Container>
  );
}
