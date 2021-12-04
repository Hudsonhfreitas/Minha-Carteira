import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';


const Dashboard: React.FC = () => {

    const options = [
        {value: 'Hudson', label: 'Hudson'},
        {value: 'Alef', label: 'Alef'},
      ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#FFF">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;