import { theme } from '@/src/shared/theme';
import styled from 'styled-components';
import { Text } from '../Text';

const TextSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 11px;
  color: ${theme.colors.blackOpacity60};
`;

const GoSendContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const GoSendText = styled(Text)`
  font-weight: 700;
  margin-right: 3px;
`;

type SummaryDetailsPriceProps = {
  constOfGoods?: number;
  dropshippingFee?: number;
  goSendShipment?: number;
};

export const SummaryDetailsPrice = ({
  constOfGoods,
  dropshippingFee,
  goSendShipment,
}: SummaryDetailsPriceProps) => (
  <div>
    <TextSection>
      <Text>Cost of goods</Text>
      <Text>{constOfGoods}</Text>
    </TextSection>

    {Boolean(dropshippingFee) && (
      <TextSection>
        <Text>Dropshipping Fee</Text>
        <Text>{dropshippingFee}</Text>
      </TextSection>
    )}
    <TextSection>
      <GoSendContainer>
        <GoSendText>GO-SEND</GoSendText>
        <Text>shipment</Text>
      </GoSendContainer>
      <Text>{goSendShipment}</Text>
    </TextSection>
  </div>
);
