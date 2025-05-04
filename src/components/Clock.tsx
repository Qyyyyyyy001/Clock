import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
`;

const TimeDisplay = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  font-family: monospace;
`;

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <ClockContainer>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
    </ClockContainer>
  );
};

export default Clock; 