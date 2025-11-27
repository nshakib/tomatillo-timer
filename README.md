# Tomatillo Timer

A simple and powerful productivity timer inspired by the Pomodoro Technique, designed to help you stay focused, manage your breaks, and track your progress.

---

## 📌 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Timer Durations](#timer-durations)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Installation](#installation)
  * [Run the Project](#run-the-project)
* [Project Structure](#project-structure)
* [Future Improvements](#future-improvements)
* [License](#license)

---

## 🌿 Overview

**Tomatillo Timer** is a productivity tool built to improve focus using timed work sessions and breaks. It includes customizable study sessions, break timers, optional background music, and a clean user interface for distraction‑free productivity.

---

## ✨ Features

* **Study Timer** – Focused work time (default 25 minutes)
* **Short Break** – Quick refresh break (default 5 minutes)
* **Long Break** – Full recovery break (default 15 minutes)
* **Background Music** – Calm ambient loops to help create a flow state
* **Responsive UI** – Works on desktop and mobile
* **Clean Design** – Minimal interface for maximum productivity

---

## ⏱️ Timer Durations (Defaults)

| Mode        | Duration   |
| ----------- | ---------- |
| Study       | 25 minutes |
| Short Break | 5 minutes  |
| Long Break  | 15 minutes |

> You can adjust these durations inside the settings (future feature).

---

## 🛠️ Tech Stack

* **Frontend:** React
* **Styling:** Tailwind CSS
* **State Management:** useState, useEffect
* **Audio:** YouTube Iframe API

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/your-username/tomatillo-timer.git
cd tomatillo-timer
npm install
```

### Run the Project

```bash
npm run dev
```

The app will run at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
📦 tomatillo-timer
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 utils
 ┃ ┗ 📂 pages
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 vite.config.js
```

---

## 🌱 Future Improvements

These features are planned or recommended for future updates:

### 📝 Notes

* Add a built‑in notes section to write thoughts or tasks during sessions.

### ⚙️ Settings

* Customize study/break durations
* Change background music
* Toggle sound alerts
* Light/Dark mode

### 📊 Progress Tracking

* Track total study hours
* View weekly/monthly graphs
* Session history log

### 🔐 Login System

* User authentication
* Sync settings + progress in cloud
* Multiple devices support

### ✔️ Integrated Todo List

* Add tasks
* Mark tasks as completed
* Attach tasks to study sessions

---

## 📄 License

This project is open-source under the **MIT License**.
