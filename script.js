// Global state
let currentMonth = 0; // January
let currentYear = 2026;
let habitData = {};
const NUM_HABITS = 16;
const STORAGE_KEY = 'habitTrackerData';

// Motivational Quotes
const motivationalQuotes = [
    { text: "Every accomplishment starts with the decision to try.", author: "Unknown" },
    { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
    { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "A habit cannot be tossed out the window; it must be coaxed down the stairs one step at a time.", author: "Mark Twain" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { text: "The secret of your success is determined by your daily habits.", author: "John C. Maxwell" },
    { text: "Building habits is designing your life one small choice at a time.", author: "Unknown" },
    { text: "You don't rise to the level of your goals; you fall to the level of your systems.", author: "James Clear" },
    { text: "Great things never came from comfort zones.", author: "Unknown" },
    { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
    { text: "Your future self will thank you for the discipline you show today.", author: "Unknown" },
    { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
    { text: "Today's pain is tomorrow's power.", author: "Unknown" },
    { text: "The only way out is through.", author: "Robert Frost" },
    { text: "Progress, not perfection.", author: "Unknown" },
    { text: "Believe in yourself and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Every day is a chance to improve.", author: "Unknown" },
    { text: "You are capable of amazing things.", author: "Unknown" },
    { text: "Consistency is the catalyst for change.", author: "James Clear" },
    { text: "Your only limit is you.", author: "Unknown" },
    { text: "Make it a priority. Make it a habit.", author: "Unknown" },
    { text: "The best time to start was yesterday. The second best time is now.", author: "Unknown" }
];

// Function to get a random quote
function getRandomQuote() {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

// Function to display random quote on page load
function displayDailyQuote() {
    const quote = getRandomQuote();
    const quoteTextElement = document.getElementById('quoteText');
    const quoteAuthorElement = document.getElementById('quoteAuthor');
    
    if (quoteTextElement && quoteAuthorElement) {
        quoteTextElement.textContent = '✨ ' + quote.text + ' ✨';
        quoteAuthorElement.textContent = '— ' + quote.author;
    }
}

// Load habit data from localStorage
function loadHabitData() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            habitData = JSON.parse(savedData);
        }
    } catch (error) {
        console.error('Error loading habit data:', error);
        habitData = {};
    }
}

// Save habit data to localStorage
function saveHabitData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(habitData));
    } catch (error) {
        console.error('Error saving habit data:', error);
    }
}

// Initialize habit data for a month
function initializeHabitData(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const key = `${year}-${month}`;
    
    if (!habitData[key]) {
        habitData[key] = {};
        for (let day = 1; day <= daysInMonth; day++) {
            habitData[key][day] = Array(NUM_HABITS).fill(0);
        }
        saveHabitData();
    }
    return habitData[key];
}

// Get days in month
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Get first day of month (0 = Sunday, 1 = Monday, etc.)
function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}

// Get day name
function getDayName(dayIndex) {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return days[dayIndex];
}

// Calculate daily completion percentage
function calculateDailyPercentage(year, month, day) {
    const key = `${year}-${month}`;
    if (!habitData[key] || !habitData[key][day]) return { percentage: 0, isFuture: true };
    
    const dayData = habitData[key][day];
    const completed = dayData.filter(val => val === 1).length;
    const total = NUM_HABITS;
    const percentage = Math.round((completed / total) * 100);
    
    return { percentage, isFuture: false };
}

// Calculate habit completion stats
function calculateHabitStats(year, month, habitIndex) {
    const daysInMonth = getDaysInMonth(year, month);
    const key = `${year}-${month}`;
    let completed = 0;
    
    if (habitData[key]) {
        for (let day = 1; day <= daysInMonth; day++) {
            if (habitData[key][day] && habitData[key][day][habitIndex] === 1) {
                completed++;
            }
        }
    }
    
    const percentage = Math.round((completed / daysInMonth) * 100);
    return { completed, total: daysInMonth, percentage };
}

// Render calendar header (bar chart, day numbers, percentages)
function renderCalendarHeader(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const header = document.getElementById('calendarHeader');
    
    header.innerHTML = `
        <div class="bar-chart-container" id="barChart"></div>
        <div class="day-numbers" id="dayNumbers"></div>
        <div class="percentages" id="percentages"></div>
    `;
    
    // Update grid columns based on days
    const barChart = document.getElementById('barChart');
    const dayNumbers = document.getElementById('dayNumbers');
    const percentages = document.getElementById('percentages');
    
    barChart.style.gridTemplateColumns = `repeat(${daysInMonth}, 1fr)`;
    dayNumbers.style.gridTemplateColumns = `repeat(${daysInMonth}, 1fr)`;
    percentages.style.gridTemplateColumns = `repeat(${daysInMonth}, 1fr)`;
    
    // Render day numbers
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        dayCell.textContent = day;
        dayNumbers.appendChild(dayCell);
    }
    
    updateBarChart(year, month);
    updatePercentages(year, month);
}

// Update bar chart
function updateBarChart(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const barChart = document.getElementById('barChart');
    barChart.innerHTML = '';
    
    for (let day = 1; day <= daysInMonth; day++) {
        const { percentage } = calculateDailyPercentage(year, month, day);
        const barColumn = document.createElement('div');
        barColumn.className = 'bar-column';
        
        const bar = document.createElement('div');
        bar.className = 'bar';
        const barHeight = Math.round((percentage / 100) * 85);
        bar.style.height = `${barHeight}px`;
        
        barColumn.appendChild(bar);
        barChart.appendChild(barColumn);
    }
}

// Update percentage row
function updatePercentages(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const percentagesDiv = document.getElementById('percentages');
    percentagesDiv.innerHTML = '';
    
    for (let day = 1; day <= daysInMonth; day++) {
        const { percentage } = calculateDailyPercentage(year, month, day);
        const percentCell = document.createElement('div');
        percentCell.className = 'percent-cell';
        percentCell.textContent = `${percentage}%`;
        percentagesDiv.appendChild(percentCell);
    }
}

// Generate weeks array
function generateWeeks(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month); // 0=Sunday, 1=Monday, etc.
    
    const weeks = [];
    let currentWeek = [];
    
    // Add empty slots (null) for days before the 1st
    for (let i = 0; i < firstDay; i++) {
        currentWeek.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        currentWeek.push(day);
        
        // When we reach Sunday (end of week), save it
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    }
    
    // If there's a partial week at the end, we'll handle it without padding
    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }
    
    return weeks;
}

// Render weeks
function renderWeeks(year, month) {
    const weeksContainer = document.getElementById('weeksContainer');
    weeksContainer.innerHTML = '';
    
    const weeks = generateWeeks(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    weeks.forEach((weekDays, weekIndex) => {
        const weekSection = document.createElement('div');
        weekSection.className = 'week-section';
        
        // Week label
        const weekLabel = document.createElement('div');
        weekLabel.className = 'week-label';
        weekLabel.textContent = `WEEK ${weekIndex + 1}`;
        weekSection.appendChild(weekLabel);
        
        // Filter out null values for rendering
        const actualDays = weekDays.filter(day => day !== null);
        
        // Only render if there are actual days
        if (actualDays.length === 0) {
            weeksContainer.appendChild(weekSection);
            return;
        }
        
        // Weekday names - calculate the starting day of the week
        const weekDaysContainer = document.createElement('div');
        weekDaysContainer.className = 'week-days';
        weekDaysContainer.style.gridTemplateColumns = `repeat(${actualDays.length}, 1fr)`;
        
        // For first week, start from firstDayOfMonth, otherwise start from 0 (Sunday)
        const startDayIndex = weekIndex === 0 ? firstDayOfMonth : 0;
        
        for (let i = 0; i < actualDays.length; i++) {
            const weekday = document.createElement('div');
            weekday.className = 'weekday';
            weekday.textContent = getDayName(startDayIndex + i);
            weekDaysContainer.appendChild(weekday);
        }
        weekSection.appendChild(weekDaysContainer);
        
        // Date numbers
        const weekDateNums = document.createElement('div');
        weekDateNums.className = 'week-date-nums';
        weekDateNums.style.gridTemplateColumns = `repeat(${actualDays.length}, 1fr)`;
        
        for (let i = 0; i < actualDays.length; i++) {
            const dateNum = document.createElement('div');
            dateNum.className = 'date-num';
            dateNum.textContent = actualDays[i];
            weekDateNums.appendChild(dateNum);
        }
        weekSection.appendChild(weekDateNums);
        
        // Habit grid
        const habitGrid = document.createElement('div');
        habitGrid.className = 'habit-grid';
        habitGrid.dataset.week = weekIndex + 1;
        weekSection.appendChild(habitGrid);
        
        weeksContainer.appendChild(weekSection);
    });
    
    // Render habit cells for all weeks
    renderHabitCells(year, month);
}

// Render habit cells
function renderHabitCells(year, month) {
    const key = `${year}-${month}`;
    initializeHabitData(year, month);
    
    const weeks = generateWeeks(year, month);
    const weekSections = document.querySelectorAll('.week-section');
    
    weekSections.forEach((weekSection, weekIndex) => {
        const habitGrid = weekSection.querySelector('.habit-grid');
        const weekDays = weeks[weekIndex];
        
        // Filter out null values - only actual days
        const actualDays = weekDays.filter(day => day !== null);
        
        habitGrid.innerHTML = '';
        habitGrid.style.gridTemplateColumns = `repeat(${actualDays.length}, 1fr)`;
        
        // For each habit (16 rows)
        for (let habitIdx = 0; habitIdx < NUM_HABITS; habitIdx++) {
            // For each actual day in the week (no nulls)
            for (let dayIdx = 0; dayIdx < actualDays.length; dayIdx++) {
                const dayOfMonth = actualDays[dayIdx];
                
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.dataset.day = dayOfMonth;
                cell.dataset.habit = habitIdx;
                
                const value = habitData[key][dayOfMonth][habitIdx];
                
                if (value === 1) {
                    cell.classList.add('completed');
                    cell.textContent = '';
                } else {
                    cell.classList.add('missed');
                    cell.textContent = '0';
                }
                
                // Add click handler
                cell.addEventListener('click', function() {
                    const currentValue = habitData[key][dayOfMonth][habitIdx];
                    if (currentValue === 0) {
                        habitData[key][dayOfMonth][habitIdx] = 1;
                        this.classList.remove('missed');
                        this.classList.add('completed');
                        this.textContent = '';
                    } else {
                        habitData[key][dayOfMonth][habitIdx] = 0;
                        this.classList.remove('completed');
                        this.classList.add('missed');
                        this.textContent = '0';
                    }
                    
                    saveHabitData();
                    updateAllStats(year, month);
                });
                
                habitGrid.appendChild(cell);
            }
        }
    });
}

// Update progress panel
function updateProgressPanel(year, month) {
    const progressTable = document.getElementById('progressTable');
    const existingRows = progressTable.querySelectorAll('.progress-row');
    existingRows.forEach(row => row.remove());
    
    for (let habit = 0; habit < NUM_HABITS; habit++) {
        const stats = calculateHabitStats(year, month, habit);
        
        const row = document.createElement('div');
        row.className = 'progress-row';
        
        row.innerHTML = `
            <div class="col-goal">${stats.total}</div>
            <div class="col-percentage">
                <span class="percent-text">${stats.percentage}%</span>
                <div class="progress-bar"><div class="progress-fill" style="width: ${stats.percentage}%"></div></div>
            </div>
            <div class="col-count">${stats.completed} / ${stats.total}</div>
        `;
        
        progressTable.appendChild(row);
    }
}

// Update all statistics
function updateAllStats(year, month) {
    updateBarChart(year, month);
    updatePercentages(year, month);
    updateProgressPanel(year, month);
}

// Render entire calendar
function renderCalendar(year, month) {
    renderCalendarHeader(year, month);
    renderWeeks(year, month);
    updateProgressPanel(year, month);
}

// Handle month/year change
function handleDateChange() {
    currentMonth = parseInt(document.getElementById('monthSelect').value);
    currentYear = parseInt(document.getElementById('yearSelect').value);
    renderCalendar(currentYear, currentMonth);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved habit data from localStorage
    loadHabitData();
    
    // Display daily motivational quote (changes each visit)
    displayDailyQuote();
    
    // Set current month/year
    document.getElementById('monthSelect').value = currentMonth;
    document.getElementById('yearSelect').value = currentYear;
    
    // Add event listeners
    document.getElementById('monthSelect').addEventListener('change', handleDateChange);
    document.getElementById('yearSelect').addEventListener('change', handleDateChange);
    
    // Render initial calendar (with saved data)
    renderCalendar(currentYear, currentMonth);
});
