# Big Clo Dashboard

A modern, interactive personal dashboard featuring a real-time clock, weather information, task manager, and inspirational quotes. Built with vanilla JavaScript, HTML5, and CSS3.

![Big Clo Dashboard](https://via.placeholder.com/800x400?text=Big+Clo+Dashboard)

## 🌟 Features

### 🕐 Clock Widget
- Real-time digital clock with hours, minutes, and seconds
- Current date display with day of the week
- Auto-updates every second
- 24-hour format with zero-padding

### 🌤️ Weather Widget
- Current weather information for any city worldwide
- Displays temperature in Celsius
- Shows weather description (clear sky, cloudy, etc.)
- City name display
- Error handling for invalid cities
- Powered by OpenWeatherMap API

### ✅ Tasks Widget
- Add and manage daily tasks
- Mark tasks as complete/incomplete with checkboxes
- Delete individual tasks
- Clear all completed tasks at once
- Clear all tasks with confirmation
- **Persistent storage** - tasks saved to browser localStorage
- Tasks remain after page refresh or browser restart
- Visual strikethrough for completed tasks

### 💬 Quote Widget
- Random inspirational quotes on page load
- "New Quote" button to fetch fresh quotes
- Displays quote text and author
- Loading state while fetching
- Powered by Quotable API

### 🎨 Theme Toggle
- Dark/Light theme switcher
- Smooth transitions between themes
- Modern glassmorphism design
- Responsive on all devices

### 🔗 Smooth Navigation
- Active section highlighting in navbar
- Smooth scroll to sections
- Fixed navigation bar

## 🚀 Live Demo

[View Live Demo](#) <!-- Add your deployment link here -->

## 📸 Screenshots

### Dark Theme
![Dark Theme](https://via.placeholder.com/600x400?text=Dark+Theme)

### Light Theme
![Light Theme](https://via.placeholder.com/600x400?text=Light+Theme)

### Mobile View
![Mobile View](https://via.placeholder.com/300x600?text=Mobile+View)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables, Flexbox, and Grid
- **JavaScript (ES6+)** - Vanilla JS with modern features:
  - `async/await` for API calls
  - `localStorage` API for data persistence
  - DOM manipulation
  - Event delegation
  - Template literals
- **APIs**:
  - [OpenWeatherMap API](https://openweathermap.org/api) - Weather data
  - [Quotable API](https://api.quotable.io/) - Random quotes

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- OpenWeatherMap API key (free tier available)

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/big-clo-dashboard.git
   cd big-clo-dashboard
   ```

2. **Get your OpenWeatherMap API key**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API keys section
   - Copy your API key

3. **Configure the API key**
   - Open `js/script.js`
   - Find line with `const API_KEY = "..."`
   - Replace with your API key:
     ```javascript
     const API_KEY = "your_api_key_here";
     ```

4. **Open the project**
   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

5. **Access the dashboard**
   - Open browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
big-clo-dashboard/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet with CSS variables
├── js/
│   └── script.js       # All JavaScript functionality
└── README.md          # This file
```

## 🎯 Usage

### Clock Widget
- Automatically displays current time and date
- No interaction needed - updates every second

### Weather Widget
1. Enter any city name in the input field
2. Click "Get" button or press Enter
3. View current weather information

### Tasks Widget
1. **Add Task**: Type task text and click "Add" or press Enter
2. **Complete Task**: Click the checkbox next to the task
3. **Delete Task**: Click the "×" button
4. **Clear Completed**: Click "Clear completed" to remove all checked tasks
5. **Clear All**: Click "Clear all" to delete everything (with confirmation)

### Quote Widget
- Quote loads automatically on page load
- Click "New Quote" button to fetch a new random quote

### Theme Toggle
- Click the "Toggle" button in the navbar to switch between dark and light themes

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📱 Responsive Design

Fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔒 Privacy & Data

- **Weather searches**: City names are sent to OpenWeatherMap API
- **Tasks**: Stored locally in browser's localStorage (never sent to any server)
- **Quotes**: Fetched from Quotable API (no personal data sent)
- **No cookies or tracking**

## 🐛 Known Issues

- Weather API key needs 10-15 minutes to activate after creation
- Tasks widget requires `required` attribute removed from input for custom validation
- LocalStorage has 5MB limit per domain

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Quotes provided by [Quotable API](https://github.com/lukePeavey/quotable)
- Font inspiration: Poppins & Inter from Google Fonts
- Built with guidance from Claude AI

## 🔮 Future Enhancements

- [ ] Add task categories/tags
- [ ] Task priority levels
- [ ] Dark/light theme auto-switch based on time
- [ ] Multiple city weather comparison
- [ ] Export/import tasks
- [ ] Pomodoro timer widget
- [ ] News widget
- [ ] Calendar integration
- [ ] Task due dates and reminders
- [ ] Drag-and-drop task reordering

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/youssefprogpy/Big-Clo/issues) page
2. Create a new issue with detailed description
3. Contact via email

---

**Made with ❤️ and vanilla JavaScript**
