# Pokemon Memory Game

A fun memory card game built with React and Next.js where players test their memory by clicking on Pokemon cards without repeating their choices.

[Play the game here](https://memory-game-toh.vercel.app/)

## How to Play

1. Cards with different Pokemon will be displayed
2. Click on any card to start
3. Try to click on each Pokemon only once
4. Cards shuffle after each click
5. Game resets if you click the same Pokemon twice

## Features

- Dynamic Pokemon cards using PokeAPI
- Score tracking system
- High score persistence
- Responsive design
- Card shuffling mechanics

## Technologies Used

- React
- Next.js 14
- TypeScript
- Pokemon API
- CSS Modules

## Setup & Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Game Logic

- The game maintains two scores: current score and high score
- Cards are shuffled after each successful click
- High score updates when you beat your previous record
- Game resets when clicking the same card twice

## Styling

- Uses Press Start 2P font for retro gaming feel
- Responsive card layout
- Smooth animations for card interactions
