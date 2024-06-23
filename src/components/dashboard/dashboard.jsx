import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; 
import { API_BASE_URL } from '../../services/apiConfig.js';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [chartRef, setChartRef] = useState(null); 

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/dashboardGeral`)
            .then(response => response.json())
            .then(data => setDashboardData(data))
            .catch(error => console.error('Erro ao carregar dados da dashboard:', error));
    }, []);

    useEffect(() => {
        if (dashboardData) {
            renderChart(); 
        }
    }, [dashboardData]);

    const renderChart = () => {
        const ctx = chartRef.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dashboardData.balancoAnual.map(item => item.ano),
                datasets: [
                    {
                        label: 'Faturado',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        data: dashboardData.balancoAnual.map(item => item.faturado),
                    },
                    {
                        label: 'Lançado',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        data: dashboardData.balancoAnual.map(item => item.lancado),
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    };

    return (
        <div className="dashboard">
            <h2 className="mb-4">Dashboard Geral</h2>

            
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Valor Lançado em Aberto</h5>
                            <p className="card-text">{dashboardData?.valorLancadoEmAberto}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Valor Lançado Pago</h5>
                            <p className="card-text">{dashboardData?.valorLancadoPago}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Total de Contribuintes Cadastrados</h5>
                            <p className="card-text">{dashboardData?.totalContribuinteCadastrados}</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="mt-5">
                <h3>Balanço Anual</h3>
                <canvas ref={ref => setChartRef(ref)}></canvas>
            </div>
        </div>
    );
};

export default Dashboard;
