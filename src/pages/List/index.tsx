import React, { useMemo, useState, useEffect} from 'react';
import {Container, Content, Filters} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { useParams } from 'react-router';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

interface IData {
    id: string,
    description: string,
    amountFormatted: string,
    frequency: string,
    dateFormatted: string,
    tagColor: string 
}


const List: React.FC = () => {

    const [data, setData] = useState<IData[]>([]);

    const {type} = useParams();

    const title = useMemo(() => {
        return type === 'entry-balance' ? {
            titleColor: 'Entradas',
            lineColor: '#F7931B'
        } : {
            titleColor: 'Saídas',
            lineColor: '#E44C4E'
        };
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance'? gains : expenses
    }, [type]);

    const months = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'},
    ];

    const years = [
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},
    ];

    useEffect(() => {

        const response = listData.map( item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })
        setData(response)
    }, []);

    return (
        <Container>
            <ContentHeader title={title.titleColor} lineColor={title.lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
            </Filters>

            <Content>
                {data && data.map((item) => (
                    <HistoryFinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                    />
                ))}
                 
            </Content>
        </Container>
    );
}

export default List;