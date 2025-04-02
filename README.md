# Pomodoro Timer

A minimalistic Pomodoro timer application built with React, TypeScript, and Material-UI. This distraction-free timer helps you maintain focus and boost productivity by implementing the Pomodoro Technique with a clean, uncluttered interface.

## Features

- 🎯 Minimalistic, distraction-free interface
- 🕒 Simple timer intervals (15, 30, 60, 90 minutes)
- 🔔 Subtle, non-intrusive sound notifications
- 💡 Essential features only:
  - Track completed sessions
  - Basic session statistics
  - Clean, focused timer display
- 🌙 Dark mode for reduced eye strain
- 📱 Responsive design that stays out of your way

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PomodoroTimer.git
cd pomodoro-timer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. Select your desired timer interval from the dropdown menu
2. Choose your preferred chime sound effect
3. Click "Start" to begin the timer
4. When the timer completes:
   - You'll hear your selected chime sound
   - Your session count will increase
   - You'll earn coins based on the duration of your session
5. Use the "Stop" button to pause the timer
6. Use the "Reset" button to reset the timer to zero

## Project Structure

```
PomodoroTimer/
├── public/
│   └── sounds/          # Sound effect files
├── src/
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── scripts/
│   └── generate-sounds.js  # Sound generation utility
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Technologies Used

- React 18
- TypeScript
- Material-UI
- Vite
- Emotion (for styled components)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Sound effects are generated using the Web Audio API
- Icons and UI components from Material-UI
- Fonts from Google Fonts 