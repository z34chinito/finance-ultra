// scripts.js for Finance Ultra Pro Dashboard

// Managing localStorage data
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// Chart rendering with Chart.js
function renderChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Finance Data',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Income/Expense/Bill/Debt calculations
function calculateTotals(income, expenses, bills, debts) {
    const totalIncome = income.reduce((acc, val) => acc + val, 0);
    const totalExpenses = expenses.reduce((acc, val) => acc + val, 0);
    const totalBills = bills.reduce((acc, val) => acc + val, 0);
    const totalDebts = debts.reduce((acc, val) => acc + val, 0);
    return {
        totalIncome,
        totalExpenses,
        totalBills,
        totalDebts,
    };
}

// Savings goal tracking
function trackSavings(savingsGoal, currentSavings) {
    return currentSavings >= savingsGoal;
}

// AI Money Coach recommendations
function getRecommendations(currentIncome, currentExpenses) {
    const recommendations = [];
    if(currentExpenses > currentIncome) {
        recommendations.push('Reduce unnecessary expenses.');
    } else if(currentExpenses < currentIncome) {
        recommendations.push('You have room to save more. Consider increasing your savings.');
    }
    return recommendations;
}