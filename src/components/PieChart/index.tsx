
import React from 'react';
import { Container, SideLeft, Legend, LegendContainer }  from './styles';
import { Pie, PieChart , Cell, ResponsiveContainer } from 'recharts';

const PieChart: React.FC = () => (
    <Container>
        <SideLeft>
            <LegendContainer>
                <Legend>
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend>
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
            </LegendContainer>
        </SideLeft>
        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie />
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
)


export default PieChart;
