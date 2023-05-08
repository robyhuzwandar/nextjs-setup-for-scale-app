'use client';

import { theme } from '@/src/shared/theme';
import CheckIcon from '@mui/icons-material/Check';
import * as React from 'react';
import styled from 'styled-components';
import { Text } from './Text';

interface CheckboxInputProps {
  checked: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckboxInput = styled.div<CheckboxInputProps>`
  border: 2px solid ${theme.colors.success};
  border-radius: 4px;
  cursor: pointer;
  height: 20px;
  width: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 10px;
`;

type CheckboxProps = {
  defaultChecked?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
};

const CheckboxIcon = styled(CheckIcon)`
  width: 15px;
  height: 15px;
  color: ${theme.colors.success};
`;

const Checkbox: React.FC<CheckboxProps> = ({
  defaultChecked = false,
  onChange,
  label,
}) => {
  const [checked, setChecked] = React.useState(defaultChecked);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    if (onChange) {
      onChange(newChecked);
    }
  };

  React.useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <Container>
      <CheckboxInput checked={checked} onClick={handleCheckboxChange}>
        {checked && <CheckboxIcon />}
      </CheckboxInput>
      <Text>{label}</Text>
    </Container>
  );
};

export default Checkbox;
