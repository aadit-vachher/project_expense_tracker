# project_expense_tracker
frontend--> https://expense-tracker-main-frontend.netlify.app/
backend--> https://project-expense-tracker-new.onrender.com/

proposal--> https://docs.google.com/document/d/1SygqrFTeCn2nF2Xa9NUR8eWalfqb63stcVFB7n4Cwsw/edit?tab=t.9eqafhrdl3k2

1. Project Title
Personal Expense Tracker

2. Problem Statement
Many people struggle to keep track of their daily income and expenses, often leading to poor budgeting and financial stress. The Personal Expense Tracker provides a simple platform to log, categorize, and review transactions, helping users manage their money effectively and make better financial decisions.

3. System Architecture
Frontend: React.js, CSS.
Backend: Node.js with Express.
Database: Postgre SQL managed via Prisma ORM
Authentication: JWT-based login/signup system.
Hosting:
Netlify/Vercel, Render



5. Key Features
Authentication & Authorization
User registration, login, logout with JWT
CRUD Operations
Create, read, update, delete expenses
Create, read, update, delete income records
Manage categories (add, edit, delete)
Frontend Routing
Pages for Home, Login, Register, Dashboard, Expense & Income Forms, Profile,pagination
Expense Management
Categorized expense and income tracking
Date range filtering and search
Dashboard & Reports
Summary of expenses vs income
Visual representation (optional charts in future)

6. Tech Stack
Frontend--> React.js, React Router, Axios, css
Backend--> Node.js, Express.js
Database--> Postgre SQL (via Prisma ORM)
Authentication--> JWT
Hosting--> Vercel (frontend)
Frontend--> React.js, React Router, CSS


8. API Overview

Endpoint
Method
Description
Access
/api/auth/signup
POST
Register a new user
Public
/api/auth/login
POST
User login, returns JWT token
Public
/api/expenses
GET
Get all expenses for logged-in user
Authenticated
/api/expenses
POST
Add a new expense
Authenticated
/api/expenses/:id
PUT
Update expense
Authenticated
/api/expenses/:id
DELETE
Delete expense
Authenticated
/api/incomes
GET
Get all income entries for user
Authenticated
/api/incomes
POST
Add an income entry
Authenticated
/api/incomes/:id
PUT
Update income entry
Authenticated
/api/incomes/:id
DELETE
Delete income entry
Authenticated
/api/categories
GET
List all categories
Authenticated
/api/categories
POST
Add new category
Authenticated
/api/categories/:id
PUT
Update category
Authenticated
/api/categories/:id
DELETE
Remove category
Authenticated


