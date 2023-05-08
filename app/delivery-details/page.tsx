'use client';

import { useRouter } from 'next/navigation';

import Checkbox from '@/src/components/Checkbox';
import { Title } from '@/src/components/Title';
import { DeliveryDetailsForm } from '@/src/components/templates/DeliveryDetailsForm';
import { Scaffold } from '@/src/components/templates/Scaffold';
import Summary from '@/src/components/templates/Summary';
import useDeliveryDetails from '@/src/hooks/useDeliveryDetails';
import { theme } from '@/src/shared/theme';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
  flex: 2;
  margin-right: 20px;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 36px;
  margin-top: 24px;
`;

const SummaryStyle = styled(Summary)`
  flex: 1;
`;

export default function DeliveryDetails() {
  const route = useRouter();

  const { deliveryDetails, onChangeInput, onChangeSendAsDropshipper } =
    useDeliveryDetails();

  const onClickSubmit = () => {
    route.replace('payment');
  };

  return (
    <Scaffold step={1}>
      <ContentContainer>
        <Content>
          <HeaderSection>
            <Title color={theme.colors.primary}>Delivery details</Title>
            <Checkbox
              label="Send as dropshipper"
              defaultChecked={deliveryDetails.isSendAsDropshipper}
              onChange={(checked) => {
                onChangeSendAsDropshipper(checked);
              }}
            />
          </HeaderSection>
          <DeliveryDetailsForm onChange={onChangeInput} {...deliveryDetails} />
        </Content>
        <SummaryStyle
          onClickSubmit={onClickSubmit}
          isSendAsDropshipper={deliveryDetails.isSendAsDropshipper}
          buttonLabel="Continue to Payment"
        />
      </ContentContainer>
    </Scaffold>
  );
}
