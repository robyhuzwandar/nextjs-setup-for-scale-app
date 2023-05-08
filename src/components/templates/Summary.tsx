import { theme } from '@/src/shared/theme';
import styled from 'styled-components';
import { Text } from '../Text';
import { Title } from '../Title';
import { Button } from '../styles/Button';
import { Container } from '../styles/Container';
import { SummaryDetailsPrice } from '../summary/SummaryDetailsPrice';
import { SummaryTextSection } from '../summary/SummaryTextSection';

const SummaryStyled = styled(Container)`
  border-left: 2px;
  max-width: 500%;
  border-left: 1px solid rgba(255, 138, 0, 0.2);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 19px;
`;

const TotalPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 30px;
`;

const TitleStyle = styled(Title)`
  margin-bottom: 10px;
`;

interface SummaryProps {
  onClickSubmit?: () => void;
  buttonLabel: string;
  deliveryEstimation?: string;
  isSendAsDropshipper?: boolean;
  paymentMethod?: string;
}

const Summary = ({
  onClickSubmit,
  buttonLabel,
  deliveryEstimation,
  paymentMethod,
  isSendAsDropshipper = false,
}: SummaryProps) => (
  <SummaryStyled>
    <div>
      <TitleStyle color={theme.colors.primary}>Summary</TitleStyle>
      <Text color={theme.colors.blackOpacity60}>10 items purchased</Text>

      {Boolean(deliveryEstimation) && (
        <SummaryTextSection
          label="Delivery estimation"
          description="today by GO-SEND"
        />
      )}

      {Boolean(paymentMethod) && (
        <SummaryTextSection
          label="Payment Method"
          description="Bank Transfer"
        />
      )}
    </div>

    <div>
      <SummaryDetailsPrice
        constOfGoods={500000}
        dropshippingFee={isSendAsDropshipper ? 5900 : undefined}
        goSendShipment={15000}
      />
      <TotalPriceContainer>
        <TotalPrice>Total</TotalPrice>
        <TotalPrice>505,900</TotalPrice>
      </TotalPriceContainer>
      {Boolean(onClickSubmit) && (
        <Button type="submit" form="hook-form" onClick={onClickSubmit}>
          {buttonLabel}
        </Button>
      )}
    </div>
  </SummaryStyled>
);

export default Summary;
