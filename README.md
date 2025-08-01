# Nirog Gyan Frontend

A responsive, user-friendly web application built using modern frontend technologies. The application delivers a clean interface for health-related insights.

---

## 🛠 Tools & Libraries Used

| Tech Stack        | Description                                      |
|-------------------|--------------------------------------------------|
| **React**         | JavaScript library for building UI               |
| **Vite**          | Fast development build tool                      |
| **Tailwind CSS**  | Utility-first CSS framework                      |
| **React Router**  | Declarative routing for React apps               |
| **TypeScript**    | (Optional) For type safety and better tooling    |
| **Axios**         | HTTP client for API communication                |
| **Prettier + ESLint** | Code formatting and linting for consistency |

---

## 🚀 Improvements with More Time

If given more time, here are the features and refinements I would like to implement:

- **Authentication System:** Implement secure login/signup using JWT or OAuth.
- **State Management:** Integrate Redux Toolkit or Zustand for scalable state handling.
- **Dark Mode:** Add theme toggling support for better accessibility.
- **Responsive Dashboard Analytics:** Create visual analytics using libraries like Recharts or Chart.js.
- **Unit & Integration Testing:** Add Jest and React Testing Library for robust testing.
- **Progressive Web App (PWA):** Enable offline access and mobile-first UX.

---

## ⚙️ Challenges Faced & Solutions

### 1. **CORS Issues During API Integration**
- **Challenge:** Encountered CORS policy issues while fetching data from backend APIs.
- **Solution:** Configured proxy in Vite and ensured proper headers on the backend.

### 2. **Component Reusability**
- **Challenge:** Redundant UI components made the codebase less maintainable.
- **Solution:** Refactored repetitive code into reusable components using props and context API.

### 3. **Responsive Layout with Tailwind**
- **Challenge:** Maintaining a consistent UI across devices was initially difficult.
- **Solution:** Utilized Tailwind’s responsive utility classes to ensure mobile-first design.

### 4. **Time Constraints**
- **Challenge:** Limited time to implement advanced features like form validation and role-based access.
- **Solution:** Focused on core functionality and laid groundwork for future enhancements.

---

## 📂 Project Structure

nirog-gyan-frontend/
│
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── assets/
│ ├── App.jsx
│ └── main.jsx
├── .vscode/
│ └── launch.json
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
