# DPE School Sites Monorepo

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE) 
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/) 
[![Build Status](https://img.shields.io/github/actions/workflow/status/danduke99/dpe/main.yml?branch=main)](https://github.com/danduke99/dpe/actions) 
[![Dependencies](https://img.shields.io/david/danduke99/dpe?color=blue)](https://github.com/danduke99/dpe/network/dependencies) 
[![Last Commit](https://img.shields.io/github/last-commit/danduke99/dpe?color=green)](https://github.com/danduke99/dpe/commits/main)

> Monorepo for managing multiple school websites and applications under a single repository.

---

## Table of Contents

- [Overview](#overview)  
- [Technologies](#technologies)  
- [Folder Structure](#folder-structure)  
- [Getting Started](#getting-started)  
- [Scripts](#scripts)  
- [Workspaces](#workspaces)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Overview

This monorepo contains all school-related web applications and projects for Division Public Education (DPE). It is structured to support multiple applications while sharing dependencies, configurations, and utilities across the workspace.  

Key features:

- Multiple Next.js apps in a single repo  
- Tailwind CSS for styling  
- Shared components and styles  
- Node.js backend for API routes  
- Workspaces for easy dependency management  

---

## Technologies

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** PostgreSQL (local / future cloud integration)  
- **Package Management:** npm workspaces  
- **Other:** Framer Motion for animations, Prisma (optional)  

---

## Folder Structure
├── apps/
│   ├── mlk/           # Dr. Martin Luther King Primary School website
│   └── other-app/     # Additional apps
├── packages/
│   └── ui/            # Shared components, fonts, utilities
├── node_modules/
├── package.json
└── README.md

Getting Started

Clone the repo

git clone https://github.com/danduke99/dpe.git
cd dpe


Install dependencies

npm install


Run a specific app

npm run dev:mlk


Replace mlk with the workspace/app you want to run.

Scripts
Command	Description
npm run dev:mlk	Start MLK app in development mode
npm run build:mlk	Build MLK app for production
npm run start:mlk	Start MLK app in production mode
npm install	Install all dependencies in the workspace
npm run lint	Lint all packages and apps
Workspaces

The monorepo uses npm workspaces for dependency management.

"workspaces": [
  "apps/*",
  "packages/*"
]


Apps: independent applications

Packages: shared components or utilities

Contributing

Fork the repository

Create a feature branch (git checkout -b feature/my-feature)

Commit your changes (git commit -m 'Add feature')

Push to your branch (git push origin feature/my-feature)

Open a Pull Request

License

This project is licensed under the MIT License.
