# EchoSphere (A social media platform) using Next.js

Welcome to the documentation for the echosphere project built using Next.js. This project aims to replicate the popular features of Discord, offering real-time messaging, voice and video calls, member management, server customization, and more. The application is designed to provide a seamless and intuitive user experience while maintaining a professional and modern UI.

## Table of Contents

- [Demo](#demo)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Demo

Check out the live demo of the project [here](https://personal-discord-production.up.railway.app/).

## Key Features

- **Real-time Messaging**: Utilizing Socket.io, users can engage in real-time text conversations.
- **Attachments**: Users can send attachments as messages using the UploadThing library.
- **Message Management**: Users can edit and delete messages in real time, visible to all users.
- **Voice and Video Channels**: Create and join text, audio, and video call channels.
- **1:1 Conversations**: Members can engage in private one-on-one conversations.
- **1:1 Video Calls**: Members can initiate video calls with each other.
- **Member Management**: Admins have the ability to manage members, including kicking and role assignments.
- **Invite System**: Generate unique invite links for server invites.
- **Infinite Loading**: Messages load in batches of 10 for efficient loading using @tanstack/query.
- **Server Customization**: Users can create and customize their servers.
- **UI and Responsiveness**: The UI is designed using TailwindCSS and ShadcnUI, ensuring a beautiful and responsive design.
- **Light and Dark Mode**: Users can switch between light and dark modes according to their preference.
- **Websocket Fallback**: In case of WebSocket issues, the application gracefully falls back to polling with alerts.
- **ORM and Database**: Utilizes Prisma as the ORM and database as MongoDb.
- **Authentication**: User authentication is handled using Clerk.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm
- Clerk API keys
- Other relevant API keys (if required)

### Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`

### Configuration

1. Fill in the required configuration values in the `.env` file, such as API keys, database connection details, etc.

## Usage

1. Run the development server: `npm run dev`
2. Access the application in your browser at `http://localhost:3000`.

## Technologies Used

- Next.js
- Socket.io
- UploadThing
- Prisma
- MySQL
- Clerk
- TailwindCSS
- ShadcnUI
- @tanstack/query

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request describing your changes.


## Deploy on Vercel or Railway

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
