# 📋 Habit Tracker

A responsive, interactive web-based habit tracking application that helps you monitor and maintain your daily habits with an intuitive calendar interface.

## 📸 Preview

![Habit Tracker Dashboard](requriement/Screenshot%202026-02-02%20204907.png)

## ✨ Features

- **📅 Dynamic Calendar View** - Switch between different months and years seamlessly
- **✏️ Customizable Habits** - Add, edit, delete, and reorder your own habits based on priority
- **📊 Priority Ordering** - Drag-and-drop to reorder habits or use up/down buttons
- **✅ Interactive Grid** - Click any day to mark habits as completed or missed
- **💾 Data Persistence** - All data, habits, and settings saved to localStorage
- **💬 Motivational Quotes** - New inspirational quote on every page visit
- **📊 Progress Analytics** - View daily completion percentages and overall habit statistics
- **📈 Visual Feedback** - Color-coded cells for completed habits, indicators for missed days
- **🎯 Goal Tracking** - Monitor completion goals and percentage achievements
- **📱 Responsive Design** - Consistent layout across different screen sizes
- **⚡ Real-time Updates** - Instant calculation of statistics when habits are toggled
- **🔄 Session Memory** - Your selected month/year persists across page refreshes

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

1. **Manage Your Habits**
   - **Add Habit** - Type in the input field and click "+ ADD" or press Enter
   - **Edit Habit** - Click on any habit name to edit it
   - **Delete Habit** - Hover and click the × button to remove (with confirmation)
   - **Reorder Habits** - Drag habits by the handle (⋮⋮) or use ↑/↓ buttons to set priority

2. **Select Month & Year**
   - Use the dropdown selectors on the right side to choose a month and year
   - Your selection is saved and persists across page refreshes

3. **Track Habits**
   - Click any cell in the grid to toggle between:
     - ✅ **Completed** (purple/blue striped pattern)
     - ❌ **Missed** (white background with "0")
   - Changes are automatically saved to localStorage

4. **View Statistics**
   - **Daily Progress** - Completion percentage for each day (top section)
   - **Progress Panel** - Habit statistics with:
     - **Goal** - Total days available
     - **Percentage** - Completion percentage with visual bar
     - **Count** - Completed vs Total days

5. **Daily Motivation**
   - A new motivational quote appears every time you refresh the page
   - Perfect for daily inspiration!

## 📊 Dashboard Components

### Left Sidebar - Daily Habits (Customizable)
- Displays all your custom habits in numbered list
- **Drag Handle** (⋮⋮) - Drag to reorder by priority
- **✏️ Edit Button** - Click to edit habit name
- **↑/↓ Buttons** - Move habits up or down by priority
- **× Button** - Delete habit (shown on hover)
- **+ ADD Section** - Add new habits with input field

### Center - Calendar Grid
- **Week Sections** - Organized by weeks with clear labels
- **Date Numbers** - Shows calendar days 1-31
- **Day Letters** - S, M, T, W, T, F, S (adjusts for month start day)
- **Habit Cells** - Interactive cells for each habit-day combination
- **Daily Stats** - Completion percentage for each day
- **Progress Charts** - Visual bar graph at top showing daily percentages

### Right Sidebar - Progress Panel
- **Month/Year Selectors** - Control calendar display (saves selection)
- **Habit Progress Rows** - Shows:
  - Days in month (GOAL)
  - Completion percentage with visual bar
  - Count of completed days

### Header
- **Logo** - "HABIT Tracker" branding
- **Motivational Quote** - Changes on every page load
- **Daily Progress** - Widget showing current progress

## 🔧 Key Features Explained

### Customizable Habits System
- Add unlimited habits (not limited to 16)
- Edit existing habit names anytime
- Delete habits with confirmation
- Reorder by priority (drag or use buttons)
- All changes saved to localStorage

### Data Persistence with localStorage
- Habit definitions saved and restored
- Progress data persists across sessions
- Selected month/year remembered
- All data stored locally in browser (no server needed)

### Dynamic Calendar Rendering
- Automatically calculates days in each month
- Handles different month lengths (28-31 days)
- Supports leap years correctly
- Adapts to start day of month (no empty columns)

### Progress Calculation
- Real-time percentage calculation
- Visual progress bars for quick assessment
- Automatic updates when habits are toggled
- Daily percentages calculated instantly

### Drag & Drop Reordering
- Click and drag habit by the drag handle
- Visual feedback during drag (opacity change)
- Drop target highlights with blue line
- Alternative: Use ↑/↓ buttons for ordering

## 📝 Branches

- **main** - Production-ready stable version
- **develop** - Active development branch
- **backup** - Safety backup of working version

## 🔄 Version History

**Current Version:** 1.0.0

### Latest Changes
- ✅ Implemented customizable habits (add, edit, delete)
- ✅ Added drag-and-drop reordering with priority buttons
- ✅ Implemented localStorage persistence for all data
- ✅ Added motivational quotes that change on each visit
- ✅ Fixed month/year navigation persistence
- ✅ Removed empty calendar columns for cleaner UI
- ✅ Enhanced UI with modern glassmorphism design

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

- [ ] Export/Import data as CSV or JSON
- [ ] Habit categories and color coding
- [ ] Statistics dashboard with trends
- [ ] Mobile app version
- [ ] Dark mode theme
- [ ] Habit reminders and notifications
- [ ] Social sharing features
- [ ] Multi-user support

---

**Last Updated:** February 2, 2026

For more information or issues, please visit the [GitHub repository](https://github.com/Hackersaikiran/Habit_Tracker)
