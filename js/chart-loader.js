document.addEventListener("DOMContentLoaded", () => {
    const data = [
        { year: 2008, objectives: 70, realizations: 67.8 },
        { year: 2009, objectives: 70, realizations: 69.7 },
        { year: 2010, objectives: 70, realizations: 69.6 },
        { year: 2011, objectives: 70, realizations: 54.6 },
        { year: 2012, objectives: 70, realizations: 54.0 },
        { year: 2013, objectives: 70, realizations: 52.5 },
        { year: 2014, objectives: 70, realizations: 36.3 },
        { year: 2015, objectives: 70, realizations: 48.5 },
        { year: 2016, objectives: 70, realizations: 43.8 },
        { year: 2017, objectives: 70, realizations: 40.6 },
        { year: 2018, objectives: 70, realizations: 42.3 },
        { year: 2019, objectives: 70, realizations: 44.5 }
    ];

    // Create chart container
    const chartContainer = document.getElementById('chart-container');
    chartContainer.innerHTML = '<canvas id="chart" width="800" height="400"></canvas>';
    const ctx = document.getElementById('chart').getContext('2d');

    // Prepare chart data
    const labels = data.map(item => item.year);
    const objectives = data.map(item => item.objectives);
    const realizations = data.map(item => item.realizations);

    // Load Chart.js dynamically
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.onload = () => {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Objectifs (en milliers)',
                        data: objectives,
                        backgroundColor: 'rgba(54, 162, 235, 0.7)'
                    },
                    {
                        label: 'Réalisations (en milliers)',
                        data: realizations,
                        backgroundColor: 'rgba(255, 99, 132, 0.7)'
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: { enabled: true }
                },
                scales: {
                    x: { title: { display: true, text: 'Année' } },
                    y: { title: { display: true, text: 'Nombre de branchements (milliers)' } }
                }
            }
        });
    };
    document.body.appendChild(script);
});
