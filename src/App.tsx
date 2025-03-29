import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import TimePieChart from './components/TimePieChart';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const TimerDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  fontSize: '4rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const StatsDisplay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 20,
  right: 20,
  padding: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: theme.spacing(1),
  color: theme.palette.primary.main,
}));

interface UserStats {
  sessionsCompleted: number;
  coins: number;
  unlockedSkins: string[];
}

const DEFAULT_STATS: UserStats = {
  sessionsCompleted: 0,
  coins: 0,
  unlockedSkins: ['default'],
};

const TIMER_INTERVALS = [15, 30, 60, 90];
const CHIME_EFFECTS = ['bell', 'digital', 'gentle'];

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState(25);
  const [selectedChime, setSelectedChime] = useState('bell');
  const [stats, setStats] = useState<UserStats>(() => {
    const savedStats = localStorage.getItem('pomodoroStats');
    return savedStats ? JSON.parse(savedStats) : DEFAULT_STATS;
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            handleSessionComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    localStorage.setItem('pomodoroStats', JSON.stringify(stats));
  }, [stats]);

  const handleSessionComplete = () => {
    const newStats = {
      ...stats,
      sessionsCompleted: stats.sessionsCompleted + 1,
      coins: stats.coins + selectedInterval,
    };
    setStats(newStats);
    playChime();
  };

  const playChime = () => {
    const audio = new Audio(`/sounds/${selectedChime}.mp3`);
    audio.play().catch(console.error);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setTimeLeft(selectedInterval * 60);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <StatsDisplay>
          <Typography variant="h6">Sessions: {stats.sessionsCompleted}</Typography>
          <Typography variant="h6">Coins: {stats.coins}</Typography>
        </StatsDisplay>

        <TimerDisplay>
          <TimePieChart 
            minutes={Math.floor(timeLeft / 60)} 
            seconds={timeLeft % 60} 
            totalMinutes={selectedInterval}
          />
          <Typography variant="h1">{formatTime(timeLeft)}</Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            {!isRunning ? (
              <Button variant="contained" color="primary" onClick={startTimer}>
                Start
              </Button>
            ) : (
              <Button variant="contained" color="secondary" onClick={stopTimer}>
                Stop
              </Button>
            )}
            <Button variant="outlined" onClick={resetTimer}>
              Reset
            </Button>
          </Box>
        </TimerDisplay>

        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Interval</InputLabel>
            <Select
              value={selectedInterval}
              label="Interval"
              onChange={(e) => setSelectedInterval(Number(e.target.value))}
              disabled={isRunning}
            >
              {TIMER_INTERVALS.map((interval) => (
                <MenuItem key={interval} value={interval}>
                  {interval} min
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Chime</InputLabel>
            <Select
              value={selectedChime}
              label="Chime"
              onChange={(e) => setSelectedChime(e.target.value)}
            >
              {CHIME_EFFECTS.map((chime) => (
                <MenuItem key={chime} value={chime}>
                  {chime}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 