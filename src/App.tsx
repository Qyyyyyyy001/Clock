import React from 'react';
import styled from 'styled-components';
import Clock from './components/Clock';
import AlarmSettings from './components/AlarmSettings';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Title>简单闹钟</Title>
      <Clock />
      <AlarmSettings />
    </AppContainer>
  );
}

export default App; 