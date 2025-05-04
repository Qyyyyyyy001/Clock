import React from 'react';
import styled from 'styled-components';
import Clock from './components/Clock';
import AlarmSettings from './components/AlarmSettings';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <Clock />
      <AlarmSettings />
    </AppContainer>
  );
}

export default App; 