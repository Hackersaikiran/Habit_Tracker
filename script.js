// Global state
let currentMonth = 0; // January
let currentYear = 2026;
let habitData = {};
const NUM_HABITS = 16;

// Initialize habit data for a month
function initializeHabitData(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const key = `${year}-${month}`;
    
    if (!habitData[key]) {
        habitData[key] = {};
        for (let day = 1; day <= daysInMonth; day++) {
            habitData[key][day] = Array(NUM_HABITS).fill(0);
        }
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

// Render weeks
function renderWeeks(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const weeksContainer = document.getElementById('weeksContainer');
    weeksContainer.innerHTML = '';
    
    let currentDay = 1;
    let weekNumber = 1;
    
    while (currentDay <= daysInMonth) {
        const weekSection = document.createElement('div');
        weekSection.className = 'week-section';
        
        // Week label
        const weekLabel = document.createElement('div');
        weekLabel.className = 'week-label';
        weekLabel.textContent = `WEEK ${weekNumber}`;
        weekSection.appendChild(weekLabel);
        
        // Weekday names
        const weekDays = document.createElement('div');
        weekDays.className = 'week-days';
        const startDay = weekNumber === 1 ? firstDay : 0;
        
        for (let i = 0; i < 7; i++) {
            const weekday = document.createElement('div');
            weekday.className = 'weekday';
            weekday.textContent = getDayName(i);
            weekDays.appendChild(weekday);
        }
        weekSection.appendChild(weekDays);
        
        // Date numbers
        const weekDateNums = document.createElement('div');
        weekDateNums.className = 'week-date-nums';
        
        for (let i = 0; i < 7; i++) {
            const dateNum = document.createElement('div');
            dateNum.className = 'date-num';
            
            if (weekNumber === 1 && i < startDay) {
                dateNum.textContent = '';
            } else if (currentDay <= daysInMonth) {
                dateNum.textContent = currentDay;
                currentDay++;
            }
            
            weekDateNums.appendChild(dateNum);
        }
        weekSection.appendChild(weekDateNums);
        
        // Habit grid
        const habitGrid = document.createElement('div');
        habitGrid.className = 'habit-grid';
        habitGrid.dataset.week = weekNumber;
        weekSection.appendChild(habitGrid);
        
        weeksContainer.appendChild(weekSection);
        weekNumber++;
    }
    
    // Render habit cells for all weeks
    renderHabitCells(year, month);
}

// Render habit cells
function renderHabitCells(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const key = `${year}-${month}`;
    
    initializeHabitData(year, month);
    
    const weekSections = document.querySelectorAll('.week-section');
    
    weekSections.forEach((weekSection, weekIndex) => {
        const habitGrid = weekSection.querySelector('.habit-grid');
        habitGrid.innerHTML = '';
        
        // For each habit (16 rows)
        for (let habitIdx = 0; habitIdx < NUM_HABITS; habitIdx++) {
            // For each day in the week (7 columns)
            for (let dayIdx = 0; dayIdx < 7; dayIdx++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                
                // Calculate the actual day of the month for this cell
                const dayOfMonth = (weekIndex * 7) + dayIdx - firstDay + 1;
                
                if (dayOfMonth < 1 || dayOfMonth > daysInMonth) {
                    // Empty cell before month starts or after month ends
                    cell.classList.add('future');
                    cell.textContent = '';
                } else {
                    // Valid day in the month
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
                        const day = parseInt(this.dataset.day);
                        const habit = parseInt(this.dataset.habit);
                        
                        if (habitData[key][day][habit] === 1) {
                            habitData[key][day][habit] = 0;
                            this.classList.remove('completed');
                            this.classList.add('missed');
                            this.textContent = '0';
                        } else {
                            habitData[key][day][habit] = 1;
                            this.classList.remove('missed');
                            this.classList.add('completed');
                            this.textContent = '';
                        }
                        
                        updateAllStats(year, month);
                    });
                }
                
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
    // Set current month/year
    document.getElementById('monthSelect').value = currentMonth;
    document.getElementById('yearSelect').value = currentYear;
    
    // Add event listeners
    document.getElementById('monthSelect').addEventListener('change', handleDateChange);
    document.getElementById('yearSelect').addEventListener('change', handleDateChange);
    
    // Render initial calendar (clean state)
    renderCalendar(currentYear, currentMonth);
});
