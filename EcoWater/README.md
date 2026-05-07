# EcoWater

A responsive web app for monitoring plant soil humidity using Arduino sensors and analyzing plant water needs with AI.

## Features

- User login and registration
- Dashboard to view monitored plants
- Analyze plant images to identify and calculate water requirements
- Real-time soil humidity monitoring
- Watering counter

## Setup

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Open http://localhost:5173

## Technologies

- React
- TypeScript
- React Router
- Vite

## Responsive Design

The app is designed to work on mobile, tablet, and desktop devices.

## Notes

- For the AI analysis, this is a mock implementation. In a real app, integrate with a plant identification API like Plant.id.
- For sensor data, connect to Arduino via a backend API to fetch real humidity data.