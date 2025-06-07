# BDPADrive

A Node.js Express application with EJS templating engine that simulates a cloud storage service.

## Features

- Express.js backend with EJS templating
- RESTful API endpoints for file operations
- Responsive design
- MVC architecture

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/BDPADrive.git
   cd BDPADrive
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   NODE_ENV=development
   ```

## Running the Application

Start the development server:
```
npm run dev
```

For production:
```
npm start
```

The application will be available at http://localhost:3000

## Project Structure

```
BDPADrive/
├── app.js                  # Main application entry point
├── controllers/            # Route controllers
├── middleware/             # Custom middleware
├── models/                 # Data models
├── public/                 # Static assets
│   ├── css/
│   └── js/
├── routes/                 # Route definitions
├── views/                  # EJS templates
│   ├── partials/
│   └── ...
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## API Endpoints

- `GET /api/status` - Get server status
- `GET /api/files` - Get all files
- `POST /api/files` - Upload a new file

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

ISC