import React from 'react';
import {Container, Content} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';


const List: React.FC = () => {

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
    ]

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#FFF">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
            <Content>
                <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
                 <HistoryFinanceCard
                    tagColor="#E44c4E"
                    title="Conta de luz"
                    subtitle="24/11/2021"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    );
}

export default List;