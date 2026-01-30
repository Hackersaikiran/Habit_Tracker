# Alignment Fixes for Habit Tracker

## Issues to Fix:
1. Habit rows don't align with grid cells
2. Progress panel rows don't align with habits  
3. Bar chart needs better scaling
4. Days 30-31 need to show as future dates properly

## CSS Changes Needed in `styles.css`:

### 1. Fix habit-item height (Line ~86):
```css
.habit-item {
    padding: 0 12px;          /* Changed from: padding: 10px 12px; */
    border-bottom: 1px solid #ccc;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 33px;             /* Changed from: min-height: 32px; */
    box-sizing: border-box;
}
```

### 2. Fix habit-grid and grid-cell height (Line ~245):
```css
.habit-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 33px;     /* Changed from: grid-auto-rows: minmax(32px, auto); */
}

.grid-cell {
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    height: 33px;             /* Changed from: min-height: 32px; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    position: relative;
    cursor: pointer;
}
```

### 3. Fix progress-row height (Line ~370):
```css
.progress-row {
    display: grid;
    grid-template-columns: 50px 1fr 80px;
    padding: 0 10px;          /* Changed from: padding: 10px; */
    border-bottom: 1px solid #ccc;
    gap: 10px;
    align-items: center;
    height: 33px;             /* ADD THIS LINE */
}
```

### 4. Fix bar chart styling (Line ~125):
```css
.bar-chart-container {
    display: grid;
    grid-template-columns: repeat(31, 1fr);
    height: 100px;            /* Changed from: height: 120px; */
    padding: 5px 0;           /* Changed from: padding: 10px 0 5px 0; */
    background-color: #fafafa;
    border-bottom: 1px solid #ddd;
    align-items: flex-end;
    gap: 0;
}

.bar-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0 1px;           /* Keep as is */
}

.bar {
    width: 100%;
    background-color: #5a9a5a;
    min-height: 0;            /* Changed from: min-height: 2px; */
    transition: height 0.3s ease;
    border-radius: 2px 2px 0 0;  /* ADD THIS LINE */
}
```

## JavaScript Changes Needed in `script.js`:

### Update the updateBarChart function (Line ~89):
```javascript
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
        // Scale to max 85px height for 100%
        const barHeight = isFuture ? 0 : Math.round((percentage / 100) * 85);
        bar.style.height = `${barHeight}px`;
        
        barColumn.appendChild(bar);
        barChart.appendChild(barColumn);
    }
}
```

## How to Apply These Fixes:

1. Open `styles.css` and find each section mentioned above
2. Update the properties as specified in the comments
3. Open `script.js` and update the `updateBarChart` function
4. Save both files
5. Refresh your browser (Ctrl+F5 for hard refresh)

## Key Changes Summary:
- All rows now have consistent height of 33px
- Bar chart scaled to 85px max height (representing 100%)
- Padding reduced to 0 vertical to ensure alignment
- Bar chart container reduced to 100px total height
- Added border-radius to bars for polished look

After making these changes, all rows should align perfectly across the habit list, calendar grid, and progress panel.
