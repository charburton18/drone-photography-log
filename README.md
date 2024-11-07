# Project Overview

Welcome to Drone Photography Log! A fullstack web application providing organized drone flight data such as images taken, altitude, and battery life. Users can easily find information on their latest drone's flights. [View our website]()

## Project Planning

View how the project was planned through the [Google Planning Doc](https://docs.google.com/document/d/1z8WfwRlrczTnvaDykFaJUrmUjvzvVBWktauOba8u2zc/edit?usp=sharing).

# Tech Stack

This project makes use of:

- HTML/CSS/TypeScript
- React
- Vite.js

# Environment Setup

If you would like to have a copy of Drone Photography Log on your local computer to run in your IDE and experiment with, follow these steps:

1. Create a clone of the repository https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
2. Download node.js (version 20.18.0) if you do not already have it installed https://nodejs.org/en/download/package-manager
3. In your terminal, navigate to the root file of the repo and run the command npm install
4. To run the code on your local web browser, use the command `npm run dev`

## Project Requirements

### Requirements

#### Frontend:							
-  Preferred: Angular (extra credit for using TypeScript)					
-  Fallback: Use a frontend framework you are comfortable with (React, Vue, etc.).	
-  Build a clean, responsive UI that allows users to input and receive information.
-  Display the drone data provided on the page in a simple table or card format.
-  Input box for user queries (e.g., “What is the altitude of the second image?” or “What is the battery level of the drone during the last image?”).
-  Display the AI response or the mock response. 	

#### API:
-  Preferred: Python (e.g., Flask or FastAPI).
-  Fallback: Use Node.js or another language if you are not familiar with Python.
-  The backend should
    - Receive a user query.		
    - Use an AI service (Gemini, OpenAI, Anthropic) to interpret the question and retrieve the relevant data.	
    - If AI service integration is not possible in the allotted time, mock the response with some minimal logic and return it to the front end.

#### AI Integration (Optional but encouraged):
- Integrate with Gemini, OpenAI, or Anthropic to handle natural language queries.
- If AI integration is not feasible, provide a mock response.	

#### Optional Bonus:
- Use TypeScript if working with Angular or another framework that supports it.
- Add a feature that allows sorting or filtering the drone data table based on user-selected criteria.
- Implement basic unit tests.

#### Instructions:
- Provide clear instructions on how to run both the frontend and backend.
- Ensure that the app can be run locally with minimal setup

### Evaluation Criteria:					 						
- Frontend: Clean UI/UX, input handling, and responsiveness.		
- Backend: Clean API design, AI (or mock) integration, and ability to answer user queries accurately.
- Overall: Code clarity, structure.

#### Recommended Dataset:
- To make this realistic, you can use the provided dataset about a drone flight as input to the LLM. Each item represents an image captured.
