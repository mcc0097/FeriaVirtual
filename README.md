#3D Virtual Job Fair – Web Platform

# 📝 Project Overview

The 3D Virtual Job Fair is a platform designed to connect companies with talent through an interactive 3D environment where candidates can visit virtual booths, learn about companies, access job offers, and stay updated with corporate news.

This document describes the architecture, technologies, and functionalities implemented in the web component of the project, which includes both the frontend and backend systems.

## 🚀 1. Project Objective

The main objective is to provide a web platform that serves:

Companies seeking visibility and potential candidates

Users looking for jobs, company information, or news

A secure and efficient authentication and profile management system

An intuitive experience for platform administrators

The web module acts as a gateway between users and the 3D environment, managing authentication, registration, dashboards, and data storage.

🧩 2. General Architecture

The platform is composed of two core modules:

Frontend: The user interface built with modern web technologies

Backend: A secure API responsible for data management and communication with the database

Both modules interact through HTTP/REST requests over a containerized infrastructure.

## 🎨 3. Frontend
🛠️ Technologies Used

HTML5

CSS3

Next.js (main framework)

JavaScript / TypeScript

Local JWT for browser-side authentication

🎯 Implemented Features
🔐 1. Login System

Allows both users and companies to authenticate using email and password.
The session is maintained via JWT stored in localStorage.

📝 2. User and Company Registration

Two differentiated registration flows:

Users: people who want to apply for jobs or browse information

Companies: organizations participating in the virtual fair with access to a company dashboard

Both flows send data to the backend, where it is stored in the database.

🔑 3. Password Recovery (Forgot Password)

This feature allows users to request password reset instructions via email.
Includes form validation and email input handling.

📊 4. Admin Dashboard

A control panel for system administrators that allows:

User management

Company management

Platform activity overview

🏢 5. Company Dashboard

Dashboard designed for registered companies, enabling them to:

Update corporate information

View their virtual profile within the fair

Manage internal data or publications

## 🏗️ 4. Backend
🛠️ Technologies Used

Node.js

Nest.js (main framework)

PostgreSQL (relational database)

Prisma ORM

Docker Desktop with Docker Compose for container orchestration

🔧 Backend Features
🔐 1. JWT Authentication

Includes:

Registration for both users and companies

Secure login

JWT generation

Token verification for protected endpoints

🗄️ 2. Database Connection

The backend manages all data operations with PostgreSQL through Prisma, including:

Inserting new users and companies

Validating credentials

Updating stored information

Managing relational data based on the project domain

🐳 3. Containerization (Docker)

The project is fully containerized using Docker Compose, which includes:

A container for the Nest.js backend

A container for the PostgreSQL database

Networking and data persistence configuration

This setup simplifies deployment, maintenance, and scalability.

## 🗂️ 5. Project Structure
Frontend
/frontend
  /components
  /pages
  /public
  /styles
  /services
  next.config.js

Backend
/backend
  /src
    /modules
    /auth
    /users
    /companies
  /prisma
    schema.prisma
  docker-compose.yml


# Participants:
- Miguel Ángel Cadena
- Pablo Peña
- Jaime Martín
- Miguel Contreras
- Gonzalo López
