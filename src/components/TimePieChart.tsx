import React from 'react';
import { styled } from '@mui/material/styles';

const ChartContainer = styled('div')(({ theme }) => ({
  width: '200px',
  height: '200px',
  margin: '1rem auto',
  position: 'relative',
  color: theme.palette.primary.main,
}));

interface TimePieChartProps {
  minutes: number;
  seconds: number;
  totalMinutes: number;
}

const TimePieChart: React.FC<TimePieChartProps> = ({ minutes, seconds, totalMinutes }) => {
  const totalSeconds = totalMinutes * 60;
  const remainingSeconds = minutes * 60 + seconds;
  const percentage = (remainingSeconds / totalSeconds) * 100;

  // Calculate the end point of the arc
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <ChartContainer>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
        />
        
        {/* Progress arc */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 100 100)"
          style={{
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
        />

        {/* Center text */}
        <text
          x="100"
          y="100"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="currentColor"
          fontSize="24"
          fontWeight="bold"
        >
          {Math.ceil(percentage)}%
        </text>
      </svg>
    </ChartContainer>
  );
};

export default TimePieChart; 