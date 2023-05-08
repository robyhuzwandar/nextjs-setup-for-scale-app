import styled from 'styled-components';

interface RowProps {
  justifyContent?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => p.justifyContent};
`;
