# Pomodoro Timer

A modern, feature-rich Pomodoro timer application built with React, TypeScript, and Material-UI. This application helps you stay focused and productive by implementing the Pomodoro Technique with gamification elements.

## Features

- 🕒 Customizable timer intervals (15, 30, 60, 90 minutes)
- 🔔 Multiple chime sound effects to choose from
- 🎮 Gamification system:
  - Track completed sessions
  - Earn coins for completed sessions
  - Unlock different app skins
- 💾 Local storage to persist your progress
- 🌙 Dark mode interface
- 📱 Responsive design for all screen sizes

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PomodoroTimer.git
cd PomodoroTimer
```

2. Install dependencies:
```bash
npm install
```

3. Add sound effects:
   - Create a `public/sounds` directory if it doesn't exist
   - Add the following sound files:
     - `bell.mp3`
     - `digital.mp3`
     - `gentle.mp3`

4. Start the development server:
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