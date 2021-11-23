import React from 'react';
import {Container} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const options = [
    {value: 'Hudson', label: 'Hudson'},
    {value: 'Alef', label: 'Alef'},
  ]

const List: React.FC = () => {
    return (
        <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options} />
            </ContentHeader>
    );
}

export default List;