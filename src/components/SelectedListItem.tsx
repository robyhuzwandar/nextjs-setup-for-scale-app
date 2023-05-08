import * as React from 'react';

import { theme } from '@/src/shared/theme';
import CheckIcon from '@mui/icons-material/Check';
import styled from 'styled-components';
import { Text } from './Text';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

interface ItemProps {
  selected: boolean;
}

const Item = styled.div<ItemProps>`
  border: ${({ selected }) => (selected ? '2px' : '1px')} solid
    ${({ selected }) => (selected ? theme.colors.success : 'grey')};
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${({ selected }) =>
    selected ? 'rgba(27, 217, 123, 0.1)' : theme.colors.white};
  margin-right: 10px;
  width: 100%;
  max-width: 180px;
  height: 60px;
  align-items: center;
  display: flex;
`;

const TextValue = styled(Text)<ItemProps>`
  font-weight: 700;
  color: ${({ selected }) =>
    selected ? theme.colors.black : 'rgba(45,42,64,0.6)'};
`;

const ContainerContentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: space-between;
  width: 100%;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CheckboxIcon = styled(CheckIcon)`
  width: 18px;
  height: 18px;
  color: ${theme.colors.success};
`;

export interface CheckboxData {
  label: string;
  value?: number;
}

interface SelectedListItemProps {
  data: CheckboxData[];
  defaultSelected?: CheckboxData;
  onSelect: (item: CheckboxData) => void;
  showEmptyValue?: boolean;
}

const SelectedListItem = ({
  data,
  onSelect,
  showEmptyValue = true,
  defaultSelected,
}: SelectedListItemProps) => {
  const [selectedItem, setSelectedItem] = React.useState(defaultSelected);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    onSelect(item);
  };

  React.useEffect(() => {
    setSelectedItem(defaultSelected);
  }, [defaultSelected]);

  return (
    <Container>
      {data.map((item) => {
        const isSelected =
          selectedItem?.label.toLowerCase() === item.label.toLowerCase();
        const isShowValue = Boolean(item.value) || showEmptyValue;

        return (
          <Item
            key={item.label}
            selected={isSelected}
            onClick={() => handleItemClick(item)}
          >
            <ContainerContentItem>
              <ContentItem>
                <Text fontSize="13px">{item.label}</Text>
                {isShowValue && (
                  <TextValue fontSize="16px" selected={isSelected}>
                    {item.value}
                  </TextValue>
                )}
              </ContentItem>
              {isSelected && <CheckboxIcon />}
            </ContainerContentItem>
          </Item>
        );
      })}
    </Container>
  );
};

export default SelectedListItem;
