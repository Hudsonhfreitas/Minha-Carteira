
import React from 'react';
import { Container, SideLeft, SideRight, Legend, LegendContainer }  from './styles';
import { Pie, Cell, PieChart, ResponsiveContainer } from 'recharts';

interface IChartProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string
    }[];
}

const PieChartBox: React.FC<IChartProps> = ({data}) => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {
                    data.map(indicatior => (
                        <Legend key={indicatior.name} color={indicatior.color}>
                            <div>{indicatior.percent}</div>
                            <span>{indicatior.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>
        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map(indicator => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
)


export default PieChartBox;
