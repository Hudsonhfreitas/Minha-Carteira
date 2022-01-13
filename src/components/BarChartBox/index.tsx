import React from 'react';
import { Container, SideLeft, SideRight, LegendContainer, Legend } from './styles';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}


const BarChartBox: React.FC<IBarChartProps> = ({title, data}) => {
  return (
    <Container>
        <SideLeft>
            <h2>{title}</h2>
            <LegendContainer>
                {
                    data.map(indicatior => (
                        <Legend key={indicatior.name} color={indicatior.color}>
                            <div>{indicatior.percent}%</div>
                            <span>{indicatior.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>
        <SideRight>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <Bar dataKey="amount" name="Valor">
                        {data.map((indicator) => (
                            <Cell 
                                key={indicator.name}
                                fill={indicator.color}
                                cursor="pointer"
                                focusable={false}
                            />
                        ))}
                    </Bar>
                    <Tooltip cursor={{fill: 'none'}} formatter={(value: number) => formatCurrency(Number(value))} />
                </BarChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
  );
}

export default BarChartBox;