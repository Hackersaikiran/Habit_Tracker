# 📋 Habit Tracker

A responsive, interactive web-based habit tracking application that helps you monitor and maintain your daily habits with an intuitive calendar interface.

## 📸 Preview

![Habit Tracker Dashboard](requriement/Screenshot%202026-01-30%20104944.png)

## ✨ Features

- **📅 Dynamic Calendar View** - Switch between different months and years seamlessly
- **16 Daily Habits** - Track up to 16 different habits simultaneously
- **✅ Interactive Grid** - Click any day to mark habits as completed or missed
- **📊 Progress Analytics** - View daily completion percentages and overall habit statistics
- **📈 Visual Feedback** - Striped pattern for completed habits, "0" indicator for missed days
- **🎯 Goal Tracking** - Monitor completion goals and percentage achievements
- **📱 Responsive Design** - Consistent layout across different screen sizes
- **⚡ Real-time Updates** - Instant calculation of statistics when habits are toggled

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with CSS variables for responsive design
- **JavaScript (Vanilla)** - Dynamic calendar generation and habit tracking logic
- **Git** - Version control and branch management

## 📦 Project Structure

```
Habit_Tracker/
├── index.html          # Main HTML file with layout structure
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript logic for calendar and habit tracking
├── README.md           # Project documentation
└── requriement/        # Assets and screenshots
```

## 🚀 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hackersaikiran/Habit_Tracker.git
   cd Habit_Tracker
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - No dependencies or build process required!

### Usage

1. **Select Month & Year**
   - Use the dropdown selectors on the right side to choose a month and year
   - Calendar updates automatically

2. **Track Habits**
   - Click any cell in the grid to toggle between:
     - ✅ **Completed** (striped green pattern)
     - ❌ **Missed** (white background with "0")

3. **View Statistics**
   - **Daily Progress** - Completion percentage for each day (top section)
   - **Progress Panel** - Habit statistics with:
     - **Goal** - Total days available
     - **Percentage** - Completion percentage with visual bar
     - **Count** - Completed vs Total days

4. **Month Navigation**
   - Supports years 2024-2028
   - All 12 months available for selection

## 📊 Dashboard Components

### Left Sidebar - Daily Habits
Lists all 16 trackable habits:
1. Wake up at 6AM
2. Drink Water (500ml)
3. Shopping (once 500)
4. Hanging 2min
5. Cold shower
6. Have Breakfast
7. Coding (3hrs)
8. Prayer (2hrs)
9. Have Lunch
10. Skipping rope (500)
11. Pushups / Situps (20)
12. Screen Time <90mins
13. Eat fruits and vegetables daily
14. Screen time before bed <10min
15. Tidy up your space for 5-10 minutes
16. Drinking water (3L)

### Center - Calendar Grid
- **Week Sections** - Organized by weeks with clear labels
- **Date Numbers** - Shows calendar days 1-31
- **Habit Cells** - Interactive cells for each habit-day combination
- **Daily Stats** - Completion percentage for each day

### Right Sidebar - Progress Panel
- **Month/Year Selectors** - Control calendar display
- **Habit Progress Rows** - Shows:
  - Days in month (GOAL)
  - Completion percentage
  - Count of completed days

## 🔧 Key Features Explained

### Dynamic Calendar Rendering
- Automatically calculates days in each month
- Handles different month lengths (28-31 days)
- Supports leap years correctly

### Habit Data Persistence
- Data is stored in browser memory during session
- Organized by month and year for easy navigation
- 16 habits × 31 days maximum storage per month

### Progress Calculation
- Real-time percentage calculation
- Visual progress bars for quick assessment
- Automatic updates when habits are toggled

## 📝 Branches

- **main** - Production-ready stable version
- **develop** - Active development branch
- **backup** - Safety backup of working version

## 🔄 Version History

**Current Version:** 1.0.0

### Latest Changes
- Clean initial state on application load
- Fixed clickable cells for all valid calendar dates
- Dynamic month/year selection functionality
- Responsive layout with CSS variables

## 📄 License

This project is open source and available for personal use and modifications.

## 👤 Author

**Hackersaikiran**

## 🤝 Contributing

Feel free to fork this repository and submit pull requests with improvements!

## 📝 Notes

- No external dependencies required
- Pure HTML, CSS, and JavaScript
- Works in all modern browsers
- Mobile-friendly responsive design
- Data is stored in browser session (no database backend)

## 🎯 Future Enhancements

- [ ] Local storage persistence
- [ ] Export/Import data functionality
- [ ] Custom habit creation
- [ ] Habit categories
- [ ] Statistics dashboard
- [ ] Mobile app version
- [ ] Dark mode theme

---

**Last Updated:** January 30, 2026

For more information or issues, please visit the [GitHub repository](https://github.com/Hackersaikiran/Habit_Tracker)
