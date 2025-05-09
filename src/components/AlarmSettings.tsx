import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  width: 300px;
`;

const TimeInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.2rem;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Button = styled.button<{ isActive?: boolean }>`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: ${props => props.isActive ? '#4CAF50' : '#2196F3'};
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${props => props.isActive ? '#45a049' : '#1976D2'};
  }
`;

const AlarmSettings: React.FC = () => {
  const [alarmTime, setAlarmTime] = useState<string>('');
  const [isAlarmSet, setIsAlarmSet] = useState<boolean>(false);
  const [alarmTimeout, setAlarmTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleAlarmSet = () => {
    if (isAlarmSet) {
      // 取消闹钟
      if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        setAlarmTimeout(null);
      }
      setIsAlarmSet(false);
    } else {
      // 设置闹钟
      const [hours, minutes] = alarmTime.split(':');
      const now = new Date();
      const alarmDate = new Date();
      alarmDate.setHours(parseInt(hours));
      alarmDate.setMinutes(parseInt(minutes));
      alarmDate.setSeconds(0);

      if (alarmDate <= now) {
        alarmDate.setDate(alarmDate.getDate() + 1);
      }

      const timeout = setTimeout(() => {
        alert('闹钟响了！');
        setIsAlarmSet(false);
      }, alarmDate.getTime() - now.getTime());

      setAlarmTimeout(timeout);
      setIsAlarmSet(true);
    }
  };

  useEffect(() => {
    return () => {
      if (alarmTimeout) {
        clearTimeout(alarmTimeout);
      }
    };
  }, [alarmTimeout]);

  return (
    <Container>
      <TimeInput
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
        disabled={isAlarmSet}
      />
      <Button
        onClick={handleAlarmSet}
        isActive={isAlarmSet}
        disabled={!alarmTime && !isAlarmSet}
      >
        {isAlarmSet ? '取消闹钟' : '设置闹钟'}
      </Button>
    </Container>
  );
};

export default AlarmSettings; 