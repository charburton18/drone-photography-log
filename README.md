# Project Overview

Welcome to Drone Photography Log! A fullstack web application providing organized drone flight data such as images taken, altitude, and battery life. Users can easily find information on their latest drone's flights. 

[View this repo live](https://drone-photography-log-frontend.onrender.com/)

## Project Planning

View how the project was planned through the [Google Planning Doc](https://docs.google.com/document/d/1z8WfwRlrczTnvaDykFaJUrmUjvzvVBWktauOba8u2zc/edit?usp=sharing).

# Tech Stack

This project makes use of:

- Vite (`react-ts` template)
- Express

# Environment Setup

This repo has two servers, a frontend and a backend. The backend serves drone data to the frontend.

> [!IMPORTANT]
> Requires Node v20.18.0

1. Duplicate `.env.sample` into `.env`
2. Start the backend server: `node server.cjs`
3. Start the frontend server: `npm run dev`
