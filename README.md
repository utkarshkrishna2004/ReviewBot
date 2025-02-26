# ReviewBot: AI-Powered Code Reviewer 🤖

ReviewBot is a **full-stack web application** that leverages **Google Gemini AI** to provide instant, AI-powered code reviews. Designed for developers, it analyzes code snippets and delivers actionable feedback to improve code quality, performance, and maintainability.

---

## Features ✨

- **Code Editor**: Write or paste your code into the built-in editor.
- **AI-Powered Reviews**: Get instant feedback on your code using **Google Gemini AI**.
- **Markdown Output**: Review results are displayed in a clean, readable Markdown format.
- **Dark Mode**: Sleek, dark-themed UI for a comfortable coding experience.

---

## Technologies Used 🛠️

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Simple Code Editor**: A lightweight code editor component.
- **React Markdown**: A Markdown renderer for displaying review results.

### Backend
- **Node.js**: A JavaScript runtime for building the backend.
- **Express**: A web framework for Node.js.
- **Google Gemini AI**: A powerful AI model for generating code reviews.

---

## How It Works 🚀

1. **Write Code**: Enter your code in the built-in editor.
2. **Get Review**: Click the "Review Code" button to send your code to the backend.
3. **AI Analysis**: The backend uses **Google Gemini AI** to analyze your code and generate a review.
4. **Display Results**: The review is displayed in Markdown format in the Review Output section.

---

## Screenshots 📸

### Code Editor - 1
![Code Editor](https://res.cloudinary.com/dt686xyud/image/upload/v1740597824/Screenshot_from_2025-02-27_00-51-55_jx7saa.png)

### Review Output - 1
![Review Output](https://res.cloudinary.com/dt686xyud/image/upload/v1740597870/Screenshot_from_2025-02-27_00-54-07_jsdk8l.png)

### Code Editor - 2
![Dark Mode](https://res.cloudinary.com/dt686xyud/image/upload/v1740598219/Screenshot_from_2025-02-27_00-59-44_lwoeug.png)

### Review Output - 2
![Additional Screenshot](https://res.cloudinary.com/dt686xyud/image/upload/v1740598231/Screenshot_from_2025-02-27_00-59-58_gnjo3p.png)

---

## Installation 🚀

### Prerequisites
- **Node.js** (v16 or later)
- **npm** or **yarn**
- **Google Gemini API Key** (required for AI-powered reviews)

### Setup

#### 1. Clone the repository
```sh
git clone https://github.com/utkarshkrishna2004/ReviewBot.git
cd ReviewBot
```

#### 2. Set up the backend
```sh
cd backend
npm install  # or yarn install
```

- Create a `.env` file inside the `backend` directory and add your **Google Gemini API Key**:
  ```sh
  PORT=your_port_number
  GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key_here
  ```

- Start the backend server:
  ```sh
  npm run dev  # or yarn dev
  ```

#### 3. Set up the frontend
```sh
cd ../frontend
npm install  # or yarn install
npm run dev  # or yarn dev
```

The application should now be running locally at `http://localhost:5173`.

---





