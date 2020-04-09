import React from 'react';
import { styled } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Controls from './components/Controls/Controls';
import LocalVideoPreview from './components/LocalVideoPreview/LocalVideoPreview';
import MenuBar from './components/MenuBar/MenuBar';
import ReconnectingNotification from './components/ReconnectingNotification/ReconnectingNotification';
import Room from './components/Room/Room';

import useRoomState from './hooks/useRoomState/useRoomState';

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

  return (
    <Container>
      <Toolbar>
        Workflow for the agent
        <button>Pan Capture</button>
        <button>Aadhaar Capture</button>
        <button>Face Match Capture</button>
      </Toolbar>
      <MenuBar />
      <Main>
        {roomState === 'disconnected' ? <LocalVideoPreview /> : <Room />}
        <Controls />
      </Main>
      <ReconnectingNotification />
    </Container>
  );
}
