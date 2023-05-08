import styled from 'styled-components';

interface TextProps {
  color?: string;
  fontSize?: string;
}

export const Text = styled.div<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '14px'};
  color: ${({ color }) => color};
`;
