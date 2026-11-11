const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Yes',
            'No',
            'Do not know',
            'Prefer not to specify'
        ],
        datasets: [{
            label: 'Percentage',
            data: [65, 30, 2, 3],
            borderWidth: 1
        }]
    },

});


const ctx_business = document.getElementById('chart_business');

new Chart(ctx_business, {
    type: 'bar',
    data: {
        labels: [
            '2020',
            '2021',
            '2022',
            '2023',
            '2024',
            '2025',
        ],
        datasets: [
            {
                label: 'Revenue in thousands',
                data: [
                    408244.00,
                    444046.00,
                    450819.00,
                    414048.00,
                    383042.00,
                    420424.00
                ],
                borderWidth: 1
            },
            {
                label: 'Expense in thousands',
                data: [
                    373134.00,
                    421397.00,
                    429803.00,
                    393505.00,
                    362992.00,
                    405489.00
                ],
                borderWidth: 1
            }
        ]
    },

});






const ctx_count = document.getElementById('chart_count');

new Chart(ctx_count, {
    type: 'line',
    data: {
        labels: [
            '2020',
            '2021',
            '2022',
            '2023',
            '2024',
        ],
        datasets: [
            {
                label: 'George Brown',
                data: [
                    13754,
                    13303,
                    12094,
                    12427,
                    12933
                ],
                borderWidth: 1
            },
            {
                label: 'Seneca',
                data: [
                    16578,
                    15746,
                    13654,
                    14113,
                    15022
                ],
                borderWidth: 1
            }
        ]
    },

});