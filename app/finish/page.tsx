'use client';

import BackButton from '@/src/components/BackButton';
import Navbar from '@/src/components/Navbar';
import { Text } from '@/src/components/Text';
import { Title } from '@/src/components/Title';
import Summary from '@/src/components/templates/Summary';
import { theme } from '@/src/shared/theme';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${theme.colors.white};
  padding: 40px;
  margin: 40px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
  flex: 2;
  margin-right: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrderIdStyled = styled(Text)`
  margin-top: 26px;
  margin-bottom: 7px;
`;
const Description = styled(Text)`
  margin-bottom: 57px;
`;

const SummaryStyle = styled(Summary)`
  flex: 1;
`;

export default function Finish() {
  const route = useRouter();

  const onClickBack = () => {
    route.replace('/');
  };

  return (
    <Container>
      <Navbar currentStep={3} />
      <ContentContainer>
        <Content>
          <div>
            <Title fontSize="36px" color={theme.colors.primary}>
              Thank you
            </Title>
            <OrderIdStyled>Order ID : XXKYB</OrderIdStyled>
            <Description color="rgba(0,0,0,0.6)">
              Your order will be delivered today with GO-SEND
            </Description>
            <BackButton label="Go to homepage" onClick={onClickBack} />
          </div>
        </Content>

        <SummaryStyle
          buttonLabel="Pay with e-Wallet"
          deliveryEstimation="today by GO-SEND"
          paymentMethod="Bank Transfer"
        />
      </ContentContainer>
    </Container>
  );
}
