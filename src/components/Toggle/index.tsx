import React from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

interface IToogleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  className: string;
  onChange(): void;
}

const Toggle: React.FC<IToogleProps> = ({ className, labelLeft, labelRight, checked, onChange }) => {
  return (
    <Container className={className}>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ToggleSelector
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={onChange}
        />
        <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  );
}

export default Toggle;