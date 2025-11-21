# User Management Application

A professional, clean React + TypeScript application for user management — built for interview and placement evaluation.

## Features

- Fetch and display users from a public API
- Add, edit, and delete users (CRUD, local state)
- Form validation (name required, email format)
- Responsive UI (desktop & mobile)
- Search and filter users by name/email
- Error & loading states
- Component-based architecture
- Modern, subtle design with minimalist styling

## Tech Stack

- React 18
- TypeScript
- Vite
- React Hook Form
- Zod (validation)
- Context API (global state)
- CSS Modules

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/VandanaM1008/react.js-project.git
cd user-management-app


### 2. Install dependencies

npm install


### 3. Run the development server

npm run dev


- Visit `http://localhost:5173/` in your browser

## Usage

- **Add User:** Click "Add New User" and fill the required fields.
- **Edit User:** Click "Edit" on any user row, modify, and save.
- **Delete User:** Click "Delete" and confirm in the popup.
- **Search:** Use the search bar to filter users live by name or email.

**Note:**  
Users are fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users). Add, update, and delete are managed locally in app state.

## Project Structure

src/
├── components/
│ ├── UserTable.tsx
│ ├── UserForm.tsx
│ ├── SearchBar.tsx
│ ├── Modal.tsx
│ ├── ConfirmDialog.tsx
├── context/
│ └── UserContext.tsx
├── types/
│ └── user.ts
├── utils/
│ └── validation.ts
├── App.tsx
├── main.tsx
├── index.css


## Screenshots

![User List Table](screenshot-01.png)

<img width="876" height="894" alt="Screenshot 2025-11-21 at 23 43 01" src="https://github.com/user-attachments/assets/09354acc-d9f2-42c5-b622-1c4d3323c795" />

![Add/Edit Modal](screenshot-02.png)
<img width="421" height="456" alt="Screenshot 2025-11-21 at 23 44 35" src="https://github.com/user-attachments/assets/dba586a0-0297-47cc-bb26-47aa5171292b" />


![Delete Confirmation](screenshot-03.png)
<img width="352" height="166" alt="Screenshot 2025-11-21 at 23 45 02" src="https://github.com/user-attachments/assets/213d228f-d4e9-4f3f-8fb3-ce9eb9f8459b" />


## Troubleshooting

- Ensure Node.js v20.19+ or v22.12+ is installed (check with `node -v`)
- If you see errors, run:
    - `rmdir /s /q node_modules`
    - `del package-lock.json`
    - `npm install`
    - `npm run dev`
- For questions, email or message Vandana M.

**Made for interview/placement assessment. All code is original and structured for clarity and maintainability.**
