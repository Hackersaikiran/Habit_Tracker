// Habit tracking data - 1 = completed, 0 = missed, -1 = future
const habitData = {
    week1: [
        [1, 1, 1, 1, 1, 0, 1], // Habit 1
        [1, 1, 1, 0, 1, 0, 1], // Habit 2
        [1, 0, 1, 0, 0, 0, 0], // Habit 3
        [1, 1, 1, 1, 1, 1, 1], // Habit 4
        [1, 1, 1, 0, 1, 0, 1], // Habit 5
        [1, 1, 1, 1, 1, 1, 1], // Habit 6
        [0, 0, 0, 0, 0, 0, 0], // Habit 7
        [0, 0, 0, 0, 0, 0, 0], // Habit 8
        [1, 1, 1, 1, 1, 1, 1], // Habit 9
        [0, 0, 1, 1, 1, 0, 0], // Habit 10
        [0, 1, 1, 0, 0, 0, 0], // Habit 11
        [1, 1, 1, 1, 1, 1, 1], // Habit 12
        [1, 1, 1, 0, 1, 0, 1], // Habit 13
        [1, 1, 1, 1, 1, 1, 1], // Habit 14
        [1, 1, 1, 1, 1, 0, 1], // Habit 15
        [1, 1, 1, 1, 1, 1, 1], // Habit 16
    ],
    week2: [
        [1, 1, 1, 0, 0, 1, 1], // Habit 1
        [0, 0, 1, 0, 0, 1, 1], // Habit 2
        [0, 0, 0, 0, 0, 0, 0], // Habit 3
        [1, 1, 1, 1, 1, 1, 1], // Habit 4
        [1, 1, 1, 0, 0, 1, 1], // Habit 5
        [1, 1, 1, 1, 1, 1, 1], // Habit 6
        [0, 0, 0, 0, 0, 0, 0], // Habit 7
        [0, 0, 0, 0, 0, 0, 0], // Habit 8
        [1, 1, 1, 1, 1, 1, 1], // Habit 9
        [0, 0, 0, 0, 0, 1, 1], // Habit 10
        [0, 1, 1, 0, 0, 0, 1], // Habit 11
        [1, 1, 1, 1, 1, 1, 1], // Habit 12
        [0, 0, 0, 1, 1, 0, 1], // Habit 13
        [1, 1, 1, 0, 0, 1, 1], // Habit 14
        [0, 1, 1, 0, 0, 0, 1], // Habit 15
        [1, 1, 1, 1, 1, 1, 1], // Habit 16
    ],
    week3: [
        [1, 0, 0, 1, 0, 1, 0], // Habit 1
        [1, 0, 1, 1, 1, 1, 1], // Habit 2
        [0, 0, 0, 0, 0, 0, 0], // Habit 3
        [1, 1, 1, 1, 1, 1, 1], // Habit 4
        [1, 0, 0, 0, 0, 0, 0], // Habit 5
        [1, 1, 1, 1, 1, 1, 1], // Habit 6
        [0, 0, 0, 0, 0, 0, 0], // Habit 7
        [0, 0, 0, 0, 0, 0, 0], // Habit 8
        [1, 1, 1, 1, 1, 1, 1], // Habit 9
        [0, 0, 0, 0, 0, 1, 1], // Habit 10
        [0, 0, 0, 0, 0, 0, 0], // Habit 11
        [1, 1, 1, 1, 1, 1, 1], // Habit 12
        [0, 1, 1, 1, 1, 1, 1], // Habit 13
        [1, 0, 0, 0, 0, 0, 1], // Habit 14
        [0, 0, 0, 0, 0, 0, 0], // Habit 15
        [1, 1, 1, 1, 1, 1, 1], // Habit 16
    ],
    week4: [
        [0, 0, 0, 1, 1, 1, 0], // Habit 1
        [0, 0, 0, 1, 1, 1, 1], // Habit 2
        [0, 0, 0, 0, 0, 1, 0], // Habit 3
        [1, 1, 1, 1, 1, 1, 1], // Habit 4
        [1, 0, 0, 1, 1, 1, 1], // Habit 5
        [1, 1, 1, 1, 1, 1, 1], // Habit 6
        [0, 0, 0, 0, 0, 0, 0], // Habit 7
        [0, 0, 0, 0, 0, 0, 0], // Habit 8
        [1, 1, 1, 1, 1, 1, 1], // Habit 9
        [0, 0, 0, 0, 0, 0, 0], // Habit 10
        [0, 0, 0, 0, 0, 0, 0], // Habit 11
        [1, 1, 1, 1, 1, 1, 1], // Habit 12
        [1, 1, 1, 1, 1, 1, 1], // Habit 13
        [1, 1, 0, 1, 1, 1, 0], // Habit 14
        [0, 0, 0, 0, 0, 1, 0], // Habit 15
        [1, 1, 1, 1, 1, 1, 1], // Habit 16
    ],
    week5: [
        [0, -1, -1, -1, -1, -1, -1], // Habit 1
        [1, -1, -1, -1, -1, -1, -1], // Habit 2
        [0, -1, -1, -1, -1, -1, -1], // Habit 3
        [1, -1, -1, -1, -1, -1, -1], // Habit 4
        [1, -1, -1, -1, -1, -1, -1], // Habit 5
        [1, -1, -1, -1, -1, -1, -1], // Habit 6
        [0, -1, -1, -1, -1, -1, -1], // Habit 7
        [0, -1, -1, -1, -1, -1, -1], // Habit 8
        [1, -1, -1, -1, -1, -1, -1], // Habit 9
        [0, -1, -1, -1, -1, -1, -1], // Habit 10
        [0, -1, -1, -1, -1, -1, -1], // Habit 11
        [1, -1, -1, -1, -1, -1, -1], // Habit 12
        [0, -1, -1, -1, -1, -1, -1], // Habit 13
        [0, -1, -1, -1, -1, -1, -1], // Habit 14
        [0, -1, -1, -1, -1, -1, -1], // Habit 15
        [1, -1, -1, -1, -1, -1, -1], // Habit 16
    ]
};

const TOTAL_DAYS = 31;
const NUM_HABITS = 16;

// Calculate daily completion percentage for a specific day (0-30)
function calculateDailyPercentage(dayIndex) {
    let completed = 0;
    let total = 0;

    const weeks = ['week1', 'week2', 'week3', 'week4', 'week5'];
    const weekIndex = Math.floor(dayIndex / 7);
    const dayInWeek = dayIndex % 7;

    if (weekIndex >= weeks.length) return { percentage: 0, isFuture: true };

    const weekData = habitData[weeks[weekIndex]];

    for (let habit = 0; habit < NUM_HABITS; habit++) {
        const value = weekData[habit][dayInWeek];
        if (value !== -1) {
            total++;
            if (value === 1) completed++;
        }
    }

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { percentage, isFuture: total === 0 };
}

// Calculate habit completion stats (for progress panel)
function calculateHabitStats(habitIndex) {
    let completed = 0;
    const weeks = ['week1', 'week2', 'week3', 'week4', 'week5'];

    weeks.forEach(weekKey => {
        const weekData = habitData[weekKey];
        weekData[habitIndex].forEach(value => {
            if (value === 1) completed++;
        });
    });

    const percentage = Math.round((completed / TOTAL_DAYS) * 100);
    return { completed, total: TOTAL_DAYS, percentage };
}

// Update bar chart
function updateBarChart() {
    const barChart = document.getElementById('barChart');
    barChart.innerHTML = '';

    for (let day = 0; day < TOTAL_DAYS; day++) {
        const { percentage, isFuture } = calculateDailyPercentage(day);
        const barColumn = document.createElement('div');
        barColumn.className = 'bar-column';

        const bar = document.createElement('div');
        bar.className = 'bar';
        const barHeight = isFuture ? 0 : Math.round((percentage / 100) * 85);
        bar.style.height = `${barHeight}px`;
        
        barColumn.appendChild(bar);
        barChart.appendChild(barColumn);
    }
}

// Update percentage row
function updatePercentages() {
    const percentagesDiv = document.getElementById('percentages');
    percentagesDiv.innerHTML = '';

    for (let day = 0; day < TOTAL_DAYS; day++) {
        const { percentage, isFuture } = calculateDailyPercentage(day);
        const percentCell = document.createElement('div');
        percentCell.className = 'percent-cell';
        percentCell.textContent = isFuture ? '0%' : `${percentage}%`;
        percentagesDiv.appendChild(percentCell);
    }
}

// Update progress panel
function updateProgressPanel() {
    const progressTable = document.getElementById('progressTable');
    
    // Keep header, remove existing rows
    const existingRows = progressTable.querySelectorAll('.progress-row');
    existingRows.forEach(row => row.remove());

    for (let habit = 0; habit < NUM_HABITS; habit++) {
        const stats = calculateHabitStats(habit);
        
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
function updateAllStats() {
    updateBarChart();
    updatePercentages();
    updateProgressPanel();
}

// Render the habit grid
function renderHabitGrid() {
    ['week1', 'week2', 'week3', 'week4', 'week5'].forEach(weekId => {
        const gridElement = document.getElementById(weekId);
        const weekData = habitData[weekId];

        // Create cells for each habit and day
        for (let habit = 0; habit < NUM_HABITS; habit++) {
            for (let day = 0; day < 7; day++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.dataset.week = weekId;
                cell.dataset.habit = habit;
                cell.dataset.day = day;

                const value = weekData[habit][day];

                if (value === 1) {
                    cell.classList.add('completed');
                    cell.textContent = '';
                } else if (value === 0) {
                    cell.classList.add('missed');
                    cell.textContent = '0';
                } else {
                    cell.classList.add('future');
                    cell.textContent = '';
                }

                // Add click handler
                cell.addEventListener('click', function() {
                    if (this.classList.contains('future')) {
                        return;
                    }

                    const weekKey = this.dataset.week;
                    const habitIdx = parseInt(this.dataset.habit);
                    const dayIdx = parseInt(this.dataset.day);

                    if (this.classList.contains('completed')) {
                        this.classList.remove('completed');
                        this.classList.add('missed');
                        this.textContent = '0';
                        habitData[weekKey][habitIdx][dayIdx] = 0;
                    } else if (this.classList.contains('missed')) {
                        this.classList.remove('missed');
                        this.classList.add('completed');
                        this.textContent = '';
                        habitData[weekKey][habitIdx][dayIdx] = 1;
                    }

                    // Update all statistics
                    updateAllStats();
                });

                gridElement.appendChild(cell);
            }
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderHabitGrid();
    updateAllStats();
});
