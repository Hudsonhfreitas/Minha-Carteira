import React, { useMemo, useState, useEffect, MouseEventHandler} from 'react';
import { v4 as uuid_v4 } from 'uuid';
import {Container, Content, Filters} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { useParams } from 'react-router';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

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
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

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

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if(!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map( year => {
            return {
                value: year,
                label: year,
            }
        })
    }, [listData]);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency)

        if(alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency)
            setSelectedFrequency(filtered)
        } else {
            setSelectedFrequency((prev) => [...prev, frequency])
        }
    }

    useEffect(() => {

        const filteredDate = listData.filter( item => {

            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedData = filteredDate.map((item) => {

            return {
                id: uuid_v4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })

        setData(formattedData)
    }, [listData, monthSelected, yearSelected, data.length, selectedFrequency]);

    return (
        <Container>
            <ContentHeader title={title.titleColor} lineColor={title.lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <Filters>
                <button 
                    type="button" 
                    className={`tag-filter tag-filter-recurrent ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                        Recorrentes
                </button>
                <button 
                    type="button" 
                    className={`tag-filter tag-filter-eventual ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                        Eventuais
                </button>
            </Filters>

            <Content>
                {data && data.map((item) => (
                    <HistoryFinanceCard
                        key={uuid_v4()}
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