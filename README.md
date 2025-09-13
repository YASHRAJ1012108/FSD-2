# 📚 FSD-2 - Full Stack Development Learning Repository

![JavaScript](https://img.shields.io/badge/JavaScript-97.8%-yellow?style=flat-square&logo=javascript)
![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-orange?style=flat-square&logo=jupyter)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=flat-square&logo=mongodb)

## 🎯 Project Overview

FSD-2 is a comprehensive full-stack development learning repository containing multiple modules, code notebooks, and practical implementations. This repository serves as a educational collection showcasing various web development concepts including React applications, Node.js backend development, data visualization, event handling, module creation, and database integration.

The project demonstrates practical implementation of modern web technologies through organized modules, interactive Jupyter notebooks for data science concepts, and multiple JavaScript exercises covering frontend and backend development paradigms.

## 📁 Repository Structure

```
FSD-2/
├── 📂 CH-3/                    # Chapter 3 exercises and examples
├── 📂 FolderStructure/          # Project organization examples
├── 📂 b4-1444/                 # Backend module with MongoDB integration
│   ├── 📂 backend/              # Server-side implementation
│   │   ├── server.js            # Express server configuration
│   │   ├── task.html            # Frontend interface
│   │   ├── task.js              # Task management logic
│   │   ├── package.json         # Backend dependencies
│   │   └── package-lock.json    # Dependency lock file
│   ├── Example3.js              # JavaScript examples
│   ├── MD1.js - MD8.js         # Module demonstration files
│   ├── package.json             # Module configuration
│   └── package-lock.json        # Dependency management
├── 📂 event/                   # Event handling examples
├── 📂 express/                 # Express.js framework examples
│   ├── 📂 css/                 # Stylesheets
│   ├── 📂 html/                # HTML templates
│   ├── 📂 image/               # Static images
│   └── 📂 js/                  # JavaScript modules
├── 📂 modulecreate/            # Custom module creation examples
├── 📄 .env                     # Environment variables
├── 📄 .gitignore               # Git ignore rules
├── 📄 Alice.zip                # Text processing dataset
├── 📄 E1.js - E4.js           # Exercise implementations
├── 📄 Example3.js              # Advanced JavaScript example
├── 📄 MD1.js - MD8.js         # Module development examples
├── 📄 c1.js, cv.js, v1.js     # Core JavaScript modules
├── 📄 g1.html, g1.js          # GUI examples
├── 📄 index.html               # Main application entry
├── 📄 m1.css, m1.js           # Styling and behavior
├── 📄 om.js, om1.js           # Object-oriented examples
├── 📄 ownmodeule.txt           # Module documentation
├── 📄 p5.ipynb, p6.ipynb      # Jupyter notebooks for data visualization
├── 📄 package.json             # React app configuration
├── 📄 package-lock.json        # NPM lock file
├── 📄 photo.png                # Image asset
├── 📄 server.js                # Main server file
├── 📄 task.html, task.js       # Task management interface
├── 📄 us-states.json           # Geographic data
└── 📄 README.md                # This documentation
```

## 🛠️ Technology Stack

### Frontend Technologies
- **React 19.1.0**: Modern frontend framework with hooks
- **HTML5**: Semantic markup and structure
- **CSS3**: Advanced styling and responsive design
- **JavaScript (ES6+)**: Core programming language
- **Bootstrap**: UI component framework

### Backend Technologies
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data persistence
- **Cross-env**: Environment variable management

### Development Tools
- **NPM**: Package management
- **Jupyter Notebook**: Interactive data analysis
- **Git**: Version control
- **VS Code**: Development environment

### Data Science & Visualization
- **Python**: Data processing and analysis
- **Matplotlib**: Data visualization library
- **Pandas**: Data manipulation
- **NumPy**: Numerical computing
- **WordCloud**: Text visualization
- **PyWaffle**: Chart generation

## 📊 Features & Modules

### 🌐 Web Development
- **React Application**: Full-featured frontend with component architecture
- **Express Server**: RESTful API implementation
- **Database Integration**: MongoDB connectivity and operations
- **Event Handling**: Interactive user interface components
- **Module System**: Custom JavaScript module creation
- **Static File Serving**: Asset management and optimization

### 📈 Data Analysis & Visualization
- **Interactive Notebooks**: Jupyter-based data exploration
- **Matplotlib Charts**: Line plots, area charts, scatter plots
- **Box Plot Analysis**: Statistical data representation
- **Word Cloud Generation**: Text analysis and visualization
- **Waffle Charts**: Proportional data representation
- **Geographic Data**: US states JSON processing

### 🔧 Backend Services
- **Server Configuration**: Express.js setup and middleware
- **Task Management**: CRUD operations and data handling
- **Environment Management**: Configuration and deployment
- **Error Handling**: Robust error management
- **CORS Support**: Cross-origin resource sharing

### 📱 Frontend Components
- **Responsive Design**: Mobile-first approach
- **Interactive Forms**: User input and validation
- **Dynamic Content**: Real-time data updates
- **Image Processing**: Static asset optimization
- **Navigation Systems**: Multi-page application structure

## 🚀 Setup and Installation

### Prerequisites
- **Node.js**: Version 14.0 or higher
- **NPM**: Version 6.0 or higher
- **Python**: Version 3.8+ (for Jupyter notebooks)
- **MongoDB**: Version 4.4+ (for database features)
- **Git**: For version control

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/YASHRAJ1012108/FSD-2.git
cd FSD-2
```

2. **Install React Dependencies**
```bash
npm install
```

3. **Install Backend Dependencies**
```bash
cd b4-1444/backend
npm install
cd ../..
```

4. **Setup Environment Variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. **Install Python Dependencies (for Notebooks)**
```bash
pip install jupyter matplotlib pandas numpy wordcloud pywaffle
```

## 🏃‍♂️ Running the Application

### React Frontend
```bash
# Start React development server (runs on port 3009)
npm start
```

### Backend Server
```bash
# Start Express server
node server.js
# OR from backend directory
cd b4-1444/backend
node server.js
```

### Jupyter Notebooks
```bash
# Launch Jupyter environment
jupyter notebook
# Open p5.ipynb or p6.ipynb for data visualization examples
```

### Individual Modules
```bash
# Run specific JavaScript modules
node MD1.js
node Example3.js
node task.js
```

## 📋 Available Scripts

### React Scripts
- `npm start`: Development server on port 3009
- `npm test`: Run test suite
- `npm run build`: Production build
- `npm run eject`: Eject configuration (one-way)

### Custom Scripts
- `node server.js`: Start Express server
- `node MD*.js`: Run module examples
- `jupyter notebook`: Launch data analysis environment

## 📚 Learning Modules

### Module Development (MD1-MD8)
Progressive JavaScript modules covering:
- **MD1.js**: Basic module structure
- **MD2.js**: Advanced module patterns
- **MD3.js**: Asynchronous operations
- **MD4.js**: Data manipulation
- **MD5.js**: DOM interaction
- **MD6.js**: Event handling
- **MD7.js**: API integration
- **MD8.js**: Database operations

### Exercise Files (E1-E4)
Practical implementations of:
- **E1.js**: Fundamental JavaScript concepts
- **E2.js**: Function programming
- **E3.js**: Object-oriented design
- **E4.js**: Asynchronous programming

### Data Visualization Notebooks
- **p5.ipynb**: Matplotlib fundamentals, area charts, scatter plots
- **p6.ipynb**: Advanced visualization techniques

## 🔗 API Endpoints

### Task Management
- `GET /api/tasks`: Retrieve all tasks
- `POST /api/tasks`: Create new task
- `PUT /api/tasks/:id`: Update existing task
- `DELETE /api/tasks/:id`: Remove task

### Data Services
- `GET /api/states`: US states geographic data
- `GET /api/modules`: Available module information

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### Integration Tests
```bash
npm run test:integration
```

### Manual Testing
1. Start the development server
2. Navigate to http://localhost:3009
3. Test React components and interactions
4. Verify backend API endpoints
5. Run Jupyter notebooks for data analysis

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Server Deployment
1. Build the React application
2. Configure environment variables
3. Start the Express server
4. Setup MongoDB connection
5. Configure domain and SSL

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/YASHRAJ1012108/FSD-2/issues).

### Development Workflow
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author & Credits

**YASHRAJ1012108**
- GitHub Profile: [@YASHRAJ1012108](https://github.com/YASHRAJ1012108)
- Repository: [FSD-2](https://github.com/YASHRAJ1012108/FSD-2)
- Portfolio: Full-stack development projects and learning materials

### Project Statistics
- **Languages**: JavaScript (97.8%), Jupyter Notebook (2.2%)
- **Commits**: 9 total commits
- **Files**: 40+ code files and modules
- **Size**: Multi-module learning repository
- **Last Updated**: July 2025

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

- [ ] Add TypeScript support
- [ ] Implement GraphQL API
- [ ] Add Docker containerization
- [ ] Integrate CI/CD pipeline
- [ ] Add comprehensive test coverage
- [ ] Implement real-time features with WebSocket
- [ ] Add authentication and authorization
- [ ] Create mobile-responsive design
- [ ] Add API documentation with Swagger
- [ ] Implement caching strategies

## 📞 Support

For support and queries:
- Create an issue in the [repository](https://github.com/YASHRAJ1012108/FSD-2/issues)
- Contact the developer through [GitHub](https://github.com/YASHRAJ1012108)

---

**Built with ❤️ by [YASHRAJ1012108](https://github.com/YASHRAJ1012108)**

Copyright © 2025 FSD-2 Learning Repository. All rights reserved.
