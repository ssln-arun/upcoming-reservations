# Upcoming Reservations

<br>

## Overview

Upcoming Reservations is a responsive frontend component built with React and Tailwind CSS. It displays a list of restaurant reservations with details such as venue name, date, time, and party size. The interface adapts to both desktop and mobile screens and includes a "Cancel" button that logs the reservation ID.

## Project Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/271258a2-0101-4fbd-bba2-900081a86ac8" alt="Screenshot 1" width="45%" />
  <img src="https://github.com/user-attachments/assets/271258a2-0101-4fbd-bba2-900081a86ac8" alt="Screenshot 2" width="45%" />
</p>

## Tech Stack

- **React** UI library for building components
- **Tailwind CSS** Utility-first CSS framework  
- **JavaScript(ES6+)** Modern JavaScript features 
  
## Features

- Displays a list of upcoming reservations.
- Fully responsive layout for **desktop (1200px)** and **mobile (375px)**.
- Each reservation card includes:
  - Venue Name
  - Date
  - Time
  - Party Size
- A **Cancel** button logs the reservation ID to the console.

---

## Installation

```bash
git clone https://github.com/yourusername/upcoming-reservations.git
cd upcoming-reservations
```
## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```
Open http://localhost:5173/ in your browser.

## How to Use & Test

- Open your browser console (Inspect → Console).
- Click the Cancel button on any reservation card.
- You should see: Cancel reservation: <id>
