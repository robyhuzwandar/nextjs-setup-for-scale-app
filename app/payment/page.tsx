'use client';

import SelectedListItem from '@/src/components/SelectedListItem';
import { Title } from '@/src/components/Title';
import { Scaffold } from '@/src/components/templates/Scaffold';
import Summary from '@/src/components/templates/Summary';
import usePayment from '@/src/hooks/usePayment';
import { theme } from '@/src/shared/theme';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Content = styled.div`
  display: flex;
  flex: 2;
  margin-right: 20px;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
`;

const SummaryStyle = styled(Summary)`
  flex: 1;
`;

export default function Payment() {
  const route = useRouter();
  const {
    payment,
    shipment,
    selectedPayment,
    selectedShipment,
    onSelectPayment,
    onSelectShipment,
  } = usePayment();

  const onClickSubmit = () => {
    route.replace('finish');
  };

  const onClickBack = () => {
    route.push('delivery-details');
  };

  return (
    <Scaffold step={2}>
      <Container>
        <Content>
          <div>
            <TitleContainer>
              <Title color={theme.colors.primary}>Shipment</Title>
            </TitleContainer>
            <SelectedListItem
              data={shipment}
              defaultSelected={selectedShipment}
              onSelect={onSelectShipment}
            />
          </div>
          <div>
            <TitleContainer>
              <Title color={theme.colors.primary}>Payment</Title>
            </TitleContainer>

            <SelectedListItem
              data={payment}
              defaultSelected={selectedPayment}
              onSelect={onSelectPayment}
              showEmptyValue={false}
            />
          </div>
        </Content>

        <SummaryStyle
          buttonLabel="Pay with e-Wallet"
          deliveryEstimation="today by GO-SEND"
          onClickSubmit={onClickSubmit}
        />
      </Container>
    </Scaffold>
  );
}
