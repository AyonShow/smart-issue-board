# Smart Issue Board

## Project Overview
Smart Issue Board is a simple issue tracking web application where users can create, view, and manage issues. The project focuses on practical problem-solving and clean Firestore data handling.

## Tech Stack
- Frontend: React (Vite)
- Backend & Database: Firebase Firestore
- Authentication: Firebase Auth (Email & Password)
- Hosting: Vercel

## Why React (Vite)?
React with Vite provides fast development, simple configuration, and a component-based structure which makes it easy to build and maintain the application.

## Features
- User authentication (Signup & Login)
- Create issues with title, description, priority, status, and assignee
- Similar issue detection with user confirmation
- Issue listing with status and priority filters
- Status transition rule (Open → In Progress → Done)
- Deployed and production ready

## Firestore Data Structure
Collection: `issues`

Each document contains:
- title
- description
- priority
- status
- assignedTo
- createdBy
- createdAt

## Similar Issue Handling
While creating an issue, existing issue titles are checked. If a similar title is found, the user receives a warning and can choose whether to continue or cancel.

## Challenges Faced
- Connecting Firebase with React
- Managing Firestore queries
- Handling status transition rules

## Future Improvements
- Role-based access
- Issue comments
- Better similarity detection
- UI enhancements

## Live Demo
(Add your Vercel link here)

## GitHub Repository
(Add your GitHub repo link here)
