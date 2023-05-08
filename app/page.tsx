'use client';

import { Button } from '@/src/components/styles/Button';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
`;

const Welcoming = () => {
  const route = useRouter();

  const gotoDeliverDetails = () => {
    route.push('delivery-details');
  };

  return (
    <Container>
      <Button onClick={gotoDeliverDetails}>Go to delivery details</Button>
    </Container>
  );
};

export default Welcoming;
